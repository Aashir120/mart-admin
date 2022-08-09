import { StyleSheet, Text, View ,Image,TouchableOpacity, Alert, Keyboard} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Style from '../assets/styles';
import { ApplicationProvider, Layout,Icon, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';

const Order = ({navigation, ...props}) => {

  const message_array= [];
  let BinNotes = [];
  const[order,setOrder] = useState([]);

  useEffect(() => {
  database().ref('Order').once('value') 
  .then((snapshot) => {

     snapshot.forEach((childSnapshot) => {
       message_array.push({
        
        ...childSnapshot.val()
       });
     });
     message_array.map(item=>{
      BinNotes.push(item)
      // console.log('item==',item);
     });
     
     //console.log('binNotes',BinNotes);

     setOrder(BinNotes)

  })},[])  


  // const[searchNote,setSearchNote] = useState();
  // function search(){
  //   if(searchNote === ''){
  //     Alert.alert('Type something in search box');

  //   } else if(searchNote!=''){
  //     order.forEach((item,index) => {
  //       if(item.Mart.includes(searchNote)){
  //         let searchItem = [...props.notes]
  //         let firstElOfArray = searchItem[0];
  //         let index = [...props.notes].indexOf(item)
  //         searchItem[0] = item
  //         searchItem[index] = firstElOfArray
  //         props.setNotes(searchItem)
  //       }
        
  //     });
      
  //   }
    
  //   setSearchNote('');
  //   Keyboard.dismiss();
  // }
  // props.notes.forEach((item)=>{
  //   console.log('item',item.Mart);
  // })


  return (
    <View style={styles.notesContainer}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading} >Orders...</Text>
      <View style={{flexDirection:'row'}} >
      </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}} >
        <Text style={{fontWeight:'700',fontSize:18,color:Style.color}} >
          Total: {order.length}
        </Text>
      </View>
      <View style={styles.divider} ></View>
      <View style={styles.searchContainer}>
        {/* <TextInput placeholder='Search...' placeholderTextColor={Style.color} style={[styles.input,{borderWidth:3}]}
        value={searchNote} onChangeText={(text)=>setSearchNote(text)}
        />
        <TouchableOpacity style={[styles.searchButton,{width:50}]} onPress={()=>search()}  >
        <ApplicationProvider {...eva} theme={eva.light}>
            <Icon name="search" fill="white" style={{width:22,height:40}} />
          </ApplicationProvider>
        </TouchableOpacity>
        */}
        
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
        {order.length === 0
        ?
        <View styles={styles.emptyNoteContainer} >
          <Text style={styles.emptyNoteText} >There is no any Open Orders !!!</Text>
        </View>
        :
        order.map((item,index)=>
        <TouchableOpacity key={index} onPress={()=>navigation.navigate('Products',item.Mart)}  >
          <View style={styles.item} key={index} >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={styles.note}>
              <Image source={{ uri: item.uri }} style={{width:50,height:50}} />
                <Text style={styles.index} >
                  {index + 1}. 
                  </Text>
                  <Text style={styles.text} >{item.Mart}</Text> 
                  </View>

          </View>
          <View style={styles.dateContainer} >
            <Text>{props.date}</Text>
          </View>
          </View>
          </TouchableOpacity>
        )
        
        }
      </ScrollView>
    </View>
  )
}

export default Order;


export const styles = StyleSheet.create({
  notesContainer:{
    paddingTop:10,
    paddingHorizontal:20,
    marginBottom:70,
    opacity:0.9
  },
  heading:{
    fontSize:30,
    fontWeight:'700',
    color:Style.color
  },

  divider:{
    width:"100%",
    height:2,
    backgroundColor:Style.color,
    marginTop:5,
    marginBottom:5,
  },
  item:{
    marginBottom:20,
    padding:15,
    color:'black',
    opacity:0.8,
    marginTop:10,
    shadowColor:Style.color,
    shadowOpacity:0.5,
    shadowOffset:{width:0,height:4},
    shadowRadius:8,
    elevation:5,
    backgroundColor:'white',
    borderTopColor:Style.color,
    borderWidth:2,
    borderRadius:5,
    borderLeftWidth:15,
  },
  index:{
    fontSize:20,
    fontWeight:'800'
  },
  headingContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },
  button:{
    backgroundColor:Style.color,
    width:50,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    height:50
  },
  buttonText:{
    color:'white',
    fontSize:32,
    fontWeight:'800'
  },
  scrollView:{
    marginBottom:70
  },
  note:{
    flexDirection:'row',
    width:'75%'
  },
  text:{
    fontWeight:'700',
    fontSize:17,
    alignSelf:'center'
  },
  delete:{
    color:Style.color,
    fontWeight:'700',
    fontSize:20
  },
  input:{
    height:40,
    paddingHorizontal:20,
    width:'60%',
    fontSize:19,
    color:'black',
    fontWeight:'600',
    opacity:0.8,
    shadowColor:Style.color,
    shadowOpacity:0.4,
    shadowOffset:{width:0,height:4},
    shadowRadius:8,
    elevation:5,
    backgroundColor:'white',
    borderColor:Style.color,
    borderWidth:2,
    borderRadius:5
  }
  ,
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:8
  },
  searchButton:{
    backgroundColor:Style.color,
    alignItems:'center',
    justifyContent:'center',
    width:60,
    borderRadius:5,
    height:40
  },
  searchButtonText:{
    color:'white',
    fontWeight:'700',
    fontSize:10
  },
  emptyNoteContainer:{
    alignItems:'center',
    marginTop:240
  },
  emptyNoteText:{
    color:Style.color,
    fontWeight:'600',
    fontSize:15
  },
  dateContainer:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  }
})