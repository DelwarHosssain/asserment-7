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
        <div className="md:w-3/4 md:grid md:grid-cols-3 gap-10 md:gap-5">
            {
                course.map(course =><Cousedata
                     cousedata={course}
                      key={course.id}>
                      </Cousedata>)
            }
            
        </div>
    );
};

export default Course;