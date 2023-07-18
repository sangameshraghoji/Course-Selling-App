import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Signin(prop){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
    <div>
      <div style={{marginTop: 50, marginBottom: 5, display: "flex", justifyContent: "center" }}>
          <Typography variant ="h6">Wecome To My Website, Sign In</Typography>
      
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
          <Card variant = "outlined" style = {{width: 350, padding: 20, marginTop: 20}}>  
              
              <TextField id="username" label="Email" variant="outlined" fullWidth={true}
              onChange={e=>setEmail(e.target.value)} />
              <br></br>
              <br></br>
              <TextField id="pw" label="Password" variant="outlined" fullWidth={true} type="password"
              onChange={e=>setPassword(e.target.value)}/>
              
              <br></br> 
              <br></br>
              <Button 
                  
                  variant="contained"
                  onClick = {() => {
                    
                    

                    function callback2(data){
                      console.log(data);
                    }
                    function callback1(res){
                      res.json().then(callback2);
                    }
                    
                    fetch("http://localhost:3000/admin/login", {
                      method: "POST",
                      body: JSON.stringify({
                         username: email, 
                         password: password
                      }),
                      mode: 'cors',
                      headers: {
                        "Content-type": "appilcation/json"
                      }}).then(callback1)
                       
                  }
                }>
                Signin </Button>
          </Card>

      </div>
            
    </div>
    )
  }

export default Signin;