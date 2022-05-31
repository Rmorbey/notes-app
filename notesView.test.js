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
      const view = new NotesView();

      expect(document.querySelectorAll('div.note').length).toBe(0);
    });

    it(`can display two notes`, () => {
      const model = new NotesModel();
      const view = new NotsView();

      model.addNote('A first note');
      model.addNote('A second note');

      view.displayNotes();

      expect(document.querySelectorAll(`div.note`).length).toEqual(2);
    })
  });

});