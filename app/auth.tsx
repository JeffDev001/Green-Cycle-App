import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AuthScreen() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState<'login' | 'signup'>("login")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)


  const Handlelogin = () => {
    router.replace('/(tabs)')
  }

  const HandleSwitchMode = () => {
    setSelectedTab('signup');
  }
  const HandleOtherMode = () => {
    setSelectedTab('login');
  }

  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topheader1}>
            {/* Tab Header */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedTab === 'login' && styles.activeTab,
                ]}
                onPress={() => setSelectedTab('login')}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === 'login' && styles.activeTabText,
                  ]}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedTab === 'signup' && styles.activeTab,
                ]}
                onPress={() => setSelectedTab('signup')}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === 'signup' && styles.activeTabText,
                  ]}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',}}>
            <Text style={styles.greencycle}>Green Cycle</Text>
            <Image
                 source={require('../assets/images/greenpng.png')} 
                 resizeMode='contain'
                 style={styles.logo}
                 />
            </View>
            
          </View>

          {selectedTab === 'login' ? (
            <View style={styles.emailview}>
              <Text style={{marginLeft: 20, fontSize: 24, color:'white', fontWeight: 'bold', marginBottom: 10, textAlign: 'center'}}>Welcome Back👋</Text>
              <Text style={styles.email}>Email</Text>
              <View style={styles.emailonly}>
                <TextInput
                  style={styles.input}
                  placeholder="example@gmail.com"
                  autoComplete="email"
                  autoCapitalize='none'
                  mode='outlined'
                  onChangeText={setEmail}
                />
              </View>
              <Text style={styles.email}>Password</Text>
              <View style={styles.eye}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  autoCapitalize='none'
                  value={password}
                  autoComplete="current-password"
                  secureTextEntry={!showPassword}
                  mode='outlined'
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 10 }}>
                  <Ionicons name={showPassword ? 'eye-sharp' : 'eye-off'} size={20} />
                </TouchableOpacity>
              </View>

              <Button onPress={Handlelogin} style={styles.button} mode='contained'>{selectedTab === 'login' ? "Log In" : null}</Button>
              <Button style={styles.switchbutton} mode='contained-tonal' onPress={HandleSwitchMode}>
                {selectedTab === 'login' ? "Don't have an account? Create Account" : "Already have an account? Log In"} </Button>
              <TouchableOpacity>
                <Text style={styles.fpassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

          ) : (
            <View style={styles.emailview1}>
              <Text style={styles.email}>Email</Text>
              <View style={styles.emailonly}>
                <TextInput
                  style={styles.input}
                  placeholder="example@gmail.com"
                  // autoComplete="email"
                  autoCapitalize='none'
                  mode='outlined'
                  onChangeText={setEmail}
                />
              </View>

              <Text style={styles.email}>Password</Text>
              <View style={styles.eye}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  autoCapitalize='none'
                  autoComplete="current-password"
                  secureTextEntry={!showPassword}
                  mode='outlined'
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 10 }}>
                  <Ionicons name={showPassword ? 'eye-sharp' : 'eye-off'} size={20}  />
                </TouchableOpacity>
              </View>

              <Button onPress={Handlelogin} style={styles.button} mode='contained'> {selectedTab === 'signup' ? "Create account" : "Log In"} </Button>
              <Button style={styles.switchbutton} mode='contained-tonal' onPress={HandleOtherMode} >
                {selectedTab === 'signup' ? "Already have an account? Log In" : "Don't have an account? Create Account"}
              </Button>

            </View>

          )}
          
          <View>
            <Text style={styles.text}>By signing up you agree to our Terms and Conditions & Privacy Policy, Read below</Text>
          </View>
          <TouchableOpacity style={styles.linkContainer} onPress={() => Linking.openURL('https://www.trashout.ngo/policy')}>
            <Entypo name="link" size={20} color="black" />
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkContainer1} onPress={() => Linking.openURL('https://www.trashout.ngo/policy')}>
            <Entypo name="link" size={20} color="black" />
            <Text style={styles.linkText1} >Terms and conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#5FD288',
    borderRadius: 8,
    padding: 3,
    marginTop: '15%',
    marginBottom: '-1%'
  },
logo: {
    width: 50,   
    height: 50,
    marginTop: 55,
  },
  topheader1: {
    height: 200,
    width: 425,
    padding: '12%',
    alignItems: 'center',
    marginBottom: '1%',
    marginTop: '-38%',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#fff',
    elevation: 2,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
  greencycle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '20%',
    color: '#4CC075'
  },
  content: {
    marginTop: 40,
    fontSize: 18,
  },
  input: {
    marginBottom: 10,
    justifyContent: 'center',
    flex: 1,
    paddingRight: 30,
  },
  email: {
    fontSize: 20,
    textDecorationStyle: "solid",
    fontWeight: "500",
    color: '#fff'
  },
  emailview: {
    padding: '10%',
    height: 380,
    width: 360,
    marginTop: '20%',
    alignSelf: 'center',
    margin: '5%',
    borderRadius: 20,
    backgroundColor: '#5FD288',
    justifyContent: 'center'
  },
  emailview1: {
    padding: '10%',
    height: 340,
    width: 360,
    marginTop: '20%',
    alignSelf: 'center',
    margin: '5%',
    borderRadius: 20,
    backgroundColor: '#5FD288',
    justifyContent: 'center'
  },
  switchbutton: {
    marginTop: 15,
    backgroundColor: '#5FD288',
    color: '#fff'


  },
  button: {
    marginTop: 10,
    backgroundColor: '#4CC075'
  },
  text: {
    marginTop: '45%',
    marginRight: '5%',
    marginLeft: '2%',
    fontWeight: '500'
  },
  policyview: {

  },
  policytext: {
    marginRight: '60%',
    color: 'green',
    fontWeight: '600',
    fontFamily: 'Roboto'
  },
  entypo: {
    marginTop: 5,
    marginRight: '90%'
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    marginRight: '60%',
    marginTop: '2%'
  },
  linkText: {
    fontSize: 15,
    color: 'green',
    fontWeight: '600',
  },
  linkContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    marginRight: '48%',
    marginTop: '2%'
  },
  linkText1: {
    fontSize: 15,
    color: 'green',
    fontWeight: '600',
  },
  emailonly: {
    marginBottom: 3,
    flexDirection: 'row'
  },
  eye: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  fpassword: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 18


  }
});
