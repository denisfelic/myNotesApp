// TODO : Criar um controller para controlar as regras de negócio de cada método do CRUD.
interface NoteInterface {
  note_id: number,
  title: string,
  content: string,
  last_UpDate: string,
  user_id: number
}

import { Alert } from 'react-native';

let SQLite = require('react-native-sqlite-storage');
let sqlite = SQLite.openDatabase({
  name: 'mydb.db',
  createFromLocation: '~/mydb.db',
  location: 'default',
});



// Create
const insertNewNote = (note: NoteInterface) => {
  return new Promise((resolve, reject) => {


    if (!note || note === null) {
      Alert.alert('Error', 'Nota vazia.');
      return;
    }

    sqlite.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO note (title, content, date, user_id ) VALUES (?, ?, ?, ?);`,
        [note.title, note.content, note.date, note.user_id],
        (tx, results) => {
          // Todo: Inserir algum log
          Alert.alert('Inserido');
        },
        (error) => {
          // Todo: Trabalhar no log de erro
          console.log('Error', error);
          resolve(error);
        },
      );
    });
  });
};

// Read 
const readNotes = () => {
  return new Promise((resolve, reject) => {
    sqlite.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM note',
        [],
        (tx: any, results: any) => {
          let dataLength: number = results.rows.length;
          let helperArrayDB = [];
          if (dataLength > 0) {
            for (let i = 0; i < dataLength; i++) {
              helperArrayDB.push(results.rows.item(i));
            }
          }
          resolve(helperArrayDB);
        },
        (error: any) => {
          resolve(error);
        },
      );
    });
  });
};

// Update
const updateNote = (note: NoteInterface) => {
  return new Promise((resolve, reject) => {


    if (!note || note === null) {
      Alert.alert('Error', 'Nota vazia.');
      return;
    }

    sqlite.transaction((tx) => {
      tx.executeSql(
        `UPDATE note SET title = (?), content = (?), date = (?) WHERE note_id = (?)`,
        [note.title, note.content, note.last_UpDate, note.note_id],
        (tx, results) => {
          // Todo: Inserir algum log
          Alert.alert('Inserido');
        },
        (error) => {
          // Todo: Trabalhar no log de erro
          console.log('Error', error);
          resolve(error);
        },
      );
    });
  });
};


// Delete 
const deleteNote = (note_id : number) => {
  return new Promise((resolve, reject) => {
    sqlite.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM note WHERE note_id = (?)',
        [note_id],
        (tx: any, results: any) => {
          Alert.alert('Deletado');
        },
        (error: any) => {
          console.log('Error', error);
          resolve(error);
        },
      );
    });
  });
};

const notesDB = {
  insertNewNote: insertNewNote,
  getNotesList: readNotes,
  updateNote: updateNote,
  deleteNote : deleteNote,
};
export default notesDB;
