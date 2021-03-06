(function() {
  var GenericWindow;
  GenericWindow = function(theTitle, theText) {
    var label;
    this.custom1 = "Default Value";
    this.win = Ti.UI.createWindow({
      title: theTitle,
      backgroundColor: '#fff'
    });
    label = Titanium.UI.createLabel({
      color: '#999',
      text: theText,
      font: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue'
      },
      textAlign: 'center',
      width: 'auto'
    });
    this.win.add(label);
    return this;
  };
  root.GenericWindow = GenericWindow;
})();
