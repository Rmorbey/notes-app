class NotesView {
  constructor(model, api) {
    this.api = api;
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    
    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });

  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {

    const removeNotes = document.querySelectorAll('.note');

    removeNotes.forEach( note => {
      note.remove();
      document.querySelector('#add-note-input').value = "";
    })

    // document.querySelectorAll('.note').forEach(element => {
    //   Element.remove();
    // });
    
    const notes = this.model.getNotes()

    notes.forEach( note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })

  }
}

module.exports = NotesView;