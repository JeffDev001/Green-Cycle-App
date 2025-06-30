import { useRouter, } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';




export default function Splashscreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/auth'); 
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);
  
  return (
   <View style={styles.container}>
    
    <Image
     source={require('../assets/images/greenpng.png')} 
     resizeMode='contain'
     style={styles.logo}
     />
    <Text style={styles.text}>GREEN CYCLE</Text>
    </View>
  )
}




  
const styles = StyleSheet.create({
  container: {
     color: 'white',
     backgroundColor: '#1ED760',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     display: "flex",
     flexDirection:"row"
  },
  text: {
    fontWeight: 400,
    fontSize: 25,
    color: 'white',
    marginRight: '5%'
  },
  logo: {
    width: 100,   
    height: 100,
  },
});