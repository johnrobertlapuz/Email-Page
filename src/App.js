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
          background:'linear-gradient(0deg, #0ABAB5, #0ABAB5, #C5FFFD)',
          backgroundColor:'rgba(0.5, 0.5, 0.5, 0.5)',
          alignSelf:'stretch',
          width: 935,
          height:200, 
          padding:"340px",
          paddingTop:"300px",
          paddingBottom:"500px",
          margin: "auto",
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
                    
                {/* message to customers */}
                <Typography variant="h4" 
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
                <Grid xs={1} sm={12} item>
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
