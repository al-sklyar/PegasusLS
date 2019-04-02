$(document).ready(() => {
  let counter = 0;

  $(".first-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">ГЛАВНАЯ</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "12px");
  });
  $(".second-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">УСЛУГИ</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "16px");
  });
  $(".third-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">АВТОПАРК</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "6px");
  });
  $(".fourth-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">СОБЫТИЯ</span>');
  });
  $(".fifth-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">О НАС</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "22px");
  });
  $(".sixth-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">КОНТАКТЫ</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "6px");
  });

  $(".mobile-menu").on("click", () => {
    counter++;

    let toShowOrHideMenu = function() {
      if (counter%2 != 0) {   
        $("header").css("height", "368px");
        $(".popup-menu").css("display", "flex");
      }
        else {
          $(".popup-menu").css("display", "none");
          $("header").css("height", "158px");        
        }
    }
    setTimeout(toShowOrHideMenu, 200);
  });
  $(".popup-menu__buttons:nth-of-type(1)").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">ГЛАВНАЯ</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "12px");
  });
  $(".popup-menu__buttons:nth-of-type(2)").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">УСЛУГИ</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "16px");
  });
  $(".popup-menu__buttons:nth-of-type(3)").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">АВТОПАРК</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "6px");
  });
  $(".popup-menu__buttons:nth-of-type(4)").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">СОБЫТИЯ</span>');
  });
  $(".popup-menu__buttons:nth-of-type(5)").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">О НАС</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "22px");
  });
  $(".popup-menu__buttons:nth-of-type(6)").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">КОНТАКТЫ</span>');
    $(".breadcrumbs__next-dir-text").css("margin-left", "6px");
  });
});