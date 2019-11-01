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

    console.log("image",this.props.posts?this.props.posts.image:'')

    return (
      <View style={styles.panel}>
        
         <Image style={styles.image} source={{uri: this.props.posts?this.props.posts.preview.source:''}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1040,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: "center",
    alignItems: "center"
  },
  image:{
    width: '100%',
    height: '100%',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});


export  default connect(Panel);