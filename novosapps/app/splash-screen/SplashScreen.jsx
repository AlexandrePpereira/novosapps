import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#6A0D91', '#FFFFFF']} 
        style={styles.background}
      />
      <Image
        style={styles.logo}
        source={require('./img/dragao.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0, 
  },

  container: {
    flex: 1,   
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    width: 250, 
    height: 250,
  },
});
