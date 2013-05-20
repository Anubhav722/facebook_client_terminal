// Generated by CoffeeScript 1.4.0

/*
 Setup globals to fool me into thinking I'm on a nodejs.
 and do something related to web.
*/


(function() {

  window.module = {
    exports: {}
  };

  window.process = {
    stdin: null,
    stdout: null,
    exit: function() {}
  };

  window.global = window;

  window.require = function(name) {
    switch (name) {
      case "repl":
        return new facebook_terminal.REPL();
      case "./libs/underscore.js":
        return window._us;
      case "fb":
        return window.FB;
      case './fbconnect':
        return facebook_terminal.WebFBConnect;
      case './loginserver.js':
        return null;
      default:
        throw "error. module not found: " + name;
    }
  };

  window.console.log = function(value) {
    return process.stdout.write(value);
  };

  window._us = _;

  window.facebook_terminal = {};

  window.JST = {};

  window.is_web = true;

  window.fbAsyncInit = function() {
    var controller, csl, div, ft, text;
    FB.init({
      appId: '263737387006387',
      channelUrl: '//static.dev/channel.html',
      status: true,
      cookie: true,
      xfbml: true
    });
    csl = $('<div class="console">');
    div = $('#console');
    text = div.text();
    div.empty();
    div.append(csl);
    controller = csl.console({
      promptLabel: '$ ',
      welcomeMessage: text,
      commandValidate: function(line) {
        return true;
      },
      commandHandle: function(line, report) {
        window.process.stdin.input(line);
      },
      cols: 40,
      autofocus: true,
      animateScroll: true,
      promptHistory: true
    });
    window.process.stdin = new facebook_terminal.STDIN();
    window.process.stdout = new facebook_terminal.STDOUT(function(value) {
      return controller.output(value, "jquery-console-message-value");
    });
    ft = window.module.exports;
    return ft.start();
  };

}).call(this);
