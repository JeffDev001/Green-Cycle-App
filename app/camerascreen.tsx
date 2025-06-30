// Example usage in a React Native component
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function camerascreen  () {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    const checkAndRequestPermission = async () => {
      const granted = await requestCameraPermission();
      setHasCameraPermission(granted);
    };
    checkAndRequestPermission();
  }, []);

  if (hasCameraPermission === null) {
    return <Text>Requesting Camera Permission...</Text>;
  } else if (hasCameraPermission === false) {
    return <Text>Camera permission denied. Please enable it in settings.</Text>;
  } else {
    return (
      <View>
        <Text>Camera is ready!</Text>
        <Button>go</Button>
      </View>
    );
  }
};