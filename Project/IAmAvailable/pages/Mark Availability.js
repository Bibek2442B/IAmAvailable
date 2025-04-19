import {SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import SecondaryHeader from "../components/SecondaryHeader";
import MyInput from "../components/MyInput";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        backgroundColor: '#8878c8',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arima',
    },
    margin:{
        marginTop: 20,
    },
    fullInput:{
        width: '90%',
        height: 50,
    },
    textArea:{
        width: '90%',
        height: 100,
    },
    halfInput: {
        width: '40%',
        height: 50,
    }
});

export default function MarkAvailability(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1,  alignItems: "center"}}>
                <StatusBar style='auto' hidden={true}/>
                <SecondaryHeader title="Mark Availability"/>

                <TouchableOpacity style={[styles.button,styles.margin]}>
                    <Text style={[styles.buttonText]}>Groups Selected </Text>
                    <Text style={[styles.buttonText,{marginLeft: 'auto'}]}>2</Text>
                </TouchableOpacity>

                <MyInput  style={[styles.fullInput,styles.margin]} placeholder="Date(DD/MM/YYYY)"/>
                <MyInput  style={[styles.halfInput,styles.margin]} placeholder="Time From"/>
                <MyInput  style={[styles.halfInput,styles.margin]} placeholder="Until"/>
                <TouchableOpacity style={[styles.button,styles.margin]}>
                    <Text style={[styles.buttonText]}>Periodic</Text>
                    <Text style={[styles.buttonText,{marginLeft: 'auto'}]}>2</Text>
                </TouchableOpacity>
                <MyInput style={[styles.textArea,styles.margin]} placeholder='Location Description' multiline={true} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between',width:'90%' }}>
                    <Text style={[styles.margin,{fontFamily:'Arima', fontSize: 20, alignSelf: 'flex-start'}]}>On Map</Text>
                    <Switch
                        //trackColor={{false: '#767577', true: '#81b0ff'}}
                        
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={styles.margin}
                    />
                </View>



            </ScrollView>

        </>

    );
}