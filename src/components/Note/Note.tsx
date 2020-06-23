// Single Note
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NoteInterface } from '../../models/NoteInterface';
import styles from './styles';
import dateFormatted from '../../helpers/dateFormatted';

const Note = ({ props }: any) => {
  const myNote: NoteInterface = props.note;
  let noteIndex = props.noteIndex;
  let formattedDate = dateFormatted.getCurrentDateFormatted(myNote);

  return (
    <View>
      <TouchableOpacity >
        <View style={noteIndex === 0 ? styles.note_container_borderWithTop : styles.note_container}>
          <Text style={styles.note_date}>{formattedDate}</Text>
          <Text numberOfLines={1} style={styles.note_title}>{myNote.title} </Text>
          <Text numberOfLines={3} style={styles.note_content} >{myNote.content}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Note;
