(function() {

  define(['jQuery', 'Kendo', 'mylibs/camera/camera.events', 'text!mylibs/camera/views/awkward.html'], function($, kendo, events, awkward) {
    var pub;
    return pub = {
      init: function(videoId, buttonId, countdownId, containerId) {
        var $window;
        events.init(videoId, buttonId, countdownId, containerId);
        if (navigator.webkitGetUserMedia) {
          return $.publish("/camera/turnOn");
        } else {
          return $window = $("<div />").kendoWindow({
            visible: false,
            modal: true,
            title: "Soooo.....this is awkward."
          }).closest(".k-window").find(".k-window-actions").remove().end().end().append(awkward).data("kendoWindow").center().open();
        }
      }
    };
  });

}).call(this);