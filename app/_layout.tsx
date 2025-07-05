import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";


function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const isAuth = false;

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady && !isAuth) {
      router.push("/splash")
    }

  }, [isReady]
  );

  return <>{children}</>;
}

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00C853',   // Your custom primary color (green in this case)
    accent: '#FFD600',    // Optional accent color
    background: '#fff',
    text: '#000000',
  },
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider  theme={customTheme}>
        <SafeAreaProvider>
          <RouteGuard>
            <Stack >
              <Stack.Screen name="splash" options={{ headerShown: false }}></Stack.Screen>
              <Stack.Screen name="auth" options={{ headerShown: false }}></Stack.Screen>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
              <Stack.Screen name="camerascreen" options={{headerShown: false}}></Stack.Screen>
              <Stack.Screen name="reportdump" options={{ headerTitle: 'Report Dump', headerShown: true, headerStyle: { backgroundColor: '#4CC075' }, headerShadowVisible: false, headerTintColor: 'white', headerBackButtonDisplayMode: 'minimal', headerRight: () => <TouchableOpacity><View style={style.edit}><Text style={style.text}>Submit</Text><Ionicons name="send" size={22} color="#fff" /></View></TouchableOpacity> }}></Stack.Screen>
              <Stack.Screen name="settings" options={{ headerTitle: 'Settings', headerShown: true, headerStyle: { backgroundColor: '#4CC075' }, headerShadowVisible: false, headerTintColor: 'white', headerBackButtonDisplayMode: 'minimal'}}></Stack.Screen>
               <Stack.Screen name="thankscreen" options={{ headerTitle: 'Thank You!', headerShown: true, headerStyle: { backgroundColor: '#4CC075' }, headerShadowVisible: false, headerTintColor: 'white', headerBackButtonDisplayMode: 'minimal'}} ></Stack.Screen>
               <Stack.Screen name="aboutus"  options={{ headerTitle: 'About Us', headerShown: true, headerStyle: { backgroundColor: '#4CC075' }, headerShadowVisible: false, headerTintColor: 'white', headerBackButtonDisplayMode: 'minimal'}} ></Stack.Screen>
            </Stack>
          </RouteGuard>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}


const style = StyleSheet.create({
  edit: {
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600'
  }
})
