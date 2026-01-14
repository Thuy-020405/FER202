// StudentList.jsx dùng để hiển thị danh sách sinh viên, dữ liệu của
// các sinh viên được lấy từ studentData.js
import React from 'react';
import Student from './Student';
import { studentLists } from '../data/StudentData';

function StudentList() {
    /* Sử dụng hàm map để lặp qua mảng studentLists, dữ liệu được chứa trong container */
    return (
        <div className="student-list-container">
            {studentLists.map((student) => (
                <Student key={student.id} student={student} />
            ))}
        </div>
    );
}

export default StudentList;