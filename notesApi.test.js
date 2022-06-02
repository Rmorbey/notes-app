const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableFetchMocks()

describe('Notes Api class', () => {
  describe('#loadNotes', () => {
    it('calls fetch and loads notes from the server', (done) => {
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
});