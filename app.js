// Users Collection
db.createCollection("users");

// Codekata Collection
db.createCollection("codekata");

// Attendance Collection
db.createCollection("attendance");

// Topics Collection
db.createCollection("topics");

// Tasks Collection
db.createCollection("tasks");

// Company Drives Collection
db.createCollection("company_drives");

// Mentors Collection
db.createCollection("mentors");

// Sample Users
db.users.insertMany([
    { "name": "John Doe", "email": "john@example.com", "role": "student" },
    { "name": "Jane Smith", "email": "jane@example.com", "role": "mentor" }
  ]);
  
  // Sample Codekata
  db.codekata.insertMany([
    { "user_id": ObjectId(), "problem": "Problem 1", "solved": true },
    { "user_id": ObjectId(), "problem": "Problem 2", "solved": false }
  ]);
  
  // Sample Attendance
  db.attendance.insertMany([
    { "user_id": ObjectId(), "date": ISODate("2020-10-15T00:00:00Z"), "status": "present", "task_submitted": true },
    { "user_id": ObjectId(), "date": ISODate("2020-10-20T00:00:00Z"), "status": "absent", "task_submitted": false }
  ]);
  
  // Sample Topics
  db.topics.insertMany([
    { "name": "MongoDB Basics", "date": ISODate("2020-10-10T00:00:00Z") },
    { "name": "Node.js Fundamentals", "date": ISODate("2020-10-25T00:00:00Z") }
  ]);
  
  // Sample Tasks
  db.tasks.insertMany([
    { "topic_id": ObjectId(), "description": "Task 1" },
    { "topic_id": ObjectId(), "description": "Task 2" }
  ]);
  
  // Sample Company Drives
  db.company_drives.insertMany([
    { "name": "XYZ Placement Drive", "date": ISODate("2020-10-28T00:00:00Z") },
    { "name": "ABC Recruitment Event", "date": ISODate("2020-11-05T00:00:00Z") }
  ]);
  
  // Sample Mentors
  db.mentors.insertMany([
    { "name": "Mentor A", "mentee_count": 12 },
    { "name": "Mentor B", "mentee_count": 20 }
  ]);
  