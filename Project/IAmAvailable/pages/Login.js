import {ScrollView, StyleSheet, Text, View} from "react-native";
import MyVector from "../assets/MyVector";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";


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
        marginTop:'30%',
    },

});

const Login=(props)=>{

    return (
        <>
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1, alignItems: "center"}}>
                <MyVector/>
                <Text style={styles.titleText}>Login</Text>
                <MyInput placeholder="Username" style={styles.textAreaMargin} />
                <MyInput placeholder="Password" style={styles.textAreaMargin} />
                <MyButton  color="#28B828" title= "Login" style={{height: 50, width: '40%', marginTop: 10, marginLeft: '40%'}} />
                <Text>Don't have an account? Register</Text>
            </ScrollView>
        </>
    );
}

export default Login;