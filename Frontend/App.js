import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  } from 'react-native';
import AppRouter from './src/router'

const App= ()=> {
  return (
    
       <AppRouter/>
      
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;