import React from 'react';
import { View, Button } from 'react-native';
import { NotesList } from '../../components/NotesList';
import { NoteController } from '../../controllers/NoteController';
const noteController = new NoteController();

const Home = () => {


  return (
    <View>
      <NotesList />
    </View>
  );
};
export default Home;
