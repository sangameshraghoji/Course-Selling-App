import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
function Appbar(prop){
    return(
        <div style={{
            display: "flex",
            justifyContent:"space-between"
        }}>
            <div>
                <Typography variant="h4">Coursera</Typography>
            </div>
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                   <Button variant="contained" onClick = {()=>{window.location = "/signup"}}> Signup</Button>

                </div>
                <div>
                   <Button variant="contained" onClick = {()=>{window.location = "/login"}}> Signin</Button>

                </div>
                
                
            </div>

        </div>
      
    )
  }

export default Appbar;