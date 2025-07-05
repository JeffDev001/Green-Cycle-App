import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
/*import camera from './camera.svg';// Import your camera SVG icon here
import { SvgUri } from 'react-native-svg'; // If you want to use SVG icons directly*/
// ----- Option Arrays -----



const accessibilityOptions = [
  { id: 'requires tools', label: 'Requires tools', icon: 'tools', },
  { id: 'dangerous area', label: 'Dangerous area', icon: 'exclamation-circle' },
  { id: 'accessible by car', label: 'Accessible by car', icon: 'car-alt' },
  { id: 'accessible by bike', label: 'Accessible by bike', icon: 'bicycle' },
  { id: 'accessible by foot', label: 'Accessible by foot', icon: 'walking' },
  { id: 'under water/on the waterside', label: 'Under water/On water', icon: 'water' },
  { id: 'not for general cleanup', label: 'Not for general cleanup', icon: 'user-alt' }
];


const trashTypeOptions = [
  { id: 'plastic', label: 'Plastic', icon: 'prescription-bottle-alt' },
  { id: 'organic', label: 'Organic', icon: 'leaf' },
  { id: 'paper', label: 'Paper', icon: 'newspaper' },
  { id: 'metal', label: 'Metal', icon: 'cogs' },
  { id: 'electronic', label: 'Electronic', icon: 'robot' },
  { id: 'liquid', label: 'Liquid', icon: 'hand-holding-water' },
  { id: 'dangerous', label: 'Dangerous', icon: 'exclamation-triangle' },
  { id: 'animal carcass', label: 'Animal Carcass', icon: 'paw' },
  { id: 'glass', label: 'Glass', icon: 'glass-martini-alt' },
  { id: 'recyclable', label: 'Recyclable', icon: 'recycle' },
  { id: 'construction', label: 'Construction Waste', icon: 'hard-hat' },
];


const trashSizeOptions = [
  { id: 'Small', label: 'Fits in a bag', icon: 'shopping-bag' },
  { id: 'medium', label: 'Fits in a wheelbarrow', icon: 'baby-carriage' },
  { id: 'large', label: 'Car needed', icon: 'car' },
];


export default function ReportForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const [selectedTrashType, setSelectedTrashType] = useState<string | null>(null);
  const [selectedTrashSize, setSelectedTrashSize] = useState<string | null>(null);

  const [selectedAccessibility, setSelectedAccessibility] = useState<Record<string, boolean>>({});

  const { photoUri } = useLocalSearchParams<{ photoUri: string }>();

  const router = useRouter();

  interface AccessibilityOption {
    id: string;
    label: string;
    icon: string;
  }

  interface TrashTypeOption {
    id: string;
    label: string;
    icon: string;
  }

  interface TrashSizeOption {
    id: string;
    label: string;
    icon: string;
  }

  const toggleAccessibility = (id: string) => {
    setSelectedAccessibility((prevState: Record<string, boolean>) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleTrashSize = (id: string) => {
    setSelectedTrashSize((prevState: string | null) => (prevState === id ? null : id));
  };

   const HandleCameraPress = () => {
    router.replace('/camerascreen')
  }



  const handleSubmit = () => {
    if (!selectedAccessibility || !selectedTrashType || !selectedTrashSize) {
      Alert.alert('Error', 'Please complete all required fields.');
      return;
    }

    // Create a report data object to log or later send to backend.
    const reportData = {
      name,
      location,
      trashType: selectedTrashType,
      trashSize: selectedTrashSize,
      notes,
      accessibility: selectedAccessibility,
    };

    console.log('Report Submitted:', reportData);
    Alert.alert('Thank You!', 'Your trash report has been submitted.', [{
      text: 'Ok',
      onPress: () => router.replace('/thankscreen'),
      style: 'default'
    },
    ],
      { cancelable: false });

    router.back

    setName('');
    setLocation('');
    setSelectedTrashType(null);
    setSelectedTrashSize(null);
    setNotes('');
    setSelectedAccessibility({});
  };


  function changecolor(color: string): void {
    console.log(`Anonymous report indicator color changed to: ${color}`);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true} keyboardShouldPersistTaps="handled">
        {/* Header with camera icon */}
        <View>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.image} />
          ) : (
            <Text style={{fontWeight: '400', textAlign: 'center', fontSize: 16}}>No photo or video available!</Text>
          )}
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Pressable
              onPress={HandleCameraPress}
              android_ripple={{ color: '#C25E8F', borderless: true}}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0, marginRight: 10, alignItems: 'center' },
              ]}
              accessibilityLabel="Open camera"
            >
              <MaterialIcons name="camera-alt" size={45} color="#4CC075" />
            </Pressable>
            <Text style={styles.headerText1}>
              Tap button to take photo
            </Text>
            <Text style={styles.headerText}>
              You must take at least one photo for the report to be valid.
            </Text>
          </View>
        </View>

        {/* Trash Type Options (as toggleable choices) */}
        <Text style={styles.subHeader}>Trash Type</Text>
        <View style={styles.optionsContainer}>
          {trashTypeOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedTrashType === option.id && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedTrashType(option.id)}
            >
              <FontAwesome5 name={option.icon} size={20} color="#000" style={styles.optionIcon} />
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Trash Size Options (as toggleable choices) */}
        <Text style={styles.subHeader}>Trash Size</Text>
        <View style={styles.optionsContainer}>
          {trashSizeOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedTrashSize === option.id && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedTrashSize(option.id)}
            >
              <FontAwesome5 name={option.icon} size={20} color="#000" style={styles.optionIcon} />
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Accessibility Options Section */}
        <Text style={styles.subHeader}>Accessibility Options</Text>
        <View style={styles.optionsContainer}>
          {accessibilityOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedAccessibility[option.id] && styles.optionButtonSelected,
              ]}
              onPress={() => toggleAccessibility(option.id)}
            >
              <FontAwesome5 name={option.icon} size={18} color="#000" style={styles.optionIcon} />
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Location Input Field */}
        <Text style={styles.subHeader1}>Location</Text>
        <View style={styles.Location}>
          <FontAwesome5 name="map-marker" size={15} color="#fff" style={styles.inputIcon} />

        </View>

        {/* Additional Notes Input Field */}
        <Text style={styles.subHeader1}>Additional Notes</Text>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <MaterialIcons name="sticky-note-2" size={24} color='#fff' style={styles.inputIcon} />

          </View>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Additional Notes (optional)"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Name Input Field */}
        <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Enter your name:</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="rename-box" size={24} color="white" />
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}

          />
        </View>


        <View style={styles.headerContainer}>
          <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 40 }}>
            <View style={styles.headerContainer1}>
              <MaterialCommunityIcons name="incognito" size={20} color="#e74c3c" />
              <Text style={{ fontSize: 14, textAlign: 'justify' }}>
                Anonymous
              </Text>
            </View>
            <Switch
              value={name === ''}
              onValueChange={(value) => {
                if (value) {
                  setName(''); // Clear name field for anonymous report
                  changecolor('#4c8435'); // Change color to indicate anonymous report
                } else {
                  setName(''); // Reset name field if not anonymous
                  changecolor('#e74c3c'); // Change color back to default
                }
              }}
              style={{ marginTop: -8, marginLeft: 10, marginBottom: 20 }}
            />
          </View>

          <View>
            <Text numberOfLines={2} style={{ textAlign: 'center', fontWeight: '600' }}>
              If you choose to submit anonymously, your name will not be displayed in the report.
            </Text>
          </View>
        </View>

        <View style={styles.info}>
          <MaterialCommunityIcons style={{ marginLeft: 10 }} name="information" size={24} color="#e74c3c" />
          <Text style={styles.headerText}>
            Please ensure all information is accurate before submitting your report.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Report</Text>
          <Ionicons name="send-sharp" size={18} color="#fff" style={styles.buttonIcon} />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  banner: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    borderRadius: 4,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  subHeader1: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 3,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  headerContainer: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    height: 130,
    borderLeftWidth: 4,
    borderLeftColor: '#4CC075',

  },
  headerContainer1: {
    flexDirection: 'row',
    gap: 4,
    marginRight: '65%'
  },
  headerText1: {
    width: '90%',
    fontSize: 15,
    fontWeight: '500',
    color: '#4cc075',
    marginLeft: 10,
    marginBottom: 4,
    textAlign: 'center',
    alignSelf: 'center'
  },
  headerText: {
    width: '90%',
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginLeft: 10,
    textAlign: 'center',

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 5,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#4CC075',
    shadowOpacity: 0,
    elevation: 0
  },
  Location: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 5,
    height: 200,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#4CC075',
    shadowOpacity: 0,
    elevation: 0
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    height: 20,
    flex: 1,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#fff'
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows the options to wrap onto new lines.
    justifyContent: 'space-between',
    backgroundColor: '#4CC075',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width: '48%',
  },
  optionButtonSelected: {
    backgroundColor: '#73c188', // Highlight for selected option.

  },
  optionIcon: {
    marginRight: 5,
  },
  optionText: {
    color: '#000',
    fontSize: 12,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#000',

    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 90,
    gap: 10
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  info: {
    flexDirection: 'row',
    gap: 1
  },
  image: { width: '100%', height: '40%', borderRadius: 10 },
});

