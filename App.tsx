import React from 'react';
import {Text, View, ListView, Alert, FlatList} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const App = () => {
  const db = SQLite.openDatabase(
    {
      name: 'mydb.db',
      createFromLocation: '~/mydb.db',
      location: 'default',
    },
    successToOpenDb,
    failToOpenDb,
  );

  function successToOpenDb() {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM note', [], (tx, results) => {
        let dataLength = results.rows.length;
        Alert.alert(String(dataLength));
      });
    });
  }

  function failToOpenDb(err: any) {
    console.log(err.code, err.message);
  }

  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default App;
