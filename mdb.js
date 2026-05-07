const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = 3000;

// 🔗 Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 📘 Create Schema
const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: Number,
  department: String,
  marks: Number
});

// 📂 Create Model (collection = students)
const Student = mongoose.model("Student", studentSchema);

/**
 * 📥 GET → Fetch all students
 */
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

/**
 * ➕ POST → Add new student
 */
app.post("/students", async (req, res) => {
  const { name, rollNumber, department, marks } = req.body;

  if (!name || !rollNumber || !department || !marks) {
    return res.status(400).json({ message: "All fields required" });
  }

  const student = new Student({
    name,
    rollNumber,
    department,
    marks
  });

  await student.save();

  res.status(201).json({
    message: "Student added",
    student
  });
});

/**
 * ✏️ PUT → Update student
 */
app.put("/students/:id", async (req, res) => {
  const { id } = req.params;

  const updatedStudent = await Student.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  if (!updatedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({
    message: "Student updated",
    student: updatedStudent
  });
});

/**
 * ❌ DELETE → Remove student
 */
app.delete("/students/:id", async (req, res) => {
  const { id } = req.params;

  const deletedStudent = await Student.findByIdAndDelete(id);

  if (!deletedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({
    message: "Student deleted",
    student: deletedStudent
  });
});

/**
 * 🚀 Start Server
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});