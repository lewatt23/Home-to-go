import React from 'react';
import {
  AppRegistry,

} from 'react-360';
import {Home,Panel,StreetView} from './components';
import * as Store from './Store';
//i do api call here
//fake store 
Store.initialize('5ae2e3f221c38a28845f05b6b543c49f0374392aafb9a26e404d0599','c57a2f1d0227eba3616d4c1beb271cad3e55918b9a9e47fc37df917dd6cd402f','');


AppRegistry.registerComponent('Panel', () => Panel);
AppRegistry.registerComponent('Home', () => Home);
AppRegistry.registerComponent('StreetView', () => StreetView);