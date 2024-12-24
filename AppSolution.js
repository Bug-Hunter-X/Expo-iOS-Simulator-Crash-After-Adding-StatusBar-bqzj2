import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS !== 'ios' && <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />}
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});