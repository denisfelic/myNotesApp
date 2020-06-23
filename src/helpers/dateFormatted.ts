import { NoteInterface } from 'src/models/NoteInterface';

function getCurrentDateFormatted(note: NoteInterface) {

  let year = note.date.substring(0, 4);
  let month = note.date.substring(5, 7);
  let day = note.date.substring(8, 10);
  let personalDate = `${day}/${month}/${year}`;

  return personalDate;
}
const dateFormatted = {
  getCurrentDateFormatted: getCurrentDateFormatted,
}
export default dateFormatted;