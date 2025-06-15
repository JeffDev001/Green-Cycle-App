import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs screenOptions={{tabBarActiveTintColor: '#119741'}}>
    <Tabs.Screen
     name="index" 
     options={{
      title: "Home", tabBarIcon:({color, focused}) => {
      return focused ? (
      <Ionicons name="home" size={24} color={color} />
     ) : (
     <Ionicons name="home-outline" size={24} color={color} />
     )  
    }
  }} 
 />

    <Tabs.Screen
     name="dumps"
     options={{title: "Dumps", tabBarIcon: ({color}) => 
     (<FontAwesome5 name="globe-africa" size={24} color={color}/>)}} />

    <Tabs.Screen
     name="recycling"
     options={{title: "Recycling", tabBarIcon: ({color}) => 
     (<FontAwesome5 name="recycle" size={24} color={color} />)}} />

    <Tabs.Screen
     name="profile"
     options={{title: "Profile", tabBarIcon: ({color}) => 
     (<FontAwesome6 name="chalkboard-user" size={24} color={color} />)}} />
  </Tabs>
  );
}
