/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel')

describe(`NotesView`, () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  describe(`#displayNotes`, () => {
    it(`can start with no notes`, () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      expect(document.querySelectorAll('div.note').length).toBe(0);
    });

    it(`can display two notes`, () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      model.addNote('A first note');
      model.addNote('A second note');

      view.displayNotes();

      expect(document.querySelectorAll(`div.note`).length).toEqual(2);
    })

    it(`clicks a button and adds a note`, () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      const inputEl = document.querySelector(`#add-note-input`);
      inputEl.value = "This is a new test note"

      const buttonEl = document.querySelector(`#add-note-button`);
      buttonEl.click();

      expect(document.querySelectorAll(`div.note`).length).toEqual(1);
      expect(document.querySelectorAll(`div.note`)[0].innerText).toEqual("This is a new test note");
    })
  });

});