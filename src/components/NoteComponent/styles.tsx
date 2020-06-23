import deviceDimension from '../../config/deviceDimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  note_container: {
    height: deviceDimension.height / 7,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 3,
    borderColor: '#909DA9',
    width: deviceDimension.width,
    marginLeft: 1,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  note_container_borderWithTop:{
    height: deviceDimension.height / 7,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: '#909DA9',
    width: deviceDimension.width,
    marginLeft: 1,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  note_date: {
    alignSelf: 'flex-end',
    color: '#A8B2BB',
    fontSize: 14,
    top: 5,
  },
  note_title: {
    marginTop: 5,
    marginLeft: 10,
    color: '#909DA9',
    fontSize: 15
  },
  note_content: {
    marginTop: 5,
    marginLeft: 15,
    width: deviceDimension.width / 1.2,
    color: '#C8D3DC'
  }
});
export default styles;