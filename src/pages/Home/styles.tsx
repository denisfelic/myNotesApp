import deviceDimensions from '../../config/deviceDimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: deviceDimensions.height / 7,
  },
  hamburgerButton: {
    left: 20,
    top: 20,
  },

  myNotesTitle: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  orderByButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    right: 10,
    top: 20,
  },

  orderByText: {

  },

  addNoteButtonContainer: {
    position: 'absolute',
    left: deviceDimensions.width / 1.30,
    top: deviceDimensions.height / 1.25,
  },

  addNoteButton: {
    backgroundColor: '#333',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
  }
});