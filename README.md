# Student Management System

This project is a simple student management system that allows users to add, view, update, and delete student records. It consists of a server-side API built with Node.js and Express, and a client-side web interface using HTML, CSS, and JavaScript.

## Features

- **Add Student:** Users can add a new student to the system by providing registration ID, name, gender, and department.

- **View Students:** The system displays a list of all students with their details, including registration ID, name, gender, and department.

- **Update Student:** Users can update existing student records by providing updated information such as name, gender, and department.

- **Delete Student:** Students can be deleted from the system using their unique registration ID.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Student-Management-System.git

   Navigate to the project directory:
**How To Setup**
cd Student-Management-System

**Install dependencies:**
npm install

**Usage**
Start the server:
node app.js
The server will be running at http://localhost:3000.

Open index.html in a web browser to use the web interface.

**API Endpoints**
GET /api/students: Get a list of all students.

GET /api/students/findStudent/:id: Get details of a specific student by registration ID.

POST /api/students/addStudent: Add a new student.

PUT /api/students/updateStudent/:id: Update information for a specific student.

DELETE /api/students/deleteStudent/:id: Delete a student by registration ID.

**If you'd like to contribute to the project, please follow these steps:**

Fork the repository
Create a new branch (git checkout -b feature/new-feature)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/new-feature)
Create a pull request
