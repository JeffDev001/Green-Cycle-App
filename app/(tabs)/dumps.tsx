import StaticFloatingButton from '@/components/FloatingAddImageButton';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import ListViewComponent from '../../components/listviewcomponent';
import MapViewComponent from '../../components/mapviewcomponent';
import SwitchHeader from '../../components/switchheader';

const { width } = Dimensions.get('window');

export default function DumpsScreen() {
  const [selectedTab, setSelectedTab] = useState<'map' | 'list'>('map');
  const translateX = useRef(new Animated.Value(0)).current;

  const handleSwitch = (tab: 'map' | 'list') => {
    setSelectedTab(tab);
    Animated.timing(translateX, {
      toValue: tab === 'map' ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <SwitchHeader selectedTab={selectedTab} onSelectTab={handleSwitch} />

      <View style={{ flex: 1, overflow: 'hidden' }}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{ translateX }],
            },
          ]}
        >
          <View style={{ width }}>
            <StaticFloatingButton />
            <MapViewComponent />
          </View>
          <View style={{ width }}>
            <ListViewComponent />
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animatedView: {
    flexDirection: 'row',
    width: width * 2,
    flex: 1,
  },
});
