// Single Note
import React from 'react';
import {Text, View} from 'react-native';

const Note = ({note}: any) => {
  return (
    <View>
      <Text>Chegou {note.title}</Text>
      <Text>{note.content}</Text>
    </View>
  );
};
export default Note;
