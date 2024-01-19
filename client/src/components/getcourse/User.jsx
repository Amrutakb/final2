
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './user.css';

// const User = () => {
//   const [courses, setCourses] = useState([]);
//   const [selectedSemester, setSelectedSemester] = useState(3);
//   const [selectedType, setSelectedType] = useState("Scheme"); // Default to Scheme

  
//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8001/api/getDataByTypeAndSemester/${selectedType}/${selectedSemester}`);
//       console.log("Data:", response.data);
  
//       // Assuming the response data is an array of courses
//       setCourses(response.data.Scheme || []); // Adjust this based on your API response structure
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };
  

// const handleTypeChange = (event) => {
//   const selectedType = event.target.value;
//   setSelectedType(selectedType);
// };

// const handleSemesterChange = (event) => {
//   const selectedSemester = parseInt(event.target.value, 10);
//   setSelectedSemester(selectedSemester);

//   // Fetch courses based on the selected type and semester
//   fetchCourses(selectedType, selectedSemester);
// };
  

//   useEffect(() => {
//     fetchCourses(selectedType, selectedSemester);
//   }, [selectedType, selectedSemester]);

//   return (
//     <div className="userTable">
//       <div>
//         <label htmlFor="semester">Select Semester:</label>
//         <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
//           <option value={3}>Semester 3</option>
//           <option value={4}>Semester 4</option>
//           <option value={5}>Semester 5</option>
//           <option value={6}>Semester 6</option>
//           <option value={7}>Semester 7</option>
//           <option value={8}>Semester 8</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="type">Select Type:</label>
//         <select id="type" value={selectedType} onChange={handleTypeChange}>
//           <option value="Scheme">Scheme</option>
//           <option value="Syllabus">Syllabus</option>
//         </select>
//       </div>
//       <Link to="/add" className="addButton">
//         Add course
//       </Link>
//       <table border={1} cellPadding={10} cellSpacing={0}>
//         {/* Table headers */}
//         <thead>
//           <tr>
//             <th>Course Code</th>
//             <th>Course Name</th>
//             <th>Category</th>
//             <th>Lectures</th>
//             <th>Tutorials</th>
//             <th>Practicals</th>
//             <th>Credits</th>
//             <th>Contact Hours</th>
//             <th>ISA</th>
//             <th>ESA</th>
//             <th>Total</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         {/* Table body */}
//         <tbody>
//           {courses.length > 0 ? (
//             courses.map((course) => (
//               <tr key={course._id}>
//                 <td>{course.course_code}</td>
//                 <td>{course.course_name}</td>
//                 <td>{course.category}</td>
//                 <td>{course.credit_hours?.lectures || 'N/A'}</td>
//                 <td>{course.credit_hours?.tutorials || 'N/A'}</td>
//                 <td>{course.credit_hours?.labs || 'N/A'}</td>
//                 <td>{course.credits}</td>
//                 <td>{course.contact_hours}</td>
//                 <td>{course.isa_esa_duration?.ISA || 'N/A'}</td>
//                 <td>{course.isa_esa_duration?.ESA || 'N/A'}</td>
//                 <td>{course.isa_esa_duration?.Total || 'N/A'}</td>
//                 <td>
//                   <button onClick={() => deleteCourse(course._id)}>
//                     Delete
//                   </button>
//                   <Link to={`/edit/${course._id}`}>Edit</Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="12">No courses available.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
  
// };

// export default User;
// export default User;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './user.css';

const User = () => {
  const [courses, setCourses] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(3); // Default to the 3rd semester
  const [selectedType, setSelectedType] = useState("Scheme");
  const fetchCourses = async (semester) => {
    try {
      const response = await axios.get('http://localhost:8001/api/getSchemes');
      console.log('Response:', response.data);

      if (response.data.schemes && response.data.schemes.length > 0) {
        // Assuming you want to get courses from a specific semester
        const semesterCourses = response.data.schemes
          .find((scheme) => scheme.semester === semester)
          ?.courses;
        console.log('Semester Courses:', semesterCourses);
        setCourses(semesterCourses || []);
      } else {
        setCourses([]);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSemesterChange = (event) => {
    const selectedSemester = parseInt(event.target.value, 10);
    setSelectedSemester(selectedSemester);
  };
  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);
  };

  useEffect(() => {
    fetchCourses(selectedSemester);
  }, [selectedSemester]);

  return (
    <div className="userTable">
      <div>
        <label htmlFor="semester">Select Semester:</label>
        <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
          <option value={3}>Semester 3</option>
          <option value={4}>Semester 4</option>
          <option value={5}>Semester 5</option>
          <option value={6}>Semester 6</option>
          <option value={7}>Semester 7</option>
          <option value={8}>Semester 8</option>
        </select>
        <label htmlFor="type">Select Type:</label>
        <select id="type" value={selectedType} onChange={handleTypeChange}>
          <option value="scheme">Scheme</option>
          <option value="syllabus">Syllabus</option>
        </select>
      </div>
      <Link to="/add" className="addButton">
        Add course
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Category</th>
            <th>Lectures</th>
            <th>Tutorials</th>
            <th>Practicals</th>
            <th>Credits</th>
            <th>Contact Hours</th>
            <th>ISA</th>
            <th>ESA</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course._id}>
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>{course.category}</td>
                <td>{course.credit_hours?.lectures || 'N/A'}</td>
                <td>{course.credit_hours?.tutorials || 'N/A'}</td>
                <td>{course.credit_hours?.labs || 'N/A'}</td>
                <td>{course.credits}</td>
                <td>{course.contact_hours}</td>
                <td>{course.isa_esa_duration?.ISA || 'N/A'}</td>
                <td>{course.isa_esa_duration?.ESA || 'N/A'}</td>
                <td>{course.isa_esa_duration?.Total || 'N/A'}</td>
                <td>
                  <button onClick={() => deleteCourse(course._id)}>
                    Delete
                  </button>
                  <Link to={`/edit/${course._id}`}>Edit</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No courses available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;