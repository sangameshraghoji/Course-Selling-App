import { useState } from 'react'
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Signup(prop){
    
    return(
    <div>
      <div style={{marginTop: 50, marginBottom: 5, display: "flex", justifyContent: "center" }}>
          <Typography variant ="h6">Wecome To My Website, Sign Up</Typography>
      
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
          <Card variant = "outlined" style = {{width: 350, padding: 20, marginTop: 20}}>  
              
              <TextField id="username" label="Email" variant="outlined" fullWidth={true}
               />
              <br></br>
              <br></br>
              <TextField id="pw" label="Password" variant="outlined" fullWidth={true} type="password"
              />
              
              <br></br> 
              <br></br>
              <Button 
                  
                  variant="contained"
                  onClick = {() => {
                    let username = document.getElementById("username").value;
                    let password = document.getElementById("pw").value;
                    
                    

                    function callback2(data){
                      localStorage.setItem("token",data.token);
                      
                    }
                    function callback1(req){
                      req.json().then(callback2)
                    }
                    fetch("http://localhost:3000/admin/signup", {
                      method: "POST",
                      body: JSON.stringify({
                          username,
                          password 
                      }),
                      
                      headers: {
                        "Content-type": "appilcation/json"
                      }}).then(callback1)
                       
                  }
                }>
                Signup </Button>
          </Card>

      </div>
            
    </div>
    )
  }

export default Signup;