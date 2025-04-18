import {ScrollView, StyleSheet, Text} from "react-native";
import MyVector from "../assets/MyVector";
import MyImagePlaceholder from "../components/MyImagePlaceholder";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const Register = () => {
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
  return (
      <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1, alignItems: "center"}}>
        <MyVector/>
        <Text style={styles.titleText}>Register</Text>
        <MyImagePlaceholder size="large"/>
        <Text style={styles.imageText}>Add Image</Text>
        <MyInput placeholder="Full Name" style={styles.textAreaMargin}/>
        <MyInput placeholder="Username" style={styles.textAreaMargin}/>
        <MyInput placeholder="User Hashtag" style={styles.textAreaMargin}/>
        <MyInput placeholder="Password" style={styles.textAreaMargin}/>
        <MyInput placeholder="Repeat Password" style={styles.textAreaMargin}/>
        <MyButton color="#28B828" title="Register"
                  style={{height: 50, width: '40%', marginTop: 10, marginLeft: '40%'}}/>
        <Text>Already have an account? Login</Text>
      </ScrollView>
  );
}

export default Register;

