import mongoose from 'mongoose';

// Schema for Credit Hours
const creditHoursSchema = new mongoose.Schema({
    lectures: Number,
    tutorials: Number,
    practicals: Number
});

// Schema for ISA and ESA Duration
const isaEsaDurationSchema = new mongoose.Schema({
    ISA: Number,
    ESA: Number,
    Total: Number,
    Exam_Duration: String
});

// Schema for Course
const courseSchema = new mongoose.Schema({
    course_code: String,
    course_name: String,
    category: String,
    credit_hours: creditHoursSchema,
    credits: Number,
    contact_hours: Number,
    isa_esa_duration: isaEsaDurationSchema
});

// Schema for Semester
const semesterSchema = new mongoose.Schema({
    semester: Number,
    courses: [courseSchema],
    total_credits: Number,
    total_contact_hours: Number,
    total_ISA: Number,
    total_ESA: Number,
    total: Number
});

// Create the model from the schema
export const Scheme = mongoose.model("Scheme", semesterSchema, "Scheme");
