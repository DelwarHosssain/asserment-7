/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import Deshbord from "../deshbord/deshbord";

const Course = () => {

    const[course, setCourse] =useState([]);
    const[deshbordData, setDeshbordData] =useState([]);
    const [totalRemaining, setTotalRemaining]=useState(0)
    const [TotalTime, setTotalTime]=useState(0)
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])

    const hanglarDeshbord=(course)=>{
        // eslint-disable-next-line no-unused-vars
        const isExist = deshbordData.find((itam) => itam.id == course.id)
        
        let count = parseInt(course.time);
        // eslint-disable-next-line no-unused-vars
        let counts = parseInt(course.peice);

        if(isExist){
           return alert("all ready book");
            }
            else{
                deshbordData.forEach((item) =>{
                    count+= parseInt(item.time);
                })
                deshbordData.forEach((item) =>{
                    counts+= parseInt(item.peice);
                })
                console.log(counts)
                
                const totalRemaining =20-count;
                if(count>20){
                    return alert("You Limited End")
                }
                setTotalTime(count);
                setTotalRemaining(totalRemaining);
                setDeshbordData([...deshbordData,course]);

                setTotalPrice(totalPrice + parseFloat(course.price));
                
        }
        
    }
    console.log(deshbordData); 
    
    return (
        <div className="mx-10  md:flex md:container md:mx-auto xl:container xl:mx-auto">
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
                    <div onClick={() => hanglarDeshbord(course)} className="w-full bg-[#2f80ed] text-center rounded-lg p-2 ">
                        <button className="text-lg font-medium text-white">Select</button>
                   </div>
                </div>
                    ))
                }
            </div>
             
             <div className="md:w-1/4">
                <div className="bg-white mt-5 md:mt-auto p-5 shadow-lg shadow-indigo-500/50 rounded-lg space-y-4 gap-5 md:ml-12 w-auro md:w-96 lg:w-72 " >
             <Deshbord deshbordData={deshbordData} totalRemaining={totalRemaining} TotalTime={TotalTime} totalPrice={totalPrice} >
             </Deshbord>
             </div>
             </div>
        </div>
    );
};

export default Course;