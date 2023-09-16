/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import Deshbord from "../deshbord/deshbord";

const Course = () => {

    const[course, setcourse] =useState([])
    useEffect(() =>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setcourse(data))
    },[])

    const hanglarDeshbord=()=>{
        console.log('iam here')
    }
    
    return (
        <div className="mx-14  md:flex md:container md:mx-auto xl:container xl:mx-auto">
            <div className="md:w-3/4 md:grid md:grid-cols-2  lg:grid-cols-3 gap-10 md:gap-5 " >
                {
                course.map(course =>(
                <div key={course.id} className="bg-white p-5 shadow-lg shadow-indigo-500/50 rounded-lg space-y-4 gap-5">
                    <img className="" src= {course.img} alt="" />
                   <h1 className="text-lg font-semibold ">{course.title}</h1>
                    <p className="text-base text-[#737272]">{course.description}</p>
                    <div className="flex justify-between">
                        <h1 className="text-2xl">{course.price_icon}</h1>
                        <p className="text-base font-medium text-[#737272]">Price: {course.price}</p>
                        <h3 className="text-2xl">{course.bookmark_icon}</h3>
                        <h2 className="text-base  font-medium text-[#737272]">Credit: {course.time}</h2>
                    </div>
                    <div onClick={() => hanglarDeshbord()} className="w-full bg-[#2f80ed] text-center rounded-lg p-2 ">
                        <button className="text-lg font-medium text-white">Select</button>
                   </div>
                </div>
                    ))
                }
            </div>
             <Deshbord>
                <div className="md:w-1/4">

                </div>
             </Deshbord>
            
        </div>
    );
};

export default Course;