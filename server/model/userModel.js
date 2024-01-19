import mongoose from 'mongoose';

const unitSchema = new mongoose.Schema({
  unit_number: {
    type: Number,
    required: true,
  },
  topics: [{
    topic_number: {
      type: Number,
      required: true,
    },
    topic_name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
  }],
});

const courseSchema = new mongoose.Schema({
  semester: {
    type: Number,
    required: true,
  },
  course_code: {
    type: String,
    required: true
  },
  course_name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  credit_hours: {
    lectures: {
      type: Number,
      required: true
    },
    tutorials: {
      type: Number,
      required: true
    },
    labs: {
      type: Number,
      required: true
    }
  },
  credits: {
    type: Number,
    required: true
  },
  contact_hours: {
    type: Number,
    required: true
  },
  isa_esa_duration: {
    ISA: {
      type: Number,
      required: true
    },
    ESA: {
      type: Number,
      required: true
    },
    Total: {
      type: Number,
      required: true
    },
    Exam_Duration: {
      type: String,
      required: true
    }
  }
});

const syllabusSchema = new mongoose.Schema({
  semester: {
    type: Number,
    required: true,
  },
  courses: [{
    semester: {
      type: Number,
      required: true,
    },
    course_code: {
      type: String,
      required: true
    },
    course_name: {
      type: String,
      required: true
    },
    units: [unitSchema]
  }],
});

// Use courseSchema to create Scheme model
export const Scheme = mongoose.model("Scheme", courseSchema, "Scheme");
// Use syllabusSchema to create Syllabus model
export const Syllabus = mongoose.model("Syllabus", syllabusSchema, "Syllabus");


// Course Schema for Scheme
// const courseSchema = new mongoose.Schema({
//   course_code: {
//     type: String,
//     required: true,
//   },
//   course_name: {
//     type: String,
//     required: true,
//   },
//   credit_hours: {
//     lectures: {
//       type: Number,
//       required: true,
//     },
//     tutorials: {
//       type: Number,
//       required: true,
//     },
//     practicals: {
//       type: Number,
//       required: true,
//     },
//   },
//   credits: {
//     type: Number,
//     required: true,
//   },
//   contact_hours: {
//     type: Number,
//     required: true,
//   },
//   isa_esa_duration: {
//     ISA: {
//       type: Number,
//       required: true,
//     },
//     ESA: {
//       type: Number,
//       required: true,
//     },
//     Total: {
//       type: Number,
//       required: true,
//     },
//     Exam_Duration: {
//       type: String,
//       required: true,
//     },
//   },
// });

// // Scheme Schema
// const schemeSchema = new mongoose.Schema({
//   semester: {
//     type: Number,
//     required: true,
//   },
//   courses: [courseSchema], // Array of courses
//   total_credits: {
//     type: Number,
//     required: true,
//   },
//   total_contact_hours: {
//     type: Number,
//     required: true,
//   },
//   total_ISA: {
//     type: Number,
//     required: true,
//   },
//   total_ESA: {
//     type: Number,
//     required: true,
//   },
//   total: {
//     type: Number,
//     required: true,
//   },
// });


// // Unit Schema
// const unitSchema = new mongoose.Schema({
//   unit_number: {
//     type: Number,
//     required: true,
//   },
//   topics: [
//     {
//       topic_number: {
//         type: Number,
//         required: true,
//       },
//       topic_name: {
//         type: String,
//         required: true,
//       },
//       hours: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
// });

// // Course Schema for Syllabus
// const courseSyllabusSchema = new mongoose.Schema({
//   course_code: {
//     type: String,
//     required: true,
//   },
//   course_name: {
//     type: String,
//     required: true,
//   },
//   units: [unitSchema],  // Array of units
// });

// // Syllabus Schema
// const syllabusSchema = new mongoose.Schema({
//   semester: {
//     type: Number,
//     required: true,
//   },
//   courses: [courseSyllabusSchema], // Array of courses with units
// });

// // Use syllabusSchema to create Syllabus model
// export const Syllabus = mongoose.model("Syllabus", syllabusSchema, "Syllabuses");

// // Use schemeSchema to create Scheme model
// export const Scheme = mongoose.model("Scheme", schemeSchema, "Schemes");

