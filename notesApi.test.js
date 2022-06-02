const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableFetchMocks()

describe('Notes Api class', () => {
  describe('#loadNotes', () => {
    it('calls fetch (GET request) and loads notes from the backend server', (done) => {
      const api = new NotesApi();

      fetch.mockResponseOnce( async (request) => {
        try { 
          expect(request.method).toBe('GET');
        } catch (error) {
          console.log('error:', error);
          done(error);
        }

        return JSON.stringify(['This note is coming from the server']);

      });

      api.loadNotes((response) => {
        expect(response[0]).toBe('This note is coming from the server');
        expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/notes');
        done();
      })

      // orginal test
      // const api = new NotesApi();

      // fetch.mockResponseOnce(
      //   JSON.stringify(["This note is coming from the server"])
      
      // );
      
      // api.loadNotes((noteInfo) => {
      //   expect(noteInfo[0]).toBe('This note is coming from the server');
      // });

      // expect(fetch.mock.calls[0][0]).toEqual("http://localhost:3000/notes");
      // done();
    });
  });

  describe('#createNote', () => {
    it('calls fetch (POST request) and creates a note on the backnd server', (done) => {
      const api = new NotesApi();

      fetch.mockResponseOnce( async (request) => {
        try {
          expect(request.method).toBe('POST');
          const requestBody = await response.json();
          expect(requestBody.content).toEqual('A new note.');
        } catch (error) {
          console.log('error:', error);
          done(error);
        }

        return JSON.stringify(['A new note.']);

      });

      api.createNote('A new note.', (response) => {
        expect(response[0]).toBe('A new note.');

        done();
      });
    });
  });
});