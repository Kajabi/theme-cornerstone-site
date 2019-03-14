(function ($) {
  var $iframes = $(".fluid-video").find("iframe");
  $iframes.each(function (index) {
    var src = $(this).attr("src");
    if (
      src.indexOf("youtube") >= 0 ||
      src.indexOf("vimeo") >= 0 ||
      src.indexOf("wistia") >= 0 ||
      src.indexOf("ustream") >= 0 ||
      src.indexOf("dailymotion") >= 0
    ) {
      $("<div class='responsive-video' id='responsive-video-" + index + "'></div>").insertBefore($(this));
      $("<div class='video-container' id='video-container-" + index + "'></div>").insertBefore($("#responsive-video-" + index));
      $("#video-container-" + index).html($("#responsive-video-" + index));
      $("#responsive-video-" + index).html($(this));
    }
  });
  $(".responsive-video").css({
    "position": "relative",
    "display": "block",
    "overflow": "hidden",
    "height": "0",
    "padding-bottom": "56.25%"
  });
  $(".responsive-video iframe").css({
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "width": "100%",
    "height": "100%",
    "border": "0",
    "background-color": "#000000"
  });
})(jQuery);
