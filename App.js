import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const playButton = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;

      default:
        setUri(DiceSix);
        break;
    }
  };
  return (
    <>
      <View style={styles.container}>
      <TouchableOpacity onPress={playButton}>
        <Image style={styles.image} source={uri} />
        
          {/* <Text style={styles.text}>Play</Text> */}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  text: {
    color: '#F2A365',
    marginTop: 20,
    fontFamily: 'arial',
    fontSize: 20,
    borderColor: '#30475E',
    borderRadius: 10,
    borderWidth: 5,
    paddingHorizontal: 35,
    paddingVertical: 6,
    paddingTop: 15,
    fontWeight: 'bold',
  },
});

export default App;
