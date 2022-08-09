import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';
const HomeScreen = ({ navigation }) => {

  

  const { colors } = useTheme();
  const[mart,setMart] = useState([
    { route:'Profile',place: 'Marts', desc: 'Click Here to see Marts detail', deviceCount: '4' },
    { route:'Explore',place: 'Products', desc: 'Click Here to see Products detail', deviceCount: '4' },
    { route:'Details',place: 'Riders', desc: 'Click Here to see Riders detail', deviceCount: '4' },
    { route:'Order',place: 'Orders', desc: 'Click Here to see Orders detail', deviceCount: '4' }
  ])

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View style={styles.sub_container}>
        <Image style={styles.tinyLogo} source={require('../assets/dp.png')} />
        <Text style={styles.title}>Hello Admin</Text>
        <Text style={styles.desc}>Welcome to Dashboard!</Text>
        <FlatGrid
          style={styles.flatGrid}
          itemDimension={130}
          data={mart}
          renderItem={({ item,index }) =>
          (<TouchableOpacity onPress={()=>navigation.navigate(`${item.route}`)} style={{height: 150,
    borderRadius: 12,
    elevation: 3,
    padding:20}}>
            <Text style={{fontWeight:'bold',
    fontSize:18,}} >{item.place}</Text>
            <Text style={styles.description}>{item.desc}</Text>
            <Text style={styles.deviceCount}>{item.deviceCount} Active</Text>
          </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddf0f0'
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  sub_container: {
    flex: 1,
    margin: 20,

  },
  title: {
    color: '#006994',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  desc: {
    color: '#006994',
    fontSize: 12,
  },
  flatGrid: {
    flex: 1,
 
  },
  flatrow: {
    
  },
  place:{
  },
  description:{
    fontSize:12,
    color:'gray',
    marginTop:5
  },
  deviceCount:{
    fontWeight:'bold',
    color:"blue",
    height:5,
    borderRadius:5,
    marginVertical:15,
    shadowColor:'black',
    shadowRadius:5,
    backgroundColor:'blue'
  }
});
