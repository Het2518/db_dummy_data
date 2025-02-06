const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://hetmonpara2022:Het2518@midnight1.vxwxn.mongodb.net/Student');

//student schema
const StudentSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    grade: String,
    subjects: [String],
    age: Number
});
const Student = mongoose.model('Student', StudentSchema);

// Sample student data
const sampleStudents = [
    { name: "John Doe", roll: 1, grade: "A", subjects: ["Math", "Science"], age: 15 },
    { name: "Jane Smith", roll: 2, grade: "B", subjects: ["History", "English"], age: 16 },
    { name: "Mike Johnson", roll: 3, grade: "A", subjects: ["Physics", "Chemistry"], age: 15 },
    { name: "Sarah Williams", roll: 4, grade: "B+", subjects: ["Biology", "Math"], age: 16 },
    { name: "Tom Brown", roll: 5, grade: "A-", subjects: ["English", "Geography"], age: 15 },
    { name: "Emma Davis", roll: 6, grade: "B", subjects: ["Chemistry", "History"], age: 16 },
    { name: "James Wilson", roll: 7, grade: "A", subjects: ["Math", "Physics"], age: 15 },
    { name: "Lisa Anderson", roll: 8, grade: "B+", subjects: ["Biology", "Chemistry"], age: 16 },
    { name: "David Taylor", roll: 9, grade: "A-", subjects: ["Geography", "History"], age: 15 },
    { name: "Amy Martin", roll: 10, grade: "B", subjects: ["Physics", "Math"], age: 16 }
];

// API routes
app.get('/add', async (req, res) => {
    await Student.deleteMany({});
    await Student.insertMany(sampleStudents);
    res.send('Students data populated!');
});

app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});


app.use(express.static('public'));

app.listen(3000, () => console.log('Server running on port 3000'));