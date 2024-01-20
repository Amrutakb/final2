import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.course_code}>
          <h2>{course.course_code} - {course.course_name}</h2>
          <p>Units: {course.units}</p>

          {/* Render topics */}
          <h3>Topics</h3>
          <ul>
            {course.topics.map((topic, index) => (
              <li key={index}>
                {topic.topic_name} - {topic.hours}
              </li>
            ))}
          </ul>

          {/* Render text books */}
          <h3>Text Books</h3>
          <ul>
            {course.text_books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>

          {/* Render reference books */}
          <h3>Reference Books</h3>
          <ul>
            {course.reference_books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
