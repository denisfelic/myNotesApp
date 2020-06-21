let SQLite = require('react-native-sqlite-storage');
let sqlite = SQLite.openDatabase({
  name: 'mydb.db',
  createFromLocation: '~/mydb.db',
  location: 'default',
});

// result: boolean
const createHero = () => {
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

const readUser = {
  users: createHero,
};
export default readUser;
