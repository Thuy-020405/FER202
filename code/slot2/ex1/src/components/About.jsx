import React from 'react';

// khai báo 1 đối tượng student gồm id, name, avatar, grade
const student = {
    id: 1,
    name: "dinh thuy",
    avatar: "avatar.jpg",
    grade: 8.5
};

export default function About() {
    const { id, name, avatar, grade, ...rest } = student;
    console.log(student);
    return (
        <div>
            <h2>About Student</h2>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Grade: {grade}</p>
            <img src={avatar} alt={name} width="100" />
            {Object.keys(rest).length > 0 && (
                <>
                    <h3>Other info</h3>
                    <pre>{JSON.stringify(rest, null, 2)}</pre>
                </>
            )}
        </div>
    );
}