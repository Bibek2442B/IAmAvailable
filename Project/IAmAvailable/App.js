import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MarkAvailability from "./pages/Mark Availability";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    'Arima': require('./assets/fonts/Arima-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <>
        <Register/>

      </>

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
