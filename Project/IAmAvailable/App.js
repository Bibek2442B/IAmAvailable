import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyInput from "./components/MyInput";
import {useFonts} from "expo-font";
// import AppLoading from "expo-app-loading";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    'Arima': require('./assets/fonts/Arima-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Register/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
