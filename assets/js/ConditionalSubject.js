let definitionSectionDiv = document.querySelector("div.definitionSection");
let typesSectionDiv = document.querySelector("div.typesSection");
let footerDiv = document.querySelector("div.footer");

window.onscroll = function() {
  console.log(window.scrollY);
  if (window.scrollY >= 900) {
    definitionSectionDiv.style.animationName = "sectionFadeLeft";
  }
  if (window.scrollY >= 1800) {
    typesSectionDiv.style.animationName = "sectionFadeRight";
  }
}