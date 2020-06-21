import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import readUser from './src/database/user';

const App = () => {
  // Test
  const [title, setTitle] = useState('');
  readUser.users().then((data) => {
    console.log(data[0].title);
    setTitle(data[0].title);
  });

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default App;
