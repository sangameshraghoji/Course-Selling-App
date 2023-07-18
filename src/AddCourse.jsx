import { useState } from 'react'
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


function AddCourse(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant = "outlined" style = {{width: 350, padding: 20, marginTop: 20}}>  
              
              <TextField  id = "title" label="Title" variant="outlined" fullWidth={true}
               />
              <br></br>
              <br></br>
              <TextField  id = "description" label="Description" variant="outlined" fullWidth={true} type="text"
              />
              
              <br></br> 
              <br></br>
              <Button 
                  
                  variant="contained"

                  onClick = {() => {
                    let title = document.getElementById("title").value;
                    let description = document.getElementById("description").value;
                    

                    function callback2(data){
                      console.log(data);
                    }
                    function callback1(res){
                      res.json().then(callback2);
                    }
                    
                    fetch("http://localhost:3000/admin/courses", {
                      method: "POST",
                      body: JSON.stringify({
                         title: "helloa" 
                    
                      }),
                      mode: 'cors',
                      headers: {
                        "Content-type": "appilcation/json",
                        "Authorization": "Bearer "+ localStorage.getItem("token")
                      }}).then(callback1)
                       
                  }
                }>
                Add Course </Button>
            </Card>

        </div>
    </div>
    )

}

export default AddCourse;