import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const AppHeader = ({ navigation }) => {
  const handleMenuPress = () => {
    navigation.toggleDrawer();
  };

  return (
    <Header
      containerStyle={styles.header}
      leftComponent={
        <TouchableOpacity onPress={handleMenuPress}>
          <Icon name="menu" color="#fff" style={{paddingLeft:20}}/>
        </TouchableOpacity>
      }
      //centerComponent={{ text: 'Photos', style: styles.title }}
      rightComponent={<Icon name="account-circle" color="#fff" style={{paddingRight:20}}/>}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#A9B8AF',
    width:420,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppHeader;
