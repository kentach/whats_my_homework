document.addEventListener("turbo:load", () => {
  const nav = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");

  if (!nav || !toggler) return;

  // マウスが外れたら閉じる
  nav.addEventListener("mouseleave", () => {
    const bsCollapse = bootstrap.Collapse.getInstance(nav);
    if (bsCollapse) bsCollapse.hide();
  });

  // メニューリンククリックで閉じる
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(nav);
      if (bsCollapse) bsCollapse.hide();
    });
  });
});
