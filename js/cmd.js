// Generated by CoffeeScript 1.4.0
(function() {
  var ft, tmp;

  tmp = process.argv.splice(2);

  if (tmp.length === 0) {
    throw "what's the command you wanna execute?";
  }

  ft = require(__dirname + '/facebookterminal.js');

  ft.cmd(tmp.join(' '));

}).call(this);