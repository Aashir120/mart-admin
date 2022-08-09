import { View, Text, TouchableOpacity, StyleSheet,FlatList,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useState,useEffect} from 'react';
import Rider from '../components/Rider';
import AddRider from '../components/AddRider';
import EditRider from '../components/EditRider';
import RiderDetails from '../components/RiderDetails';

const Stack = createStackNavigator();

const DetailsScreen = ({navigation}) => {


  const[rider,setRider] = useState();
  const[image,setImage] = useState(null);
  const[riders,setRiders] = useState([]);


  function handleNote(){
    let newRider = rider;
    let newRiders = [newRider, ...riders];
    setRiders(newRiders);
    setRider('');
    setImage('');
  }

  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Rider'>
            {props => <Rider {...props} riders={riders} setRiders={setRiders} rider={rider} setRider={setRider}
            />}
        </Stack.Screen>
        <Stack.Screen name='AddRider'>
            {props => <AddRider {...props} rider={rider} image={image} setImage={setImage} setRider={setRider} handleNote={handleNote} />}
        </Stack.Screen>
        <Stack.Screen name='EditRider'>
            {props => <EditRider {...props} riders={riders} setRiders={setRiders} rider={rider} setRider={setRider} />}
        </Stack.Screen>

        <Stack.Screen name='RiderDetails'>
            {props => <RiderDetails {...props} riders={riders} setRiders={setRiders} rider={rider} setRider={setRider} />}
        </Stack.Screen>
        
      </Stack.Navigator>
  )
  
};

export default DetailsScreen;