import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './src/pages/Home';
import { ViewNote } from './src/pages/ViewNote';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ViewNote" component={ViewNote} />
        <Drawer.Screen name="Trash" component={Trash} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



function Trash({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.openDrawer()} title="Hamburger" />
    </View>
  );
}
