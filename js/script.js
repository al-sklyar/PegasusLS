$(document).ready(() => {
  $(".first-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">ГЛАВНАЯ</span>');    
  });
  $(".second-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">УСЛУГИ</span>');
  });
  $(".third-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">АВТОПАРК</span>');
  });
  $(".fourth-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">СОБЫТИЯ</span>');
  });
  $(".fifth-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">О НАС</span>');
  });
  $(".sixth-button").on("click", () => {
    $(".breadcrumbs__next-dir").html('<span class="breadcrumbs__next-dir-text">КОНТАКТЫ</span>');
  });
});