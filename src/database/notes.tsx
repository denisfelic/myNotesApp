let SQLite = require('react-native-sqlite-storage');
let sqlite = SQLite.openDatabase({
  name: 'mydb.db',
  createFromLocation: '~/mydb.db',
  location: 'default',
});

const readNotes = () => {
  return new Promise((resolve, reject) => {
    sqlite.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM note',
        [],
        (tx, results) => {
          let dataLength = results.rows.length;
          let helperArrayDB = [];
          if (dataLength > 0) {
            for (let i = 0; i < dataLength; i++) {
              helperArrayDB.push(results.rows.item(i));
            }
          }
          resolve(helperArrayDB);
        },
        (error) => {
          resolve(error);
        },
      );
    });
  });
};

// Crate
const insertNewNote = (note: any) => {
  return new Promise((resolve, reject) => {
    if (!note) {
      return;
    }

    sqlite.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO note (title, content, date, user_id ) VALUES (?) (?) (?) (?)',
        ['note.title', 'note.content', 'note.date', 'user_id'],
        (tx, results) => {
          let dataLength = results.rows.length;
          let helperArrayDB = [];
          if (dataLength > 0) {
            for (let i = 0; i < dataLength; i++) {
              helperArrayDB.push(results.rows.item(i));
            }
          }
          resolve(helperArrayDB);
        },
        (error) => {
          resolve(error);
        },
      );
    });
  });
};

const notesDB = {
  getNotesList: readNotes,
  insertNewNote: insertNewNote,
};
export default notesDB;
