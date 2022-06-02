const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('Notes Api class', () => {
  it('calls fetch and loads notes info', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify([
      "This note is coming from the server"
    ]));

    expect(api.loadNotes).toBe('This note is coming from the server');
  });
});