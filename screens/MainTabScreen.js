import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ProductDetails from '../components/ProductDetails'
import Order from '../components/Order';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Riders',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Marts',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Products',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
      
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        <DetailsStack.Screen name="Order" component={Order}  />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Riders" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        
</DetailsStack.Navigator>
);
const ExploreStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Products" component={ExploreScreen}  />
          <DetailsStack.Screen name="ProductDetails" component={ProductDetails}  />
          
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Marts" component={ProfileScreen}  />
  </DetailsStack.Navigator>

);
  