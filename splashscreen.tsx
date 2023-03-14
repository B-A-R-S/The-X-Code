import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('/Users/hasithalakmal/Desktop/reactnative/XCODE/src/images/logo.png')} style={styles.logo} />
      <Text style={styles.productName}>X - C O D E</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
