window.TrelloPowerUp.initialize({
  'card-buttons': function(t) {
    return [{
      text: 'Test CSV Button',
      callback: function(t) {
        return t.popup({
          title: 'Import CSV',
          url: 'popup.html',
          height: 200
        });
      }
    }];
  },

  'show-settings': function(t) {
    return t.popup({
      title: 'Settings',
      url: 'settings.html',
      height: 200
    });
  }
});
