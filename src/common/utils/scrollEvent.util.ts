export const tableOfContentsScrollHandler = (slug: string) => {
  const toc = document.getElementsByTagName("aside");

  if (
    !toc ||
    toc.length === 0 ||
    !toc[0] ||
    !toc[0].style ||
    toc[0].offsetWidth === 0
  ) {
    return;
  }

  const anchor_holder = document.getElementsByClassName("anchor-header");
  if (!anchor_holder || anchor_holder.length <= 0) {
    return;
  }

  let selected_anchor = null;
  const anchor_holder_arr = Array.from(anchor_holder);
  for (let a of anchor_holder_arr) {
    if (a.getBoundingClientRect().top > -50) {
      selected_anchor = a.getAttribute("href");
      break;
    }
  }

  if (!selected_anchor) {
    selected_anchor = anchor_holder_arr.at(-1)?.getAttribute("href");
  }

  document.querySelectorAll("aside ul a.selected").forEach((a) => {
    a.classList.remove("selected");
  });

  if (selected_anchor) {
    const href = `/blog/${slug}/${decodeURIComponent(selected_anchor)}`;
    const toc_selected = document.querySelector(`aside ul a[href='${href}']`);
    toc_selected && toc_selected.classList.add("selected");
  }
};
