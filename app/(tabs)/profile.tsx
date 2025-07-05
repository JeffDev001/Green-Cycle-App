import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Surface, Text } from 'react-native-paper';
import HandleLogout from '../(tabs)/_layout';



export default function profile() {
  const router= useRouter()

  const HandleSettingsPress = () => {
    router.push('/settings')
  }
  



  return (
    <ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 24, marginLeft: 20, fontWeight: '700', marginTop: 22}}>Report Today!</Text>
      <TouchableOpacity onPress={HandleSettingsPress} style={{ marginRight: 20, marginTop: 20, }}>
      <Ionicons name='settings-outline' size={24} color='black' />
      </TouchableOpacity>
       
      </View>
      <Avatar.Text style={{ backgroundColor: '#4dd07f', marginTop: 30, alignSelf: 'center' }} size={80} label="JD" color='#fff' />
      <TouchableOpacity style={style.editIcon}>
        <Feather name="edit" size={18} color="black" />
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', fontSize: 20, marginTop: 7, fontWeight: 'semibold'}}>John Doe</Text>
      <Surface style={{
        backgroundColor: '#4CC075', margin: 21, marginTop: 30, borderRadius: 10, height: 150, width: 370,
      }}>
        <Text>Your Reports</Text>
        </Surface>
      <Surface style={{
        backgroundColor: '#4CC075', margin: 21, marginTop: 30, borderRadius: 10, height: 250, width: 370,
      }}>
        <Text style={{ marginTop: 10, marginLeft: 15, color: '#fff', fontSize: 20, fontWeight: 'bold' }}>🥇Top Contributors</Text>
      <Surface style={{
        backgroundColor: '#fff', marginTop: 10, borderRadius: 10, height: 170, width: 360, shadowOpacity: 0, elevation: 0, alignSelf:'center'
      }}>
        <View style={style.leaderview}>
          <Text style={{backgroundColor: '#ffd700', width: 16, height: 16, borderRadius: 8, textAlign: 'center', fontSize: 14, color: '#fff'}}>1</Text>
          <Text style={{ fontSize: 16, color: '#000', fontWeight: '500' }}>James Doe</Text>
        </View>

        <View style={style.leaderview}>
          <Text style={{backgroundColor: '#c0c0c0', width: 16, height: 16, borderRadius: 8, textAlign: 'center', fontSize: 14, color: '#fff'} }>2</Text>
          <Text style={{ fontSize: 16, color: '#000', fontWeight: '500' }}>John Doe</Text>
        </View>

        <View style={style.leaderview}>
          <Text style={{backgroundColor: '#cd7f32', width: 16, height: 16, borderRadius: 8, textAlign: 'center', fontSize: 14, color: '#fff'}}>3</Text>
          <Text style={{ fontSize: 16, color: '#000', fontWeight: '500' }}>Jane Doe</Text>
        </View>

        </Surface>
        <TouchableOpacity  style={{flexDirection: 'row', gap: 5, alignSelf: 'center', marginTop: 10}}>
        <Ionicons name="arrow-forward-circle" size={20} color="white" />
        <Text style={{fontSize: 18, color: '#fff'}}>View More</Text> 
        </TouchableOpacity>
      </Surface >
      <Button style={style.logoutbutton} onPress={HandleLogout} mode='contained' >Logout</Button>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  editIcon: {
    alignItems: 'center',
    marginTop: -20,
    marginLeft: 40
  },
  leaderview: {
    margin: 15,
    marginLeft: 60,
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 8,
  },
  numberText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutbutton: {
    backgroundColor: '#4CC075',
    color: '#fff',
    marginHorizontal: '33%',
  }
}
)
