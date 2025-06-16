import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
          <SafeAreaView style = {styles.container}>
            <ScrollView>
            <Text style={styles.title}>Home</Text>
            
           
       
              <View style = {styles.view1}>
                 <View style={styles.view2}>
                
                 </View>
             </View>
      
            </ScrollView>  
          </SafeAreaView>
       </SafeAreaProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  view1: {
    height: '95%',
    width: '95%',
    backgroundColor: '#4CC075',
    borderRadius: '5%',
    alignSelf: 'center',
    marginTop: '70%',
  },
  view2: {
    backgroundColor: '#ffffff'
  },
  title : {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  
  }, 
  
   separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
  },
})
