import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from "react-native-paper";
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


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <SafeAreaProvider>
          <RouteGuard>
            <Stack >
              <Stack.Screen name="splash" options={{ headerShown: false }}></Stack.Screen>
              <Stack.Screen name="auth" options={{ headerShown: false }}></Stack.Screen>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
              <Stack.Screen name="camerascreen" options={{ headerTitle: 'Report Dump', headerShown: true, headerStyle: { backgroundColor: '#4CC075' }, headerShadowVisible: false, headerTintColor: 'white', headerBackTitle: 'Cancel', headerRight: () => <TouchableOpacity><View style={style.edit}><Text style={style.text}>Submit</Text><Ionicons name="send" size={22} color="#fff" /></View></TouchableOpacity> }}></Stack.Screen>
              <Stack.Screen name="settingsscreen" options={{ headerTitle: 'Settings', headerShown: true, headerStyle: { backgroundColor: '#4CC075' }, headerShadowVisible: false, headerTintColor: 'white', headerBackTitle: 'Go back'}}></Stack.Screen>
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
