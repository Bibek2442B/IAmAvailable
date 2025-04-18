import {StyleSheet, Text, TextInput} from "react-native";
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";


const styles= StyleSheet.create({
  input:{
    justifyContent:'center',
    alignItems:'start',
    borderRadius:15,
    position: 'relative',
  },
  placeholder:{
    position: 'absolute',
    top: 13,
    left: 20,
    fontFamily: 'Arima',
    fontSize:18,
    color: '#ffffff',

  },
  cursor:{
    paddingLeft: 20,
    height: '100%',
    width: '100%',
    borderRadius:15,
    fontFamily: 'Arima',
    fontSize:16,
  }
});

const MyInput= (props) => {
  const [text, setText] = useState("");
  return (
    <LinearGradient
      style={[props.style,styles.input]}
      colors={['#5B37EA','#8878C8']}
      locations={[0,0.1]}
      start={{x:0,y:0}}
      end={{x:1,y:0}}
    >
      {text===''&&<Text style={styles.placeholder}>{props.placeholder}</Text>}
      <TextInput
        style={styles.cursor}
        onChangeText={(text) => setText(text)}
        value={text}
      />
    </LinearGradient>
  );
}

export default MyInput;