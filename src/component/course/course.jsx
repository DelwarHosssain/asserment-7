import { useEffect, useState } from "react";
import Cousedata from "../Couse-data/Cousedata";

const Course = () => {

    const[course, setcourse] =useState([])
    useEffect(() =>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setcourse(data))
    },[])

    return (
        <div className="md:w-3/4 ">
            <h1>course:{course.length}</h1>
            <Cousedata></Cousedata>
        </div>
    );
};

export default Course;