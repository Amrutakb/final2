import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    course_code: '',
    course_name: '',
    category: '',
    lectures: '',
    tutorials: '',
    practicals: '',
    credits: '',
    contact_hours: '',
    ISA: '',
    ESA: '',
    Total: '',
    Exam_Duration: '3 hours'
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/getOne/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course for edit:', error);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8001/api/editCourse/${id}`, course);
      // Handle success (e.g., redirect or display a success message)
    } catch (error) {
      // Handle error
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className='editCourse'>
      <Link to={"/"}>Back</Link>
      <h3>Edit Course</h3>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="lectures">lectures</label>
          <input
            type='text'
            id="lectures"
            value={course.lectures}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="tutorials">tutorials</label>
          <input
            type='text'
            id="tutorials"
            value={course.tutorials}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="practicals">practicals</label>
          <input
            type='text'
            id="practicals"
            value={course.practicals}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="credits">credits</label>
          <input
            type='number'
            id="credits"
            value={course.credits}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="contact_hours">contact_hours</label>
          <input
            type='text'
            id="contact_hours"
            value={course.contact_hours}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="ISA">ISA</label>
          <input
            type='text'
            id="ISA"
            value={course.ISA}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="ESA">ESA</label>
          <input
            type='text'
            id="ESA"
            value={course.ESA}
            onChange={handleChange}
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="Total">Total</label>
          <input
            type='text'
            id="Total"
            value={course.Total}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Edit;
