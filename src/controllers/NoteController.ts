import { NoteInterface } from '../models/NoteInterface';
import notesDB from '../database/notesDB';

export class NoteController {

  /**
   * createNewNote
   */
  public createNewNote(note: NoteInterface) {
    if (!this.validateNoteInterface(note)) {
      throw Error("Error - CreateNewNote: argumento invalido em note");
    }
    notesDB.createNewNote(note);

  }

  /**
   * readAllNotes
   */
  public async readAllNotes() {
    return await notesDB.getNotesList();
  }

  /**
   * readOneNote
   */
  public async readOneNote(note_id: number) {
    const validNumber = Number(note_id);
    if (validNumber == null || validNumber == 0) {
      throw Error("Error - ReadOneNote: argumento invalido em note_id");
    }
    return await notesDB.getOneNote(note_id);
  }

  /**
 * upadateNote
 */
  public upadateNote(note: NoteInterface) {
    if (!this.validateNoteInterface(note)) {
      throw Error("Error - UpdateNote: argumento invalido em note");
    }
    notesDB.updateNote(note);

  }

  /**
 * deleteNote
 */
  public async deleteNote(note_id: number) {
    const validNumber = Number(note_id);
    if (validNumber == null || validNumber == 0) {
      throw Error("Error - deleteNote: argumento invalido em note_id");
    }
    notesDB.deleteNote(note_id);
  }

  private validateNoteInterface(note: NoteInterface) {
    if (note.note_id == null) {
      return false;
    }
    if (note.title == null) {
      return false;
    }
    if (note.content == null) {
      return false;
    }
    if (note.last_UpDate == null) {
      return false;
    }
    if (note.user_id == null) {
      return false;
    }
    return true;

  }
}