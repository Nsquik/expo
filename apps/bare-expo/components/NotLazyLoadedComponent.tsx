import React from 'react';
import { Text, View } from 'react-native';

export default function NotLazyLoadedComponent() {
  return (
    <View>
      <Text>Hello! I am NOT lazy loaded component</Text>
    </View>
  );
}
