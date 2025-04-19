import {ScrollView, StyleSheet, Text} from "react-native";
import MyVector from "../assets/MyVector";
import MyImagePlaceholder from "../components/MyImagePlaceholder";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import {useState} from "react";
import * as FileSystem from 'expo-file-system'


const Register = () => {

  //Stylesheet
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      position: 'relative',
    },
    textAreaMargin:{
      height: 50,
      width: '80%',
      marginTop: 10,
    },
    titleText:{
      fontFamily:"Lobster",
      fontSize: 30,
      marginBottom: 10,
      marginTop:50,
    },
    imageText:{
      fontFamily:"Arima",
      fontSize:  20,
      marginTop:  10,
      color: "#0000FF",
      marginBottom: 20,
    }

  });

  //TextInput states
 const [name,setName]=useState("");
 const [username,setUsername]=useState("");
 const [hashtag,setHashtag]=useState("");
 const [password,setPassword]=useState("");
 const [repeatPassword,setRepeatPassword]=useState("");

 //Register Button Function
 const RegisterUser = async() => {

  //Data checking
  if(!name || !username || !hashtag || !password || !repeatPassword){
    alert("Input fields are required");
    return;
  }
  if(password.trim()!==repeatPassword.trim()){
    alert("Passwords must match");
    return;
  }

   //File Path
   const filePath= FileSystem.documentDirectory + "users.json";

  //New User
  const newUser={name,username,hashtag,password};

  //Try Catch Block
  try{
    //Users objects
    let users={};

    //Reading File
    const file= await FileSystem.getInfoAsync(filePath);
    if(file.exists){
      const existingUsers = await FileSystem.readAsStringAsync(filePath);
      users=JSON.parse(existingUsers);
    }
    if(!users[username]){
      users[username]= newUser;
      await FileSystem.writeAsStringAsync(filePath,JSON.stringify(users,null, 2));
      alert("You are successfully registered!");
    }
    else{
      alert("You are already registered!");
    }

    setName("");
    setUsername("");
    setHashtag("");
    setPassword("");
    setRepeatPassword("");

  } catch(err){
    console.log("Error saving data: "+err);
    alert("Error saving data");
  }
 };
  return (
      <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1, alignItems: "center"}}>
        <MyVector/>
        <Text style={styles.titleText}>Register</Text>
        <MyImagePlaceholder size="large"/>
        <Text style={styles.imageText}>Add Image</Text>
        <MyInput placeholder="Full Name"
                 style={styles.textAreaMargin}
                  value={name}
                 onChangeText={setName}
        />
        <MyInput placeholder="Username"
                 style={styles.textAreaMargin}
                 value={username}
                 onChangeText={setUsername}
        />
        <MyInput placeholder="User Hashtag"
                 style={styles.textAreaMargin}
                 value={hashtag}
                 onChangeText={setHashtag}
        />
        <MyInput placeholder="Password"
                 style={styles.textAreaMargin}
                 value={password}
                 onChangeText={setPassword}
        />
        <MyInput placeholder="Repeat Password"
                 style={styles.textAreaMargin}
                 value={repeatPassword}
                 onChangeText={setRepeatPassword}
        />
        <MyButton color="#28B828" title="Register"
                  style={{height: 50, width: '40%', marginTop: 10, marginLeft: '40%'}}
                  onPress={RegisterUser}/>
        />
        <Text>Already have an account? Login</Text>
      </ScrollView>
  );
}

export default Register;

