import React from 'react';
import { View, Button } from 'react-native';
import { NotesList } from '../../components/NotesList';

const Home = ({ navigation }) => {

  return (
    <View>
      <Button onPress={() => navigation.openDrawer()} title="Hamburger" />
      <NotesList />
    </View>
  );
};
export default Home;
