import {StyleSheet,View,Text,Image, TouchableOpacity} from "react-native";
import {useState} from 'react';

const MyImagePlaceholder =(props)=>{

  const [error, setError]=useState(false);

  let placeholderSize;
  if(props.size==='large'){placeholderSize=styles.largePlaceholder;}
  else if(props.size==='small'){placeholderSize=styles.smallPlaceholder;}

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          styles.imageContainer,
          placeholderSize,
        ]}
      >

        {error || !props.imageUri?(
          <View style={[styles.placeholder, placeholderSize]}/>
        ):(
          <Image
            source={{uri:props.imageUri}}
            style={[styles.image, placeholderSize]}
            onError={() => setError(true)}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};


const styles=StyleSheet.create({
  container : {
    alignItems:"center",
  },

  imageContainer:{
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"#CCCCED",
  },

  placeholder:{
    // borderRadius:60,
    backgroundColor:"#CCCCED",
    alignItems:'center',
    justifyContent:'center',
  },
  smallPlaceholder:{
    height:60,
    width:60,
    borderRadius:30,
  },

  largePlaceholder:{
    width:120,
    height:120,
    borderRadius:60,
  },

  image:{
    width:"100%",
    height:"100%",
  },
});


export default MyImagePlaceholder;

