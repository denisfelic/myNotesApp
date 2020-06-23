import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Note} from '../Note';
import { NoteController } from '../../controllers/NoteController';

const noteController = new NoteController();
let notesList: any =  noteController.readAllNotes();

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async () => {
      setNotes(await notesList);
    })();
  }, []);

  return (
    <FlatList
      data={notes}
      renderItem={({item}) => <Note note={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default NotesList;
