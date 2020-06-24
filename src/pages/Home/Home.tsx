import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { NotesListComponent } from '../../components/NotesListComponent';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';



const Home = ({ navigation }) => {

  return (
    <View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.hamburgerButton} onPress={() => { navigation.openDrawer() }} >
          <Icon name={'menu'} size={35} color="#B1BDC7" />
        </TouchableOpacity>
        <Text style={styles.myNotesTitle}>myNoteApp {'<3'}</Text>
        <TouchableOpacity style={styles.orderByButton}>
          <Text style={styles.orderByText}>Order By</Text>
          <Icon name={'chevron-down'} size={20} color="#777" />
        </TouchableOpacity>
      </View>

      <NotesListComponent />

      <View style={styles.addNoteButtonContainer}>
        <TouchableOpacity style={styles.addNoteButton} onPress={() => { navigation.navigate('ViewNote') }}>
          <Icon name={'plus'} size={50} color="#777" />
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default Home;


