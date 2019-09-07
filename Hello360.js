import React from 'react';

import {
    StyleSheet,
    Text,
    View,
  } from 'react-360';
  
  





export default class Hello360 extends React.Component {
    render() {
      return (
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Welcome 
            </Text>
          </View>
        </View>
  
     
    
    
      );
    }
  };
  
  const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 1040,
      height: 600,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    greetingBox: {
      padding: 20,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
    },
    greeting: {
      fontSize: 30,
    },
    
  });