class NotesApi {

  async loadNotes(callback) {
    try {
      const response = await fetch('http://localhost:3000/notes');
      const notes = await response.json();
      return callback(notes);
    } catch(error) {
      console.log('loadNotes error:', error);
    }
  }

  // old method that doesn't catch errors
  // loadNotes(callback) {
  //   fetch('http://localhost:3000/notes')
  //   .then(response => response.json())
  //   .then(data => {
  //     callback(data);
  //   });
  // }

  async createNote(note, callback) {
    try { 
      const response = await fetch('http://localhost:3000/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "content": note })
        });
      const notes = await response.json();
      return callback(notes);
    } catch (error) {
      console.log('createNote error:', error)
    }


    // old method that doesn't catch errors
    // fetch('http://localhost:3000/notes', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ "content": note})
    // })
    // .then(response => response.json())
    // .then(data => {
    //   callback(data);
    // });
  };
};



module.exports = NotesApi;