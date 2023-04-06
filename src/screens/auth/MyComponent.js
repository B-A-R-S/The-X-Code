import React from 'react';
import { View, StyleSheet } from 'react-native';
import PdfViewer from './PdfViewer';

const MyComponent = () => {
  const pdftUrl = 'https://www.sciencedirect.com/science/article/pii/S1467089520300348/pdfft?md5=681a31d2c829ff3fb7761a6d9416aebd&pid=1-s2.0-S1467089520300348-main.pdf';

  return (
    <View style={styles.container}>
      <PdfViewer url={pdftUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;
