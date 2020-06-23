import { Alert } from 'react-native';
import { NoteInterface } from '../models/NoteInterface';

let SQLite = require('react-native-sqlite-storage');
let sqlite = SQLite.openDatabase({
  name: 'mydb.db',
  createFromLocation: '~/mydb.db',
  location: 'default',
});

/**
  * createNewNote
  */
const createNewNote = (note: NoteInterface) => {
  return new Promise((resolve) => {
    sqlite.transaction((tx: any) => {
      tx.executeSql(
        `INSERT INTO note (title, content, date, user_id ) VALUES (?, ?, ?, ?);`,
        [note.title, note.content, note.last_UpDate, note.user_id],
        (tx: any, results: any) => {

          // Todo: Inserir algum log
          Alert.alert('Inserido');
        },
        (error: any) => {
          // Todo: Trabalhar no log de erro
          console.log('Error', error);
          resolve(error);
        },
      );
    });
  });
};

/**
  * readNotes
  */
const readNotes = () => {
  return new Promise((resolve) => {
    sqlite.transaction((tx: any) => {
      tx.executeSql(
        `SELECT * FROM note`,
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

/**
  * readOneNote
  */
const readOneNote = (note_id: number) => {
  return new Promise((resolve) => {
    sqlite.transaction((tx: any) => {
      tx.executeSql(
        `SELECT * FROM note WHERE note_id = (?)`,
        [note_id],
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

/**
  * updateNote
  */
const updateNote = (note: NoteInterface) => {
  return new Promise((resolve) => {
    sqlite.transaction((tx: any) => {
      tx.executeSql(
        `UPDATE note SET title = (?), content = (?), date = (?) WHERE note_id = (?)`,
        [note.title, note.content, note.last_UpDate, note.note_id],
        (tx: any, results: any) => {
          // Todo: Inserir algum log
          Alert.alert('Inserido');
        },
        (error: any) => {
          // Todo: Trabalhar no log de erro
          console.log('Error', error);
          resolve(error);
        },
      );
    });
  });
};


/**
  * deleteNote
  */
const deleteNote = (note_id: number) => {
  return new Promise((resolve) => {
    sqlite.transaction((tx: any) => {
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
  createNewNote: createNewNote,
  getNotesList: readNotes,
  getOneNote : readOneNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
export default notesDB;
