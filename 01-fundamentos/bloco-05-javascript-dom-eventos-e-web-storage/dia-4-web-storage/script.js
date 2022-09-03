const ARTICLE = document.getElementsByTagName('article')[0];
const BACKGROUND = document.getElementById('background');
const TEXT_COLOR = document.getElementById('text-color');
const FONT_SIZE = document.getElementById('font-size');
const LINE_SPACING = document.getElementById('line-spacing');
const FONT_FAMILY = document.getElementById('font-family');

function backgroundColor() {
  BACKGROUND.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      ARTICLE.style.backgroundColor = BACKGROUND.value;
    }
  });
}
backgroundColor();

function textColor() {
  TEXT_COLOR.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      ARTICLE.style.color = TEXT_COLOR.value;
    }
  });
}
textColor();

function fontSize() {
  FONT_SIZE.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      ARTICLE.style.fontSize = FONT_SIZE.value;
    }
  });
}
fontSize();

function lineSpacing() {
  LINE_SPACING.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      ARTICLE.style.lineHeight = LINE_SPACING.value;
    }
  });
}
lineSpacing();

function fontFamily() {
  FONT_FAMILY.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      ARTICLE.style.fontFamily = FONT_FAMILY.value;
    }
  });
}
fontFamily();