import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs, useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabsLayout() {
  const router = useRouter()

  const HandleLogoutButtonPress = () => {
   
  }

 const HandleLogout = () => {
   Alert.alert('Logout', 
    'Are you sure you want to logout?',
  [{
   text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'Yes',
      onPress: () =>  router.push('/auth'),
      style: 'default'
    },
  ],
  { cancelable: false }
 )
}


  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: '#4CC075' }, headerShadowVisible: false, headerTintColor: 'white',
       headerTitleStyle: {
            fontSize: 18,
            color: '#fff'
          }, 
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },

      tabBarActiveTintColor: '#4CC075'

    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true, headerRight: () => <Octicons name="info" size={20} color="white" />,
          title: "Home", tabBarIcon: ({ color, focused }) => {
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
        options={{
          headerShown: false, title: "Dumps", tabBarIcon: ({ color }) =>
            (<FontAwesome5 name="globe-africa" size={24} color={color} />)
        }} />

      <Tabs.Screen
        name="recycling"
        options={{
          headerShown: true, title: "Recycling", tabBarIcon: ({ color }) =>
            (<FontAwesome5 name="recycle" size={24} color={color} />)
        }} />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true, 
          headerRight: () =>
           <TouchableOpacity>
           <View style={style.edit}>
            <FontAwesome6 name="edit" size={16} color="#fff" />
            <Text style={style.text}>
              Edit
            </Text>
          </View>
          </TouchableOpacity>,
          headerLeft: () => 
            <TouchableOpacity onPress={HandleLogout}>
             <View style={style.edit}>
              <SimpleLineIcons name="logout" size={16} color="#fff" />
              <Text style={style.text}>Logout</Text>
              </View> 
            </TouchableOpacity>
            ,
          title: "Profile", tabBarIcon: ({ color }) =>
            (<Feather name="user" size={30} color={color} />)
        }} />
    </Tabs>
  );
}

const style = StyleSheet.create({
  edit: {
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600'
  }
})
