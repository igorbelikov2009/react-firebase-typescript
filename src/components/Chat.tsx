import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../firebaseSetup";
import firebase from "firebase/compat/app";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";

const Chat = () => {
  const user = useContext<firebase.User | null>(AuthContext);
  const [value, setValue] = useState("");
  // console.log(user, value);

  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  ); // с помощью этого react-firebase-hooks firestore мы будем получать сообщения.
  // useCollectionData - Переменная, отвечает за то, что загрузились сообщения или нет. Параметром принимает запрос - firestore
  // orderBy('createdAt') -- сортировка по полю создания сообщения

  // interface ISendMessage {
  //   uid: string | null;
  //   displayName: string | null;
  //   photoURL: string | null;
  //   text: string | null;
  //   createdAt: firebase.firestore.FieldValue;
  // }

  const sendMessage: () => Promise<void> = async () => {
    console.log(value.trim().length); // если сообщение пустое, то метод не выполнится
    if (value.trim().length) {
      firestore.collection("messages").add({
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(), // получаем время через сервер firebase
      });

      setValue("");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        justifyContent={"center"}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {messages?.map((message, index) => (
            <div
              key={index}
              style={{
                margin: 10,
                border:
                  user?.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user?.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName} </div>
              </Grid>
              <div>{message.text} </div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            maxRows={2}
            variant={"outlined"}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
