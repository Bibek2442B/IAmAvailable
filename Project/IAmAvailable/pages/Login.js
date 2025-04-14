import {StyleSheet, Text, View} from "react-native";
import MyVector from "../assets/MyVector";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",

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

});

const Login=(props)=>{

    return (
        <>
            <MyVector/>
            <View style={styles.container}>
                <Text style={styles.titleText}>Login</Text>
                <MyInput placeholder="Username" style={styles.textAreaMargin} />
                <MyInput placeholder="Password" style={styles.textAreaMargin} />
                <MyButton  color="#28B828" title= "Login" style={{height: 50, width: '40%', marginTop: 10, alignSelf: 'end'}} />
                <Text>Don't have an account? Register</Text>
            </View>
        </>
    );
}

export default Login;