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

    it(`clicks a button and adds a new note`, () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      const inputEl = document.querySelector(`#add-note-input`);
      inputEl.value = "This is a new test note"

      const buttonEl = document.querySelector(`#add-note-button`);
      buttonEl.click();

      expect(document.querySelectorAll(`div.note`).length).toEqual(1);
      expect(document.querySelectorAll(`div.note`)[0].innerText).toEqual("This is a new test note");
    })

    it(`clear the lost of previous notes before displaying`, () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      const inputEl = document.querySelector(`#add-note-input`);
      inputEl.value = "This is a new test note"

      const buttonEl = document.querySelector(`#add-note-button`);
      buttonEl.click();

      const inputEl2 = document.querySelector(`#add-note-input`);
      inputEl2.value = "Another Test Note."

      const buttonEl2 = document.querySelector(`#add-note-button`);
      buttonEl2.click();

      view.displayNotes();
      view.displayNotes();

      expect(document.querySelectorAll(`div.note`).length).toEqual(2);
      expect(document.querySelectorAll(`div.note`)[0].innerText).toEqual("This is a new test note");
      expect(document.querySelectorAll(`div.note`)[1].innerText).toEqual("Another Test Note.");
    })
  });

});