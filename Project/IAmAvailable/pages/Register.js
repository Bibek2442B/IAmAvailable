import {StyleSheet, Text, View} from "react-native";
import MyVector from "../assets/MyVector";
import MyImagePlaceholder from "../components/MyImagePlaceholder";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");
const scaleSize=(size)=> (width/375)*size;


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textAreaMargin:{
    height: scaleSize(50),
    width: '80%',
    marginTop: scaleSize(10),
  },
  titleText:{
    fontFamily:"Lobster",
    fontSize: scaleSize(30),
    marginBottom: scaleSize(10),
  },
  imageText:{
    fontFamily:"Arima",
    fontSize:  scaleSize(20),
    marginTop:  scaleSize(10),
    color: "#0000FF",
    marginBottom: scaleSize(20),
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
        <MyButton  color="#28B828" title= "Register" style={{height: 50, width: '40%', marginTop: 10, marginLeft: '40%'}} />
        <Text>Already have an account? Login</Text>
      </View>


    </>
  );
}

export default Register;

