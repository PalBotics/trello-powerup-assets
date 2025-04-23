window.TrelloPowerUp.initialize({
    'board-buttons': function(t, options) {
      return [{
        text: 'Import CSV',
        callback: function(t) {
          return t.popup({
            title: 'Import from CSV',
            url: 'popup.html',
            height: 220
          });
        }
      }];
    }
  });