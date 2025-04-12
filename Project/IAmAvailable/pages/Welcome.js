import {LinearGradient} from "expo-linear-gradient";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import MyButton from "../components/MyButton";


const Welcome =()=>{
  return (
    <>
      <LinearGradient
        colors={['#3D22C6', '#3b5998', '#6651D0', '#7769BF']}
        locations={[0,0.1,0.54,0.8]}
        style={styles.container}
      >
        <View style={styles.titleView}>
          <Text style={styles.font}>IamAvailable</Text>
        </View>
        <View style={styles.welcomeView}>
          <Text style={[styles.welcomeText, styles.bottomMargin]}>WELCOME</Text>
          <Image source={require('./../assets/images/calender.jpeg')}
                 style={[styles.calenderImage, styles.bottomMargin]}/>
          <Text style={styles.quoteText}>"Easily share your availability!"</Text>
        </View>
        <View style={styles.buttonView}>
          <Text style={[styles.clickText, styles.bottomMargin]}>Click to get Started...</Text>
          <MyButton title="Login" size="large" color="#28B828" style={[styles.bottomMargin, styles.button]}/>
          <MyButton title="Register" size="large" color="#28B828" style={[styles.bottomMargin, styles.button]}/>
        </View>
      </LinearGradient>
      <StatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'start',
    justifyContent: 'center',
  },
  font: {
    fontFamily: 'Lobster',
    fontSize: 30,
    color: '#ffffff',

  },
  calenderImage: {
    height: 150,
    width: 150,
    borderRadius: 30,
  },
  titleView: {
    flex: 1,
  },
  welcomeView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  welcomeText: {
    color: '#C5DEEE',
    fontSize: 20,
  },

  quoteText: {
    color: '#FFFF00',
    fontSize: 18,
  },

  buttonView: {
    flex: 6,
    alignItems: 'center',
  },
  bottomMargin: {
    marginBottom: 10,
  },

  clickText: {
    fontFamily: 'Times New Roman',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    height: 60,
    width: '70%',
  },
});

export default Welcome;
