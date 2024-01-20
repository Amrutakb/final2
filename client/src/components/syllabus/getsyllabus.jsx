import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line
import html2pdf from 'html2pdf.js';
import './syllabus.css';

const GetSyllabus = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(3); // Default to the 3rd semester

  const fetchSyllabus = async (semester) => {
    try {
      const response = await axios.get(`http://localhost:8001/api/getSyllabusBySemester?semesterNumber=${semester}`);
      console.log('Response:', response.data);

      if (response.data.courses && response.data.courses.length > 0) {
        setSyllabus(response.data.courses);
      } else {
        setSyllabus([]);
      }
    } catch (error) {
      console.error('Error fetching syllabus:', error);
    }
  };

  const handleSemesterChange = (event) => {
    const selectedSemester = parseInt(event.target.value, 10);
    setSelectedSemester(selectedSemester);
  };

  useEffect(() => {
    fetchSyllabus(selectedSemester);
  }, [selectedSemester]);

  const downloadPDF = () => {
    // Configuration for html2pdf
    const pdfOptions = {
      margin: 10,
      filename: 'syllabus_table.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Element to be converted to PDF
    const element = document.getElementById('syllabusTable');

    // Remove the last column from the table
    const lastColumnIndex = element.rows[0].cells.length - 1;
    for (let i = 0; i < element.rows.length; i++) {
      element.rows[i].deleteCell(lastColumnIndex);
    }

    // Generate PDF after a short delay to ensure full rendering
    setTimeout(() => {
      // Generate PDF
      html2pdf(element, pdfOptions);

      // Restore the last column after generating PDF
      for (let i = 0; i < element.rows.length; i++) {
        const cell = element.rows[i].insertCell(lastColumnIndex);
        cell.style.display = 'none'; // Hide the cell
      }
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="syllabusTable">
      <div>
        <label htmlFor="semester">Select Semester:</label>
        <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
          <option value={1}>Semester 1</option>
          {/* ... (your other options) */}
        </select>
      </div>
      <button onClick={downloadPDF} className="downloadButton">
        Download as PDF
      </button>
      <table id="syllabusTable" border={1} cellPadding={10} cellSpacing={0}>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Topics</th>
            <th>Edit</th> {/* New column for editing */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {syllabus.length > 0 ? (
            syllabus.map((course) => (
              <React.Fragment key={course._id}>
                {/* Course Code and Course Name */}
                <tr>
                  <td>{course.course_code}</td>
                  <td>{course.course_name}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Link to={`/edit-course/${selectedSemester}/${course.course_code}`}>Edit</Link>
                  </td>
                </tr>
                {/* Units */}
                {course.units.map((unit, unitIndex) => (
                  <tr key={`${course._id}_unit_${unit.unit_number}`}>
                    <td colSpan="9">Unit - {unit.unit_number}</td>
                  </tr>
                ))}
                {/* Topics */}
                {course.units.map((unit) =>
                  unit.topics.map((topic) => (
                    <tr key={`${course._id}_topic_${topic.topic_number}`}>
                      <td></td>
                      <td></td>
                      <td>{topic.topic_number}</td>
                      <td>{topic.topic_name}</td>
                      <td>{topic.content}</td>
                      <td>{topic.hours}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))
                )}
                {/* Text Books */}
                <tr>
                  <td colSpan="9">Text Books: {course.text_books.join(', ')}</td>
                </tr>
                {/* Reference Books */}
                <tr>
                  <td colSpan="9">Reference Books: {course.reference_books.join(', ')}</td>
                </tr>
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="9">No syllabus available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetSyllabus;
