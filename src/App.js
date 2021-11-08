import React from 'react';
import './App.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


function App() {

  return (
    <div className="App"> 

      {/* Styles */}
      <Grid>
        <Card style= 
        {{ 
          fontFamily: 'monserrat',
          display:'flex',
          background:'linear-gradient(to right, #0ABAB5, #43D6D1, #C5FFFD)',
          width: 1110,
          height: 325, 
          padding: "290px 225px", 
          margin: "auto",
          position:'center',
          left: '50%',
          right: '50%',
          borderRadius: '15px',
          justifyContent:'center'
        }}>

          <CardContent>
          
                {/* Headline text */}
                <Typography gutterBottom variant="h3" fontFamily="monserrat"
                align="center">
                Send us your concerns!
                </Typography>

                {/* Support text section */}
                <Typography gutterBottom variant="h5" 
                
                align="left">
                Support
                </Typography> 
                       
                {/* message to customers */}
                <Typography variant="h6" 
                classname="Message"
                color="textPrimary" 
                component="p" 
                align="justify" 
                gutterBottom>   
                If you have any concerns and problems, feel free to contact us and leave an email.
                We would be more than happy to respond to you. Thank you and have a nice day!
                </Typography> 
                

            <form>

                <Grid container spacing={1}>
                
                {/* Name section */}
                <Grid xs={12} sm={12} item>
                  <TextField 
                  placeholder="lastname, firstname, middlename" 
                  className="Name"
                  label="Complete Name" 
                  variant="outlined" 
                  fullWidth required 
                  />
                </Grid>

                {/* Email section */}
                <Grid item xs={12}>
                  <TextField 
                  type="email"
                  className="Email" 
                  placeholder="Enter email" 
                  label="Email" 
                  variant="outlined" 
                  fullWidth required 
                  />
                </Grid>
   
                {/* Message section */}
                <Grid item xs={12}>
                  <TextField  
                  label="Message" 
                  className="Message"
                  multiline rows={9} 
                  placeholder="Enter your message here" 
                  variant="outlined" 
                  fullWidth required 
                  />
                </Grid>


                {/* Submit Button section */}
                <Grid 
                className="ButtonGrid"
                container item xs={12} 
                justify="flex-end"
                >
                  <Button 
                  className="Button"
                  type="Submit" 
                  variant="contained"
                  color="primary"
                  >Send  
                  </Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
