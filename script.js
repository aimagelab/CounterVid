const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const copyButton = document.querySelector("[data-copy]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !navigation?.classList.contains("is-open")) return;

  menuButton?.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  menuButton?.focus();
});

copyButton?.addEventListener("click", async () => {
  const citation = document.querySelector("[data-citation]")?.textContent?.trim();
  const label = copyButton.querySelector("[data-copy-label]");

  if (!citation || !navigator.clipboard) return;

  await navigator.clipboard.writeText(citation);
  if (label) label.textContent = "Copied!";

  window.setTimeout(() => {
    if (label) label.textContent = "Copy BibTeX";
  }, 1800);
});
