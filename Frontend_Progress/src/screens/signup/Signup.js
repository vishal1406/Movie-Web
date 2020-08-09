import React, { useState , Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import './Signup.css';

export default class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'',
      email:'',
      password:''
    }
  }
  changeHandler = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state)
    //const proxyurl ="https://cors-anywhere.herokuapp.com/";
    const url ="http://localhost:7070/api/users"
    const response =fetch(url, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(this.state)
     })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser"));
    
  }

render(){
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const paper = { marginTop: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"};
  
    const avatar = {
    margin: "16px",
    backgroundColor: "#dc004e"
  }
  const form = {
    width: "100%",
    marginTop: "24px"
  }
  const submit={
      margin: "24px 0px 16px"
  }
  const {name, email, password} = this.state
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={paper}>
        <Avatar style={avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form style={form} noValidate onSubmit={this.submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={name}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={this.changeHandler}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!validateForm()}
            style={submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="Signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
}

// Just Checking out myself
// import React, { Component } from 'react';
// export default class SignUp extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       name:'',
//       email:'',
//       password:''
//     }
//   }
//   changeHandler = (e) =>{
//     this.setState({[e.target.name]:e.target.value})
//   }
//   submitHandler = (e) =>{
//     e.preventDefault()
//     console.log(this.state)
//     //const proxyurl ="https://cors-anywhere.herokuapp.com/";
//     const url ="http://localhost:7070/api/users"
//     const response =fetch(url, {
//        method: 'POST',
//        headers: {
//         'Content-Type': 'application/json'
//       },
//        body: JSON.stringify(this.state)
//      })
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(() => console.log("Can’t access " + url + " response. Blocked by browser"));
    
//   }

//   render(){
//     const {name, email, password} = this.state
//     return(
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <input 
//             type="text"
//              name="name" 
//              value={name}
//              onChange={this.changeHandler}/>
//           </div>
//           <div>
//             <input 
//             type="text" 
//             name="email" 
//             value={email}
//             onChange={this.changeHandler}/>
//           </div>
//           <div>
//             <input 
//             type="text" 
//             name="password" 
//             value={password}
//             onChange={this.changeHandler}/>
//           </div>
//           <button type="submit">SignUp</button>
//         </form>
//       </div>
//     );
//   }
// }