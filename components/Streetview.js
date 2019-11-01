import React from "react";

import { View, Text, StyleSheet } from "react-360";
import {connect} from '../Store';



class StreetView extends React.Component {
  componentDidMount() {}

  

  render() {

    

    return (
      <View style={styles.panel}>
        <View>
          <Text style={styles.panelTitle}>
          {this.props.posts? this.props.posts.wikipedia_extracts.title:''}
          </Text>
       
          
        <Text style={styles.panelText}>
         
           {this.props.posts? this.props.posts.wikipedia_extracts.text:''}
          </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {

    width: 1080,
    height: 600,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
},
  panelViewTitle: {
   marginBottom:30,
  },
  panelTitle:{
    fontSize: 20,
 
    fontWeight:'bold',
    marginBottom:30,
  },
  panelText: {
    fontSize: 20,
    color: '#fff',
	
   
  }
});

export default connect(StreetView);