import React from 'react';
import {View, Button} from 'react-native';
import {NotesList} from '../../components/NotesList';
import notes from '../../database/notes';

const Home = () => {
  function onPressLearnMore() {
    notes.deleteNote(1);
  }

  return (
    <View>
      <NotesList />
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
export default Home;
