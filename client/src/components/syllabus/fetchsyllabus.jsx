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
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    // Element to be converted to PDF
    const element = document.getElementById('syllabusTable');
  
    // Create a clone of the table for manipulation
    const clonedTable = element.cloneNode(true);
  
    // Add rows for each topic's content in the cloned table
    const topics = clonedTable.querySelectorAll('tbody td[data-topic-content]');
    topics.forEach((topic) => {
      const rowIndex = topic.parentElement.rowIndex;
      const contentRow = clonedTable.insertRow(rowIndex + 1);
      const contentCell = contentRow.insertCell(0);
      contentCell.colSpan = clonedTable.rows[0].cells.length;
      contentCell.textContent = topic.getAttribute('data-topic-content');
    });
  
    // Generate PDF using the cloned table after a short delay to ensure full rendering
    setTimeout(() => {
      // Generate PDF
      html2pdf(clonedTable, pdfOptions);
    }, 1000); // Adjust the delay as needed
  };
  
  
  
  
  //integration part
  const generateChangeSummary = () => {
    // Navigate to the ChangeSummary component
    // You may use a library like react-router-dom for navigation
    // For simplicity, we'll use window.location.href in this example
    window.location.href = '/change-summary';
  };
  
  

  return (
    <div className="syllabusTable">
      <div>
        <label htmlFor="semester">Select Semester:</label>
        <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
          <option value={1}>Semester 1</option>
          <option value={2}>Semester 2</option>
          <option value={3}>Semester 3</option>
          <option value={4}>Semester 4</option>
          <option value={5}>Semester 5</option>
          <option value={6}>Semester 6</option>
          <option value={7}>Semester 7</option>
          <option value={8}>Semester 8</option>
        </select>
      </div>
      <button onClick={downloadPDF} className="downloadButton">
        Download as PDF
      </button>
      <table id="syllabusTable" border={1} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {syllabus.length > 0 ? (
          syllabus.map((course) => (
            <React.Fragment key={course._id}>
              <tr>
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>
                  <Link to={`/editSyllabus/${selectedSemester}/${course.course_code}`}>
                    Edit Syllabus
                  </Link>
                </td>
              </tr>

              {course.units.map((unit, unitIndex) => (
                <React.Fragment key={`${course._id}_unit_${unitIndex}`}>
                  <tr>
                    <td colSpan="3">{`Unit - ${unit.unit_number}`}</td>
                  </tr>
                  {unit.topics.map((topic, topicIndex) => (
                    <tr key={`${course._id}_topic_${topicIndex}`}>
                      <td>{topic.topic_number}</td>
                      <td>{topic.topic_name}</td>
                      <td colSpan="1">{topic.content}</td>
                      <td>{`Hours: ${topic.hours}`}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}

              <tr>
                <td colSpan="3">Text Books: {course.text_books ? course.text_books.join(', ') : 'N/A'}</td>
              </tr>

              <tr>
                <td colSpan="3">Reference Books: {course.reference_books ? course.reference_books.join(', ') : 'N/A'}</td>
              </tr>
            </React.Fragment>
          ))
        ) : (
          <tr>
            <td colSpan="3">No syllabus available.</td>
          </tr>
        )}
      </tbody>
    </table>
    <button onClick={generateChangeSummary} className="changeSummaryButton">
        Generate Change Summary
      </button>
  </div>
);
        }
export default GetSyllabus;  
