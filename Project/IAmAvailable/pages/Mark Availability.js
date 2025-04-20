import {FlatList, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import SecondaryHeader from "../components/SecondaryHeader";
import MyInput from "../components/MyInput";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {Entypo} from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    backgroundColor: '#8878c8',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Arima',
  },
  margin: {
    marginTop: 20,
  },
  textArea: {
    width: '90%',
    height: 100,
  },
  periodicOption: {
    width: '90%',
    padding: 12,
    backgroundColor: '#8777c7',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default function MarkAvailability(props) {
  let numberOfGroups = 0;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [date,setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [startClock, setStartClock] = useState(false);
  const [endClock, setEndClock] = useState(false);
  const [dateText, setDateText] = useState("Date");
  const [startText, setStartText] = useState("Time From");
  const [endText, setEndText] = useState("Time To");

  const periodicOptions = ["Once","Daily", "Weekly", "Monthly", "Yearly"];
  const[periodic, setPeriodic] = useState("Periodic");
  const [periodicFlag, setPeriodicFlag] = useState(false);

  const selectDate = (event, selectedDate) => {
    setCalendar(false);
    if (selectedDate) {
      setDate(selectedDate);
      setDateText(selectedDate.toDateString());
    }
  };

  const selectStartTime = (event, selectedTime) => {
    setStartClock(false);
    if (selectedTime) {
      setStartTime(selectedTime);
      setStartText(selectedTime.toLocaleTimeString());
    }
  }

  const selectEndTime = (event, selectedTime) => {
    setEndClock(false);
    if (selectedTime) {
      setEndTime(selectedTime);
      setEndText(selectedTime.toLocaleTimeString());
    }
  }

  const periodicButtons=(item)=>{
    setPeriodic(item);
    setPeriodicFlag(false);
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1, alignItems: "center"}}
      >
        <StatusBar
          style='auto'
          hidden={true}
        />
        <SecondaryHeader title="Mark Availability"/>

        <TouchableOpacity style={[styles.button, styles.margin, {width:'90%'}]}>
          <Text style={[styles.buttonText]}>
              Groups Selected
          </Text>
          <Text style={[styles.buttonText, {marginLeft: 'auto'}]}>
              {numberOfGroups}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.margin, {width:'90%'}]}
          onPress={()=>{setCalendar(true)}}
        >
          <Text style={[styles.buttonText]}>
            {dateText}
          </Text>
        </TouchableOpacity>
        {
          calendar && <DateTimePicker
            value={date}
            mode="date"
            display={'calendar'}
            onChange={selectDate}
            minimumDate={new Date()}
          />
        }
        <View style={[{width:'90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}, styles.margin]}>
          <TouchableOpacity
            style={[styles.button,{width:'40%'}]}
            onPress={()=>{setStartClock(true)}}
          >
            <Text style={[styles.buttonText]}>
              {startText}
            </Text>
          </TouchableOpacity>
          {
            startClock && <DateTimePicker
              value={startTime}
              mode="time"
              display={'default'}
              onChange={selectStartTime}
              minimumDate={new Date()}
            />
          }

          <TouchableOpacity
            style={[styles.button,{width:'40%'}]}
            onPress={()=>{setEndClock(true)}}
          >
            <Text style={[styles.buttonText]}>
              {endText}
            </Text>
          </TouchableOpacity>
          {
            endClock && <DateTimePicker
              value={endTime}
              mode="time"
              display={'default'}
              onChange={selectEndTime}
              minimumDate={new Date()}
            />
          }
        </View>



        <TouchableOpacity style={[styles.button, styles.margin,{width:'90%'}]}
                          onPress={()=>{setPeriodicFlag(!periodicFlag)}}
        >
          <Text style={[styles.buttonText]}>{periodic}</Text>
          <Entypo style={{marginLeft: 'auto'}} name="triangle-down" size={24} color="white"/>
        </TouchableOpacity>

        {periodicFlag &&
          <View style={{width:'90%', justifyContent: 'center'}}>
            <FlatList data={periodicOptions}
                      keyExtractor={(item) => item}
                      renderItem={({item}) => (
                        <TouchableOpacity style={styles.periodicOption} onPress={()=>periodicButtons(item)}>
                          <Text> {item}</Text>
                        </TouchableOpacity>
                      )}
            />
          </View>
          }


        <MyInput style={[styles.textArea, styles.margin]} placeholder='Location Description' multiline={true}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
          <Text style={[styles.margin, {fontFamily: 'Arima', fontSize: 20, alignSelf: 'flex-start'}]}>On Map</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.margin}
          />
        </View>


      </ScrollView>

    </>

  );
}