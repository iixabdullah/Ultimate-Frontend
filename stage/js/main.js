$(function () {
  "use strict";
  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  // Toggle submenu
  $(".toggle-submenu").on("click", function () {
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
  });
  // Open / Close FullScreen
  $(".toggle-fullscreen").on("click", function () {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  // Toggle Settigns
  $(".toggle-settings").on("click", function () {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-settings");
  });

  // Switch Colors Theme
  let themeClasses = [];
  $(".color-options li").each(function () {
    themeClasses.push($(this).data("theme"));
  });

  $(".color-options li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("body")
      .removeClass(themeClasses.join(" "))
      .addClass($(this).data("theme"));
  });

  // Switch Font Options
  let fontClasses = [];
  $(".font-options select option").each(function () {
    fontClasses.push($(this).val());
  });
  $(".font-options select").on("change", function () {
    $("body")
      .removeClass(fontClasses.join(" "))
      .addClass($(this).find("option:selected").val());
  });
});
