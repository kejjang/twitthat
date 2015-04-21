var Twitthat = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
  },

  send: function() {
    var tt_location, tt_title;
    var browser = window.getBrowser();
    var webNavigation = browser.webNavigation;
    
    tt_location = (webNavigation.currentURI) ? webNavigation.currentURI.spec : gURLBar.value;
    tt_title = (webNavigation.document.title) ? webNavigation.document.title : tt_location;
       
    TwitThatPop = window.open("http://twitthat.com/go?url="+encodeURIComponent(tt_location)+"&title="+((tt_title)?encodeURIComponent(tt_title.replace(/^\s*|\s*$/g,'')):""),"TwitThatPop","width=600,height=500,location,status,scrollbars,resizable,dependent=yes");
    
    var TwitThatPopFocus = {notify: function(timer){ TwitThatPop.focus(); }}
    var timer = Components.classes["@mozilla.org/timer;1"].createInstance(Components.interfaces.nsITimer);
    timer.initWithCallback(
      TwitThatPopFocus,
      100,
      Components.interfaces.nsITimer.TYPE_ONE_SHOT
    );
  }
};

window.addEventListener("load", function(e) { Twitthat.onLoad(e); }, false);