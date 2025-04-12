import {StyleSheet, Text, View} from "react-native";
import MyVector from "../assets/MyVector";
import MyImagePlaceholder from "../components/MyImagePlaceholder";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,


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
  },
  imageText:{
    fontFamily:"Arima",
    fontSize: 20,
    marginTop: 10,
    color: "#0000FF",
    marginBottom: 20,
  }

});

const Register = () => {
  return (
    <>
      <MyVector/>
      <View style={styles.container}>

        <Text style={styles.titleText}>Register</Text>
        <MyImagePlaceholder size="large"/>
        <Text style={styles.imageText}>Add Image</Text>
        <MyInput placeholder="Full Name" style={styles.textAreaMargin} />
        <MyInput placeholder="Username" style={styles.textAreaMargin} />
        <MyInput placeholder="User Hashtag" style={styles.textAreaMargin} />
        <MyInput placeholder="Password" style={styles.textAreaMargin} />
        <MyInput placeholder="Repeat Password" style={styles.textAreaMargin} />
        <MyButton  color="#28B828" title= "Register" style={{height: 50, width: '40%', marginTop: 10, alignSelf: 'end'}} />
      </View>

    </>
  );
}

export default Register;

