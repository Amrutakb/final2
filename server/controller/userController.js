import { Scheme, Syllabus } from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = req.body;
    const modelType = userData.modelType;

    if (modelType === "Scheme") {
      const schemeData = new Scheme(userData);
      const savedData = await schemeData.save();
      res.status(201).json(savedData);
    } else if (modelType === "Syllabus") {
      const { semester, courses } = userData;
      // Use the semester when creating syllabus
      const syllabusData = new Syllabus({ semester, courses: courses || [] });
      const savedData = await syllabusData.save();
      res.status(201).json(savedData);
    } else {
      res.status(400).json({ msg: "Invalid modelType provided" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    const allData = { schemes };
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;

    const scheme = await Scheme.findById(id);

    if (!scheme) {
      return res.status(404).json({ error: "Scheme not found" });
    }

    res.status(200).json(scheme);
  } catch (error) {
    console.error('Get One Error:', error);
    res.status(500).json({ error: error.message });
  }
};


export const editCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { semester, ...courseData } = req.body;

    const updatedData = await Scheme.findByIdAndUpdate(
      courseId,
      { ...courseData, semester },
      { new: true }
    );

    res.status(200).json(updatedData);
  } catch (error) {
    console.error('Edit Course Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const modelType = req.params.modelType;

    let userExist;

    if (modelType === "Scheme") {
      userExist = await Scheme.findById(id);
    } else if (modelType === "Syllabus") {
      userExist = await Syllabus.findById(id);
    } else {
      return res.status(400).json({ msg: "Invalid modelType provided" });
    }

    if (!userExist) {
      return res.status(404).json({ msg: `${modelType} not found` });
    }

    await (modelType === "Scheme"
      ? Scheme.findByIdAndDelete(id)
      : Syllabus.findByIdAndDelete(id));

    res.status(200).json({ msg: `${modelType} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllSyllabus = async (req, res) => {
  try {
    const syllabus = await Syllabus.find();
    res.status(200).json(syllabus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addSyllabus = async (req, res) => {
  const syllabus = new Syllabus(req.body);
  try {
    const newSyllabus = await syllabus.save();
    res.status(201).json(newSyllabus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSyllabus = async (req, res) => {
  const { semester } = req.params;
  try {
    const deletedSyllabus = await Syllabus.findOneAndDelete({ semester: semester });
    if (!deletedSyllabus) {
      res.status(404).json({ message: 'Syllabus not found' });
      return;
    }
    res.status(200).json({ message: 'Syllabus deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// New endpoint to fetch either schemes or syllabus based on type and semester
export const getDataByTypeAndSemester = async (req, res) => {
  try {
    const { type, semester } = req.params;

    // Validate type
    if (type !== "Scheme" && type !== "Syllabus") {
      return res.status(400).json({ msg: "Invalid type provided" });
    }

    // Log the values for debugging
    console.log("Type:", type);
    console.log("Semester:", semester);

    // Fetch data based on type and semester
    const data = await (type === "Scheme" ? Scheme : Syllabus).find({ semester });

    // Log the result of the query
    console.log("Data:", data);

    res.status(200).json({ [type.toLowerCase()]: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

