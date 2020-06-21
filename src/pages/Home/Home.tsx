import React from 'react';
import {View} from 'react-native';
import {NotesList} from '../../components/NotesList';
import notes from '../../database/notes';

const Home = () => {
  return (
    <View>
      <NotesList />
    </View>
  );
};
export default Home;
