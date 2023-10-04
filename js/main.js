$(document).ready(function () {
  $("body").on("input", ".input-number", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });
  $("#form-card").mask("9999 9999 9999 9999");

  $(".payment__cvv-question").hover(function () {
    $(".payment__tooltip").toggleClass("active");
  });

  $(".payment__form-submit").click(function () {
    if ($(".payment__terms-checkbox").is(":checked")) {
      $(".payment__terms").removeClass("alert");
    } else {
      $(".payment__terms").addClass("alert");
    }
  });

  $(".payment__btn").click(function () {
    $(".payment__btn").removeClass("active");
    $(this).addClass("active");
  });

  $("#credit-btn").click(function () {
    $(".box-template").hide();
    $(".payment__form-container").fadeIn();
  });

  $("#gift-btn").click(function () {
    $(".box-template").hide();
    $(".payment__gift-box").fadeIn();
  });

  $("#paypal-btn").click(function () {
    $(".box-template").hide();
    $(".payment__paypal-box").fadeIn();
  });

  $(".payment__terms-btn").click(function () {
    $(".background").show();
    $(".modal").show();
    $("body, html").addClass("overflow");
  });

  $(".modal__close, .background").click(function () {
    $(".background").hide();
    $(".modal").hide();
    $("body, html").removeClass("overflow");
  });
});
