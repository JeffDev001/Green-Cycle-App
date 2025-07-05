import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function thankscreen() {
  const router = useRouter();

  const HandleHomeButton = () => {
    router.replace('/(tabs)')
  }

  return (
    <SafeAreaView>
      <View>
        <Image style={style.star} source={require('../assets/images/star.png')} />
        <Text style={style.text}>Thank You for your report!</Text>
        <Text style={style.text}>You just gained 10 cycloids</Text>
        <View style={style.buttonview} >
          <Button style={style.button} mode='contained'>SHARE TO YOUR FRIENDS</Button>
          <Button style={style.button} mode='contained'>VIEW YOUR REPORT</Button>
        </View>
        <View>
          <Text style={style.text1}>Do not forget to Trash Hunt and help clear more dumps!😉</Text>
        </View>
        <Button mode='contained-tonal' style={{ marginHorizontal: 150, marginTop: 10, borderLeftWidth: 4, borderColor: '#4CC075', backgroundColor: '#fff' }} onPress={HandleHomeButton}>GO HOME</Button>
        <View style={style.tree}>
          <Image source={require('../assets/images/cartoontree.png')} />
        </View>
      </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  tree: {
    // paddingLeft: 150,
    // marginHorizontal: 100,
    marginTop: 80,
    alignSelf: 'center',
    width: 1000,
    height: 1500,
    opacity: 0.8
  },
  star: {
    marginTop: 10,
    alignSelf: 'center',
    width: 90,
    height: 90,
    opacity: 0.8
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600'
  },
  text1: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: '600',
    marginHorizontal: 50,
    marginTop: 50,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#4CC075',
    marginHorizontal: 100,
    marginTop: 15,
  },
  buttonview: {
    marginTop: 50
  }
})