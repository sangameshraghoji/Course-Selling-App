import { useState } from 'react'
import { useEffect } from 'react'
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';






function Courses(){
    const [courses, setCourses]=useState([]);
    useEffect(()=>{
      function callback2(data){
        setCourses(data);               
     }
     function callback1(res){
       res.json().then(callback2);
     }
     
     fetch("http://localhost:3000/admin/courses", {
       method: "GET",
       
       mode: 'cors',
       headers: {
         "Content-type": "appilcation/json",
         "Authorization": "Bearer "+ localStorage.getItem("token")
       }}).then(callback1)
    },[])
    return(
        <div>
            {JSON.stringify(courses)}
            
                    

                    
                       
                
    </div>

    )
            }   

export default Courses;