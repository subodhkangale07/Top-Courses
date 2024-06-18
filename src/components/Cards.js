import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) =>{
    let courses = props.courses;
    let category = props.category;
    const [likedCourse,setLikedCourses] = useState([]); // strting me sare courses unliked hai 

    function getCourses() {
        if(category === "All"){
            let allcourses = [];
            Object.values(courses).forEach( array => { // phle hmne object se values pe gye 
                array.forEach( courseData => { // then hhr values se vaha ke data pe gye 
                    allcourses.push(courseData); // then hr data to allcourses me insert or save kra liya 
                })
            })
            return allcourses;
        }
        else{
            // shows only selected data/courses
            return courses[category];
        }
      
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map( (course) =>( //  hme sare courses mil to abhi un courses ko map kiy
             <Card key={course.id} course={course} 
             likedCourse={likedCourse}
             setLikedCourses={setLikedCourses}/> // aur hr course ke liye card chahta hu    
            ))

            }

        </div>
    )

}
export default Cards