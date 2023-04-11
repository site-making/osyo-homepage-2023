const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("#js-open");
const body =$('body');

open.on('click', function () { //ボタンをクリックしたら
  modal.addClass("open"); // modalクラスにopenクラス付与
  body.css('overflow-y','hidden');
  overlay.addClass("open"); // overlayクラスにopenクラス付与
});
close.on('click', function () { //×ボタンをクリックしたら
  modal.removeClass("open"); // overlayクラスからopenクラスを外す
  overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});