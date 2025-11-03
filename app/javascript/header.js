document.addEventListener("turbo:load", () => {
  const navbar = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");

  if (!navbar || !toggler) return;

  const collapse = new Collapse(navbar, { toggle: false });

  // トグルボタンで開閉
  toggler.addEventListener("click", () => {
    const isShown = navbar.classList.contains("show");
    if (isShown) {
      collapse.hide();
    } else {
      collapse.show();
    }
  });

  // メニューからマウスが離れたら閉じる
  navbar.addEventListener("mouseleave", () => {
    collapse.hide();
  });

  // リンククリック時にも閉じる（スマホ用）
  navbar.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", () => collapse.hide());
  });
});