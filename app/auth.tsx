import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

 



export default function AuthScreen () {
  const router = useRouter()
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");

  const theme = useTheme()

  const handlelogin = () => {
    router.replace('/(tabs)')
  }

  const handleAuth = async () => {
    if (!email || !password) {
        setError("Please input all fields");
      return;  
    }
    if (password.length < 6) {
        setError("Password is less than 6 characters")
      return;
    }

    setError(null); 
  }

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  }
    return ( 
         <KeyboardAvoidingView behavior ={Platform.OS === "ios" ? "padding" : "height"}>  
             <View  style = {styles.container}>
              <Text> LogIn</Text>
               <View style = {styles.topheader1}>
                <Text style= {styles.login}>{isSignUp ? "Create Account" : "Sign In"}</Text>
              </View>
  
            <SafeAreaView>
              
              
                <View style = {styles.emailview}>
                  <Text style ={styles.email}>Email</Text>
                   <TextInput 
                  style = {styles.input} 
                  placeholder="example@gmail.com"
                  autoComplete= "email"
                  autoCapitalize='none'
                  mode='outlined'
                  onChangeText={setEmail}
                  />

                  <Text style ={styles.email}>Password</Text>
                 <TextInput 
                  
                  style = {styles.input} 
                  placeholder="Enter Password"
                  autoCapitalize='none'
                  autoComplete="current-password"
                  mode='outlined'
                  onChangeText={setPassword}
                  />  
                 
 
                  {error && <Text style={{color: theme.colors.error}}>{error}</Text>}


                  <Button onPress={handlelogin} style={styles.button} mode='contained'>{isSignUp ? "Create account" : "Log In" }</Button>
                  <Button style={styles.switchbutton}mode='text' onPress={handleSwitchMode}>
                    {isSignUp ? "Already have an account? Log In" : "Don't have an account? Create an Account" }</Button>              
              </View>
              
              </SafeAreaView>
              </View>
        </KeyboardAvoidingView>       
                 
    )
}

const styles = StyleSheet.create ({
  container: {
   flex: 1,
   marginBottom: '190%',
   borderRadius: 20,
   backgroundColor: 'white',
  },
  email: {
    fontSize: 20,
    textDecorationStyle: "solid",
    fontWeight: "500"
  },
  login: {
    fontSize: 22,
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    marginTop: '22%',
    alignItems: 'baseline'
  },
  topheader1: {
    height: 130,
  //  padding: '12%',
  //  marginBottom: '1%',
   borderRadius: 20,
   backgroundColor: '#4CC075',
  },
  input: {
    marginBottom: 10 
  }, 
  button: {
    marginTop: 10
  }, 
  switchbutton: {
    marginTop: 10
  }, 
   emailview: {
   padding: '10%',
   height: 320,
   marginTop: '20%',
   margin: '5%',
   borderRadius: 15,
   backgroundColor: '#dddddd',
   justifyContent: 'center'
  },
})

