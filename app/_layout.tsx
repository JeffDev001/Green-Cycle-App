import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";

function RouteGuard ({ children } : {children: React.ReactNode}) {
    const router = useRouter();
    const [isReady, setIsReady] = useState(false);
    const isAuth = false;

  useEffect(() => {
    // Wait until first render before navigating
    setIsReady(true);
  }, []);  

  useEffect (() => {
    if (isReady && !isAuth) {
      router.replace("/auth")
    }
  }, [isReady]
);

return <>{children}</>;
}


export default function RootLayout() {
  return (
  <RouteGuard>
  <Stack initialRouteName= "auth">
    <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name="auth" options={{ headerShown: true }}></Stack.Screen>
  </Stack>
  </RouteGuard>  
  )
}
