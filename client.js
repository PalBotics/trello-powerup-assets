console.log("Trello Power-Up: client.js loaded");

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    console.log("Trello Power-Up: initializing card button");
    return [{
      text: 'Test CSV Button',
      callback: function(t) {
        console.log("Trello Power-Up: button clicked");
        return t.popup({
          title: 'Hello from CSV',
          url: 'popup.html',
          height: 180
        });
      }
    }];
  },

  'show-settings': function(t, options) {
    console.log("Trello Power-Up: opening settings");
    return t.popup({
      title: 'CSV Importer Settings',
      url: 'popup.html',
      height: 200
    });
  }
});