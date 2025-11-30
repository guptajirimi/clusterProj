import react, { useState } from "react";
import Course from "./Course";

function AllCourses()
{
    const [nameofCourse,setNameOfCourse]=useState([
        {title:"Java",discription:"To laern programming"},
        {title:"React",discription:"To make wepages that lodes asyncroniously"},
        {title:"Sql",discription:"To organize data"}
    ])


    return(
        <div>
            <h1>AllCourss</h1>
            <p>List of courses elow</p>

            {

                nameofCourse.length>0 ?
                 nameofCourse.map((item)=> <Course courseName={item}/>) 
                 :
                  "No course aval."

            }
        </div>
    )
}
export default AllCourses;