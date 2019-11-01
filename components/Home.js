import React from "react";

import {
  StyleSheet,
  Text,
  View,
  asset,
  VrButton,
  NativeModules,
  AppRegistry
} from "react-360";
import * as Store from '../Store';

import { registerKeyboard } from "react-360-keyboard";

AppRegistry.registerComponent(...registerKeyboard);

export default class Home extends React.Component {

 componentDidMount(){

  const {AudioModule} = NativeModules;

AudioModule.playEnvironmental({
  source: asset('There_Is_a_Beautiful_Place.mp3'),
  volume: 0.8, // play at 3/10 original volume
});


 }


  onClick() {
    NativeModules.Keyboard.startInput({
      placeholder: "Enter your location"
    }).then( input => {
      Store.initialize('5ae2e3f221c38a28845f05b6b543c49f0374392aafb9a26e404d0599',input);

     
    });
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton onClick={this.onClick}>
            <Text style={{color:'#000',padding:20,alignItems:'center'}}>Type location</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
  
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  HomeBox: {
    width:'100%',
    height:'100%'
  }
});
