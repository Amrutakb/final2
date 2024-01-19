// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./add.css";

// const Add = () => {
//   const [course, setCourse] = useState({
//     course_code: '',
//     course_name: '',
//     category: '',
//     credit_hours: {
//       lectures: '',
//       tutorials: '',
//       labs: ''
//     },
//     credits: '',
//     contact_hours: '',
//     isa_esa_duration: {
//       ISA: '',
//       ESA: '',
//       Total: '',
//       Exam_Duration: '3 hours'
//     }
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCourse({
//       ...course,
//       [e.target.id]: e.target.value
//     });
//     console.log(course)
//   };

//   const handleSubmit = async (e) => {
//     console.log(course)
//     e.preventDefault();

//     try {
//       console.log('Course data:', course); // Log the course data
//       const response = await axios.post("http://localhost:8000/api/create", course);
//       console.log("Submitted:", response.data);
//       toast.success(response.data.msg, { position: "top-right" });
//       navigate("/");
//     } catch (error) {
//       console.error('Error adding course:', error);
//       toast.error("Error adding course", { position: "top-right" });
//     }

//     // Clear the form fields after submission if needed
//     setCourse({
//       course_code: '',
//       course_name: '',
//       category: '',
//       credit_hours: {
//         lectures: '',
//         tutorials: '',
//         labs: ''
//       },
//       credits: '',
//       contact_hours: '',
//       isa_esa_duration: {
//         ISA: '',
//         ESA: '',
//         Total: '',
//         Exam_Duration: '3 hours'
//       }
//     });
//   };

//    const deleteCourse = async () => {
//     try {
//       // Check if course.id and course.modelType are defined
//       if (!course.id || !course.modelType) {
//         console.error('Error deleting course: id or modelType is undefined');
//         toast.error("Error deleting course", { position: "top-right" });
//         return;
//       }

//       // Assuming course.id and course.modelType are available
//       await axios.delete(`http://localhost:8000/delete/${course.id}/${course.modelType}`);
//       // Handle success (e.g., redirect or display a success message)
//     } catch (error) {
//       // Handle error
//       console.error('Error deleting course:', error);
//       toast.error("Error deleting course", { position: "top-right" });
//     }
//   };

//   const editCourse = async () => {
//     try {
//       // Assuming course.id is available, replace it with the actual property
//       await axios.put(`http://localhost:8000/editCourse/${course.id}/${course.modelType}`, /* your edit data here */);
//       // Handle success (e.g., redirect or display a success message)
//     } catch (error) {
//       // Handle error
//       console.error('Error editing course:', error);
//       toast.error("Error editing course", { position: "top-right" });
//     }
//   };

//   return (
//     <div className='addcourse'>
//       <Link to={"/"}>Back</Link>
//       <h3>Add Course</h3>
//       <form onSubmit={handleSubmit} className='addcourseForm'>
//         <div className='inputGroup'>
//           <label htmlFor="course_code">Course Code</label>
//           <input
//             type='text'
//             id="course_code"
//             value={course.course_code}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="course_name">Course Name</label>
//           <input
//             type='text'
//             id="course_name"
//             value={course.course_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="category">category</label>
//           <input
//             type='text'
//             id="category"
//             value={course.category}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credit_hours.lectures">Lectures</label>
//           <input
//             type='number'
//             id="credit_hours.lectures"
//             value={course.credit_hours.lectures}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credit_hours.tutorials">Tutorials</label>
//           <input
//             type='text'
//             id="credit_hours.tutorials"
//             value={course.credit_hours.tutorials}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credit_hours.labs">Practicals</label>
//           <input
//             type='text'
//             id="credit_hours.labs"
//             value={course.credit_hours.labs}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credits">Credits</label>
//           <input
//             type='number'
//             id="credits"
//             value={course.credits}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="contact_hours">Contact Hours</label>
//           <input
//             type='text'
//             id="contact_hours"
//             value={course.contact_hours}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="isa_esa_duration.ISA">ISA</label>
//           <input
//             type='text'
//             id="isa_esa_duration.ISA"
//             value={course.isa_esa_duration.ISA}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="isa_esa_duration.ESA">ESA</label>
//           <input
//             type='text'
//             id="isa_esa_duration.ESA"
//             value={course.isa_esa_duration.ESA}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className='inputGroup'>
// //           <label htmlFor="isa_esa_duration.Total">Total</label>
// //           <input
// //             type='text'
// //             id="isa_esa_duration.Total"
// //             value={course.isa_esa_duration.Total}
// //             onChange={handleChange}
// //           />
// //         </div>

// //         <button type="submit">Submit</button>
// //       </form>
// //       <button type="button" onClick={deleteCourse}>Delete Course</button>
// //       <button type="button" onClick={editCourse}>Edit Course</button>
// //     </div>
// //   );
// // }

// // export default Add;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./add.css";

// const Add = () => {
//   const [course, setCourse] = useState({
//     course_code: '',
//     course_name: '',
//     category: '',
//     credit_hours: {
//       lectures: '',
//       tutorials: '',
//       labs: ''
//     },
//     credits: '',
//     contact_hours: '',
//     isa_esa_duration: {
//       ISA: '',
//       ESA: '',
//       Total: '',
//       Exam_Duration: '3 hours'
//     }
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams(); // Extract course ID from URL parameters

//   const handleChange = (e) => {
//     setCourse((prevCourse) => {
//       const updatedCourse = { ...prevCourse };

//       // If the input is part of nested state (e.g., credit_hours, isa_esa_duration), handle it accordingly
//       const path = e.target.id.split('.');
//       if (path.length === 1) {
//         updatedCourse[path[0]] = e.target.value;
//       } else if (path.length === 2) {
//         updatedCourse[path[0]] = { ...updatedCourse[path[0]], [path[1]]: e.target.value };
//       }

//       return updatedCourse;
//     });
//     console.log(course)
//   };

//   const handleSubmit = async (e) => {
//     console.log(course)
//     e.preventDefault();

//     try {
//       const dataToSend = {
//         ...course,
//         modelType: 'Scheme'
//       };

//       if (isEditing) {
//         // If editing, make a PUT request
//         await axios.put(`http://localhost:8000/editCourse/${id}`, dataToSend);
//         toast.success('Course edited successfully', { position: 'top-right' });
//       } else {
//         // If adding, make a POST request
//         await axios.post("http://localhost:8000/api/create", dataToSend);
//         toast.success('Course added successfully', { position: 'top-right' });
//       }

//       navigate("/");
//     } catch (error) {
//       console.error('Error handling course:', error);
//       toast.error("Error handling course", { position: "top-right" });
//     }

//     // Clear the form fields after submission if needed
//     setCourse({
//       course_code: '',
//       course_name: '',
//       category: '',
//       credit_hours: {
//         lectures: '',
//         tutorials: '',
//         labs: ''
//       },
//       credits: '',
//       contact_hours: '',
//       isa_esa_duration: {
//         ISA: '',
//         ESA: '',
//         Total: '',
//         Exam_Duration: '3 hours'
//       }
//     });
//   };

//   useEffect(() => {
//     const fetchCourseById = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/getOne/${id}`);
//         const existingCourse = response.data;
//         setCourse(existingCourse);
//         setIsEditing(true);
//       } catch (error) {
//         console.error('Error fetching course by ID:', error);
//       }
//     };

//     if (id) {
//       // If there's an ID in the URL, fetch and edit the course
//       fetchCourseById();
//     }
//   }, [id]);

//      const deleteCourse = async () => {
//     try {
//       // Check if course.id and course.modelType are defined
//       if (!course.id || !course.modelType) {
//         console.error('Error deleting course: id or modelType is undefined');
//         toast.error("Error deleting course", { position: "top-right" });
//         return;
//       }

//       // Assuming course.id and course.modelType are available
//       await axios.delete(`http://localhost:8000/delete/${course.id}/${course.modelType}`);
//       // Handle success (e.g., redirect or display a success message)
//     } catch (error) {
//       // Handle error
//       console.error('Error deleting course:', error);
//       toast.error("Error deleting course", { position: "top-right" });
//     }
//   };

//   const editCourse = async () => {
//     try {
//       // Assuming course.id is available, replace it with the actual property
//       await axios.put(`http://localhost:8000/editCourse/${course.id}/${course.modelType}`, /* your edit data here */);
//       // Handle success (e.g., redirect or display a success message)
//     } catch (error) {
//       // Handle error
//       console.error('Error editing course:', error);
//       toast.error("Error editing course", { position: "top-right" });
//     }
//   };

//   return (
//     <div className='addcourse'>
//       <Link to={"/"}>Back</Link>
//       <h3>Add Course</h3>
//       <form onSubmit={handleSubmit} className='addcourseForm'>
//       <div className='inputGroup'>
//           <label htmlFor="semester">semester</label>
//           <input
//             type='number'
//             id="semester"
//             value={course.semester}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="course_code">Course Code</label>
//           <input
//             type='text'
//             id="course_code"
//             value={course.course_code}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="course_name">Course Name</label>
//           <input
//             type='text'
//             id="course_name"
//             value={course.course_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="category">category</label>
//           <input
//             type='text'
//             id="category"
//             value={course.category}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credit_hours.lectures">Lectures</label>
//           <input
//             type='number'
//             id="credit_hours.lectures"
//             value={course.credit_hours.lectures}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credit_hours.tutorials">Tutorials</label>
//           <input
//             type='number'
//             id="credit_hours.tutorials"
//             value={course.credit_hours.tutorials}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credit_hours.labs">Practicals</label>
//           <input
//             type='number'
//             id="credit_hours.labs"
//             value={course.credit_hours.labs}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="credits">Credits</label>
//           <input
//             type='number'
//             id="credits"
//             value={course.credits}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="contact_hours">Contact Hours</label>
//           <input
//             type='number'
//             id="contact_hours"
//             value={course.contact_hours}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="isa_esa_duration.ISA">ISA</label>
//           <input
//             type='number'
//             id="isa_esa_duration.ISA"
//             value={course.isa_esa_duration.ISA}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="isa_esa_duration.ESA">ESA</label>
//           <input
//             type='number'
//             id="isa_esa_duration.ESA"
//             value={course.isa_esa_duration.ESA}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='inputGroup'>
//           <label htmlFor="isa_esa_duration.Total">Total</label>
//           <input
//             type='number'
//             id="isa_esa_duration.Total"
//             value={course.isa_esa_duration.Total}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//       <button type="button" onClick={deleteCourse}>Delete Course</button>
//       <button type="button" onClick={editCourse}>Edit Course</button>
//     </div>
//   );
// }

// export default Add;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./add.css";

const Add = () => {
  const [course, setCourse] = useState({
    semester: '', // New field for semester
    course_code: '',
    course_name: '',
    category: '',
    credit_hours: {
      lectures: '',
      tutorials: '',
      labs: ''
    },
    credits: '',
    contact_hours: '',
    isa_esa_duration: {
      ISA: '',
      ESA: '',
      Total: '',
      Exam_Duration: '3 hours'
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Extract course ID from URL parameters

  const handleChange = (e) => {
    const { id, value } = e.target;

    console.log('Changing:', id, value);

    setCourse((prevCourse) => {
      const path = id.split('.');
      if (id === 'semester') {
        return { ...prevCourse, semester: value };
      } else if (path.length === 1) {
        return { ...prevCourse, [id]: value };
      } else if (path.length === 2) {
        return {
          ...prevCourse,
          [path[0]]: { ...prevCourse[path[0]], [path[1]]: value }
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        ...course,
        modelType: 'Scheme'
      };

      console.log('Data to send:', dataToSend);

      if (isEditing) {
        // If editing, make a PUT request
        const response = await axios.put(`http://localhost:8001/api/editCourse/${id}`, {
          ...course,
          modelType: 'Scheme',
        });
        console.log('Edit Course Response:', response.data);
        toast.success('Course edited successfully', { position: 'top-right' });
      } else {
        // If adding, make a POST request
        const response = await axios.post("http://localhost:8001/api/create", dataToSend);
        console.log('Add Course Response:', response.data);
        toast.success('Course added successfully', { position: 'top-right' });
      }

      // Clear the form fields after submission if needed
      setCourse({
        semester: '', // Set the default value for semester
        course_code: '',
        course_name: '',
        category: '',
        credit_hours: {
          lectures: '',
          tutorials: '',
          labs: ''
        },
        credits: '',
        contact_hours: '',
        isa_esa_duration: {
          ISA: '',
          ESA: '',
          Total: '',
          Exam_Duration: '3 hours'
        }
      });
    } catch (error) {
      console.error('Error handling course:', error);
      toast.error("Error handling course", { position: "top-right" });
    }
  };
  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/getOne/${id}`);
        const existingCourse = response.data;
        setCourse(existingCourse);
        setIsEditing(true);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching course by ID:', error);
      }
    };

    if (id) {
      // If there's an ID in the URL, fetch and edit the course
      fetchCourseById();
    }
  }, [id]);

  const deleteCourse = async () => {
    try {
      // Check if course.id and course.modelType are defined
      if (!course.id || !course.modelType) {
        console.error('Error deleting course: id or modelType is undefined');
        toast.error("Error deleting course", { position: "top-right" });
        return;
      }

      // Assuming course.id and course.modelType are available
      await axios.delete(`http://localhost:8001/api/delete/${course.id}/${course.modelType}`);
      // Handle success (e.g., redirect or display a success message)
    } catch (error) {
      // Handle error
      console.error('Error deleting course:', error);
      toast.error("Error deleting course", { position: "top-right" });
    }
  };

  return (
    <div className='addcourse'>
      <Link to={"/"}>Back</Link>
      <h3>{isEditing ? 'Edit Course' : 'Add Course'}</h3>
      <form onSubmit={handleSubmit} className='addcourseForm'>
        <div className='inputGroup'>
          <label htmlFor="semester">Semester</label>
          <input
            type='number'
            id="semester"
            value={course.semester}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="course_code">Course Code</label>
          <input
            type='text'
            id="course_code"
            value={course.course_code}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="course_name">Course Name</label>
          <input
            type='text'
            id="course_name"
            value={course.course_name}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="category">category</label>
          <input
            type='text'
            id="category"
            value={course.category}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="credit_hours.lectures">Lectures</label>
          <input
            type='number'
            id="credit_hours.lectures"
            value={course.credit_hours.lectures}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="credit_hours.tutorials">Tutorials</label>
          <input
            type='number'
            id="credit_hours.tutorials"
            value={course.credit_hours.tutorials}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="credit_hours.labs">Practicals</label>
          <input
            type='number'
            id="credit_hours.labs"
            value={course.credit_hours.labs}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="credits">Credits</label>
          <input
            type='number'
            id="credits"
            value={course.credits}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="contact_hours">Contact Hours</label>
          <input
            type='number'
            id="contact_hours"
            value={course.contact_hours}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="isa_esa_duration.ISA">ISA</label>
          <input
            type='number'
            id="isa_esa_duration.ISA"
            value={course.isa_esa_duration.ISA}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="isa_esa_duration.ESA">ESA</label>
          <input
            type='number'
            id="isa_esa_duration.ESA"
            value={course.isa_esa_duration.ESA}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="isa_esa_duration.Total">Total</label>
          <input
            type='number'
            id="isa_esa_duration.Total"
            value={course.isa_esa_duration.Total}
            onChange={handleChange}
          />
        </div>

        <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
      </form>
      {isEditing && (
        <div>
          <button type="button" onClick={deleteCourse}>Delete Course</button>
        </div>
      )}
    </div>
  );
}

export default Add;
