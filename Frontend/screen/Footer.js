import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        © 2023 X-CODE, Inc. All rights reserved.
      </Text>
      <View>
      <Image source={require('/Users/hasithalakmal/Desktop/Hasitha/assets/logo.png')} style={{height:20, width:20}}/> 
      </View>
      <Text style={styles.text}>
        | Version 1.0.0 |
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor:'#A9B8AF',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop:50,
    width: 420,
    height: 100,
    paddingBottom:50,
    paddingRight: 10,
    paddingLeft:10,
    paddingTop: 10
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});

export default Footer;
