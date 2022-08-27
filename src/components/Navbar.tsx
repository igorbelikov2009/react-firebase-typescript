import { AppBar, Grid, Toolbar, Button } from "@mui/material";
import React, { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { auth } from "../firebaseSetup";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/compat/app";

const Navbar: FC = () => {
  const user = useContext<firebase.User | null>(AuthContext);

  console.log(user); // страница готова, не переделывать
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant={"outlined"}>
              Выйти
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
