import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

// const LottieAnimation = ()=> {
    
    
//     return (
//         <View style={StyleSheet.container}>
//             <Lottie 
//                 source={require('../assests/Login.json')} autoPlay
//             />


//         </View>
//   );
// }

export default function LottieAnimations() {
    return (
      <View style={{ flex: 1 }}>
        <LottieView
          source={require('./assets/Login.json')}
          autoPlay
          loop
        />
      </View>
    );
  }

// export default LottieAnimation;