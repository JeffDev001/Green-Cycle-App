import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import FloatingAddImageButton from '../../components/FloatingAddImageButton';
import Separator from '../../components/Separator';





export default function index() {
  const router = useRouter()

  const HandleCameraPress = () => {
    router.push('/camerascreen')
  }

 
  return (
    <View style={{ backgroundColor: '#f5f5f5' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Surface style={{ marginTop: 20, width: 90, height: 90, borderRadius: 45, alignItems: 'center', backgroundColor: 'gray', opacity: 0.5, shadowOpacity: 0, justifyContent: 'center', alignSelf: 'center' }}>
            <TouchableOpacity onPress={HandleCameraPress}>
              <View style={{ alignSelf: 'center', opacity: 1 }}  >
                <FontAwesome5 name="camera" size={60} color="black" />
              </View>
            </TouchableOpacity>
          </Surface>
          <Button style={style.button} mode='contained' onPress={HandleCameraPress}>REPORT ILLEGAL DUMPS</Button>

        </View>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 30 }}>Nearest Dumps</Text>
        <Text style={{ alignSelf: 'center', fontWeight: '300', opacity: 0.5 }}>Go, find and update these dumps</Text>
        <Surface style={{
          backgroundColor: '#4CC075', margin: 21, marginTop: 5, borderRadius: 10, height: 200, width: 370,
        }}>
          <Surface style={{
            height: 30, width: 130, backgroundColor: '#f5f5f5', marginLeft: '8%', marginRight: '70%', shadowOpacity: 0, borderRadius: 30, marginTop: 180
          }}>
            <Text>..</Text>
          </Surface>
          <Surface style={{
            height: 30, width: 130, backgroundColor: '#f5f5f5', marginLeft: '60%', marginRight: '30%', shadowOpacity: 0, borderRadius: 30, marginTop: -28,
          }}>
            <Text>.</Text>
          </Surface>
          <View>
          </View>
        </Surface>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 30 }}>Nearest Collection Points</Text>
        <Surface style={{
          backgroundColor: '#4CC075', margin: 21, marginTop: 5, borderRadius: 10, height: 200, width: 370, paddingBottom: 10
        }}>

          <View>
            <TouchableOpacity style={{ backgroundColor: '#fff', height: 70, width: 80, marginTop: 20, marginLeft: 10, marginRight: '7%', alignItems: 'center', borderRadius: 3, flexDirection: 'row', gap: 250, paddingLeft: 4 }}>
              <Ionicons name="trash" size={70} color="#4CC075" />
              <Ionicons name="arrow-forward" size={24} color="#fff" />
            </TouchableOpacity>

          </View>
          {/* <View style={{ marginTop: 5}}> */}
            <Separator />
          {/* </View> */}

          <View >
            <TouchableOpacity style={{ backgroundColor: '#fff', height: 75, width: 80, marginTop: 1, marginLeft: 10, marginRight: '7%', alignItems: 'center', borderRadius: 3, padding: 10, flexDirection: 'row', gap: 250 }}>
              <FontAwesome name="recycle" size={60} color="#4CC075" />
              <Ionicons name="arrow-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </Surface>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>TrashHunter</Text>
        <Surface style={{
          backgroundColor: '#4CC075', margin: 25, marginTop: 5, borderRadius: 10
        }}>
          <View>
            <Text style={{ fontSize: 16, marginLeft: 5, marginTop: 2, color: '#fff', fontWeight: 'heavy', alignSelf: 'center' }}>Turn on “Trash Hunter Mode” to receive </Text>
            <Text style={{ fontSize: 16, marginLeft: 5, marginTop: 2, color: '#fff', fontWeight: 'heavy', alignSelf: 'center' }}>notifications</Text>
            <Button mode='outlined' style={{ backgroundColor: '#ffffff', marginTop: 5, marginBottom: 10, marginHorizontal: 29 }}>START HUNTING</Button>
          </View>
        </Surface>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Statistics</Text>
        <Text style={{ alignSelf: 'center', fontWeight: '300', opacity: 0.5 }}>Number of Dumps Worldwide</Text>
        <Surface style={{
          backgroundColor: '#4CC075', margin: 25, marginTop: 5, borderRadius: 10,
        }}>
          <View>
            <View style={{ flexDirection: 'row', margin: 4 }}>
              <Entypo name="location" size={20} color="#fff" />
              <Text style={{ marginLeft: 5, marginTop: 2, color: '#fff', fontWeight: 'heavy' }}>Reported</Text>
            </View>
            <Separator />
            <View style={{ flexDirection: 'row', margin: 6, }}>
              <AntDesign name="checkcircle" size={18} color="#fff" />
              <Text style={{ marginLeft: 5, color: '#fff', fontWeight: 'heavy' }}>Cleaned</Text>
            </View>
          </View>
        </Surface>
        <Button mode='contained' style={{ backgroundColor: '#1D1D1D', marginHorizontal: 70, outlineColor: 'green' }}>MORE STATISTICS</Button>
        <Button mode='contained' style={{ backgroundColor: '#1D1D1D', marginTop: 15, marginHorizontal: 70 }}>CONTACT US</Button>
      </ScrollView>
      <FloatingAddImageButton />
    </View>

  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    alignItems: 'center',
    marginTop: 30,
    opacity: 1
  },
  button: {
    backgroundColor: '#4CC075',
    marginHorizontal: 60,
    fontWeight: 500,
    marginTop: 10,
  },
  info: {
    marginLeft: '90%',
  },
  surface: {
    backgroundColor: '#4CC075',
    margin: 25,
    borderRadius: 5,
  },
})

function setUri(uri: string) {
  throw new Error('Function not implemented.');
}

