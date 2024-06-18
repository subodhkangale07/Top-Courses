import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App =() =>{
  
  const [courses,setcourses] = useState(null);
  const [loading,setloading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setloading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setcourses(output.data); 

    }
    catch(error){
      toast.error("Something went wrong");
    }
    setloading(false);
  }
  useEffect( ()=> {
    fetchData();

  },[]); 
  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      
     <div>
      <Navbar className/>
     </div>

     <div className="bg-bgDark2">
       <div>
          <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
          />
        </div>
     
     <div className="flex flex-wrap justify-center items-center max-w-[1200px] w-11/12 min-h-[50vh] mx-auto">
     {
      loading ? (<Spinner></Spinner>):(<Cards courses={courses} category={category} ></Cards>)
     }
     </div>
     </div>


  </div>
   
  );

 };


export default App;
