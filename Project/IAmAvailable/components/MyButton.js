import {StyleSheet, Text, TouchableOpacity} from "react-native";

const MyButton = (props) => {
  const styles = StyleSheet.create({
    button:{
      backgroundColor: props.color,
      borderColor: '#000000',
      borderWidth: 2,
      borderRadius: 15,
      alignItems:'center',
      justifyContent:'center',
    },
    buttonText:{
      fontSize: 18,
      fontFamily: 'Arima',
    }
  });
  return (
    <TouchableOpacity
      style={[props.style,styles.button]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
export default MyButton;