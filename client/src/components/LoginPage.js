import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function LoginPage() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateUsername = (username) => {
    return true;
  };

  const validatePassword = (password) => {
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the username and password
    if (!validateUsername(username) || !validatePassword(password)) {
      return;
    }

    // Send a request to the server to log in
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (result.success) {
        console.log("log in successfull");
      } else {
        // TODO: display an error message
      }
    } catch (error) {
      // TODO: display an error message
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username">
              Username
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              labelWidth={70}
            />
          </FormControl>
          <br />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              labelWidth={70}
            />
          </FormControl>
          <br />
          <Button variant="contained" color="primary" type="submit">
            Log in
          </Button>
        </form>

        <a href="/signup">Create account</a>
      </div>
    </div>
  );
}

export default LoginPage;