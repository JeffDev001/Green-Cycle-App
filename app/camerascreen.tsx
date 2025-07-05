import { AntDesign, Feather } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CameraMode, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [mode, setMode] = useState<CameraMode>("picture");
  const [recording, setRecording] = useState(false);
  const [takingPhoto, setTakingPhoto] = useState(false);
  const router = useRouter();

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const toggleMode = () => {
    setMode(prev => (prev === "picture" ? "video" : "picture"));
  };

  const handleCancelPress = () => {
    router.replace('/reportdump');
  };

  const takePicture = async () => {
    if (ref.current && !takingPhoto) {
      setTakingPhoto(true);
      const photo = await ref.current.takePictureAsync();
      setUri(photo.uri);
      setTakingPhoto(false);

      // You can choose to navigate immediately if needed
      router.replace({
        pathname: '/reportdump',
        params: { photoUri: photo.uri },
      });
    }
  };

  const recordVideo = async () => {
    if (recording) {
      setRecording(false);
      ref.current?.stopRecording();
      return;
    }
    setRecording(true);
    const video = await ref.current?.recordAsync();
    console.log({ video });
    setRecording(false);
  };

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }


  const pickImageFromGallery = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need gallery permissions to make this work!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setUri(selectedAsset.uri);

      router.replace({
        pathname: '/reportdump',
        params: { photoUri: selectedAsset.uri },
      });
    }
  };


  return (
    <View style={styles.container}>
      {!uri ? (
        <View style={styles.container}>
          <CameraView
            style={styles.camera}
            facing={facing}
            mode={mode}
            mute={false}
            ref={ref}
            enableTorch={false}
            responsiveOrientationWhenOrientationLocked
          />

          <View style={{ position: 'absolute', top: 80, left: 20 }}>
            <TouchableOpacity onPress={handleCancelPress}>
              <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.galleryButton}>
            <TouchableOpacity  onPress={pickImageFromGallery}>
              <Feather name="image" size={30} color="#fff"/>
            </TouchableOpacity>
          </View>

          <View style={styles.shutterContainer}>
            <Pressable onPress={toggleMode}>
              {mode === "picture" ? (
                <AntDesign name="picture" size={45} color="white" />
              ) : (
                <Feather name="video" size={45} color="white" />
              )}
            </Pressable>
          </View>

          <Pressable
            onPress={mode === "picture" ? takePicture : recordVideo}
            disabled={takingPhoto}
          >
            {({ pressed }) => (
              <View
                style={[
                  styles.shutterBtn,
                  { opacity: pressed || takingPhoto ? 0.5 : 1 },
                ]}
              >
                <View
                  style={[
                    styles.shutterBtnInner,
                    { backgroundColor: mode === "picture" ? "white" : "red" },
                  ]}
                />
              </View>
            )}
          </Pressable>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <FontAwesome6 name="camera-rotate" size={45} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Photo Taken</Text>
          <Image source={{ uri }} style={{ flex: 1 }} />
          <Button title="Retake" onPress={handleCancelPress} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: '100%'
  },
  shutterContainer: {
    position: "absolute",
    bottom: 74,
    left: 300,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  shutterBtn: {
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "white",
    width: 75,
    height: 75,
    borderRadius: 45,
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: "center",
    position: 'absolute',
    bottom: 60,
    marginLeft: 20,
  },
  shutterBtnInner: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginRight: 230,
    marginLeft: -20,
    width: 100,
    position: 'absolute',
    bottom: 70
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    marginRight: 20,
    marginLeft: 10
  },
  galleryButton: {
  position: 'absolute',
  top: 70,
  right: 20,
  backgroundColor: '#4CC075',
  padding: 10,
  borderRadius: 10,
},
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  },
});
