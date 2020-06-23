import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Note } from '../Note';
import { NoteController } from '../../controllers/NoteController';
import { NoteInterface } from '../../models/NoteInterface';

const noteController = new NoteController();
let notesList: any = noteController.readAllNotes();

const NotesList = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);

  useEffect(() => {
    (async () => {
      setNotes(await notesList);
    })();
  }, []);

  let test = 'oi';
  return (
    <FlatList
      data={notes}
      renderItem={({ item, index }) =>{
        let params = {
          note : item,
          noteIndex : index,
        }
        return  <Note props={params} />
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default NotesList;
