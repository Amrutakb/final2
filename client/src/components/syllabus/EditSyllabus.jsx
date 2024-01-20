import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const EditSyllabus = () => {
  const { semesterNumber, courseCode } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    // Adjust these fields based on your syllabus structure
    course_code: '',
    course_name: '',
    units: [],
    text_books: [],
    reference_books: [],
    topics: [],
  });

  useEffect(() => {
    const fetchSyllabusData = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/getSyllabusBySemester`, {
          params: { semesterNumber: semesterNumber },
        });
        const courseToEdit = response.data.courses.find((c) => c.course_code === courseCode);

        if (courseToEdit) {
          setCourse(courseToEdit);
        } else {
          // Handle case when course is not found
          console.error('Course not found');
          toast.error('Course not found');
          navigate('/'); // Redirect to home or error page
        }
      } catch (error) {
        console.error('Error fetching syllabus data:', error);
        toast.error('Error fetching syllabus data');
      }
    };

    fetchSyllabusData();
  }, [semesterNumber, courseCode]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Updating Syllabus:', course); // Debugging line

    try {
      const response = await axios.put(
        `http://localhost:8001/api/editSyllabus/${semesterNumber}/${courseCode}`,
        course
      );
      console.log('Update Response:', response); // Debugging line
      toast.success('Syllabus updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating syllabus:', error);
      toast.error('Error updating syllabus');
    }
  };

  return (
    <div className="editSyllabus">
      <Link to="/">Back to Syllabus</Link>
      <h3>Edit Syllabus</h3>
      <form onSubmit={handleSubmit}>
        {/* Adjust the form fields based on your syllabus structure */}
        <div>
          <label>Course Code:</label>
          <input
            type="text"
            name="course_code"
            value={course.course_code}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="course_name"
            value={course.course_name}
            onChange={handleChange}
          />
        </div>

        {/* Additional fields for units, books, topics, etc. */}
        {/* For example, units */}
        <div>
          <label>Units:</label>
          <input
            type="text"
            name="units"
            value={course.units.join(', ')}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Syllabus</button>
      </form>
    </div>
  );
};

export default EditSyllabus;
