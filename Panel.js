import React from 'react';

import {

    View,
  
    Text,
    StyleSheet

} from 'react-360';







export default class Panel extends React.Component {

  componentDidMount(){



    
  }





    render() {
        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        Welcome to React 360
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
        backgroundColor: 'green',
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