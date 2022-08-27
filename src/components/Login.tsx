import { Grid, Button, Box, Container } from "@mui/material";
import { FC } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebaseSetup";

const Login: FC = () => {
  const onLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={onLogin} variant={"outlined"}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
