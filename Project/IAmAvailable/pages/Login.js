import {ScrollView, StyleSheet, Text, View} from "react-native";
import MyVector from "../assets/MyVector";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import {useState} from "react";
import Users from "./../database/users.json"

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    position: 'relative',
  },
  textAreaMargin: {
    height: 50,
    width: '80%',
    marginTop: 10,
  },
  titleText: {
    fontFamily: "Lobster",
    fontSize: 30,
    marginBottom: 10,
  },

});

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LoginButton = async () => {
    if (!username || !password) {
      alert("Input fields are required");
      return;
    }
    const thisUser = {username, password};
    if (Users[username].password === thisUser.password.trim()) {
      alert("Logged in!");
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid credentials");
    }

  }

  return (
    <>
      <ScrollView style={styles.container}
                  contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: "center"}}>
        <MyVector/>
        <Text style={styles.titleText}>Login</Text>
        <MyInput
          placeholder="Username"
          style={styles.textAreaMargin}
          value={username}
          onChangeText={setUsername}

        />
        <MyInput
          placeholder="Password"
          style={styles.textAreaMargin}
          value={password}
          onChangeText={setPassword}
        />
        <MyButton color="#28B828"
                  title="Login"
                  style={{height: 50, width: '40%', marginTop: 10, marginLeft: '40%'}}
                  onPress={LoginButton}
        />
        <Text>Don't have an account? Register</Text>
      </ScrollView>
    </>
  );
}

export default Login;