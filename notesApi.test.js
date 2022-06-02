const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableFetchMocks()

describe('Notes Api class', () => {
  it('calls fetch and loads notes info', (done) => {
    const api = new NotesApi();

    fetch.mockResponseOnce(
      JSON.stringify(["This note is coming from the server"])
    
    );
    
    api.loadNotes((noteInfo) => {
      expect(noteInfo[0]).toBe('This note is coming from the server');
    });

    expect(fetch.mock.calls[0][0]).toEqual("http://localhost:3000/notes");
    done();
  });
});