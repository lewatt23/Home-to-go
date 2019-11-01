import React from "react";

import { View,Image , Text, StyleSheet } from "react-360";
import {connect, setCurrent} from '../Store';


 class Panel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image:''
    
    };
  }
 

  render() {

    

    return (
      <View style={styles.panel}>
        
         <Image style={styles.image} source={{uri: this.props.posts?this.props.posts.preview.source:''}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1200,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: "center",
    alignItems: "center",
    borderWidth:5,
    borderRadius:20,
    borderColor:'white'
  },
  image:{
    width: '100%',
    height: '100%',
  }
});


export  default connect(Panel);