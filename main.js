const container = document.createElement("div");

const textArea = document.createElement("textarea");
textArea.setAttribute("autofocus", "autofocus");
textArea.setAttribute("rows", "15");
textArea.setAttribute("cols", "90");

const keyBoard = document.createElement("div");

let lang,
  langStorage,
  language = JSON.parse(localStorage.getItem(lang));

container.classList.add("container");
textArea.id = "textArea";
keyBoard.classList.add("keyboard");

container.append(textArea);
container.append(keyBoard);

document.body.append(container);

const geoLower = [
  "„",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "ქ",
  "წ",
  "ე",
  "რ",
  "ტ",
  "ყ",
  "უ",
  "ი",
  "ო",
  "პ",
  "[",
  "]",
  "Enter",
  "Capslk",
  "ა",
  "ს",
  "დ",
  "ფ",
  "გ",
  "ჰ",
  "ჯ",
  "კ",
  "ლ",
  ";",
  "'",
  "\\",
  "Shift",
  "]",
  "ზ",
  "ხ",
  "ც",
  "ვ",
  "ბ",
  "ნ",
  "მ",
  ",",
  ".",
  "/",
  "Shift",
  "ctrl",
  "win",
  "alt",
  " ",
  "alt",
  "ctrl",
  "&#9666",
  "&#9662",
  "&#9662",
  "&#9656",
];

const geoUpper = [
  "“",
  "!",
  '"',
  "№",
  ";",
  "%",
  ":",
  "?",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "ქ",
  "ჭ",
  "ე",
  "ღ",
  "თ",
  "ყ",
  "უ",
  "ი",
  "ო",
  "პ",
  "{",
  "}",
  "Enter",
  "Capslk",
  "ა",
  "შ",
  "დ",
  "ფ",
  "გ",
  "ჰ",
  "ჟ",
  "კ",
  "₾",
  ":",
  '"',
  "/",
  "Shift",
  "[",
  "ძ",
  "ხ",
  "ჩ",
  "ვ",
  "ბ",
  "N",
  "მ",
  "<",
  ">",
  "?",
  "Shift",
  "ctrl",
  "win",
  "alt",
  " ",
  "alt",
  "ctrl",
  "&#9666",
  "&#9662",
  "&#9662",
  "&#9656",
];

const englishLower = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter"],
  ["Capslk", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\"],
  ["Shift", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  [
    "ctrl",
    "win",
    "alt",
    " ",
    "alt",
    "ctrl",
    "&#9666",
    "&#9662",
    "&#9662",
    "&#9656",
  ],
];

const englishUpper = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "Enter",
  "Capslk",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "|",
  "Shift",
  "~",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "Shift",
  "ctrl",
  "win",
  "alt",
  " ",
  "alt",
  "ctrl",
  "&#9666",
  "&#9662",
  "&#9662",
  "&#9656",
];

let englishLowArr = [];

for (let i = 0; i < englishLower.length; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  keyBoard.append(row);

  for (let j = 0; j < englishLower[i].length; j++) {
    let key = document.createElement("span");
    key.classList.add("key");
    row.append(key);
    englishLowArr.push(englishLower[i][j]);
  }
}

let allKeys = document.querySelectorAll("span");

function filling(elem) {
  for (let i = 0; i < allKeys.length; i++) {
    allKeys[i].innerHTML = elem[i];
  }
}

if (!language) {
  filling(englishLowArr);
} else {
  filling(language);
}

const codeList = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Enter",
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Backslash",
  "ShiftLeft",
  "IntlBackslash",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ControlRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
];

let tab = allKeys[14];
let capsLock = allKeys[28];
let shiftLeft = allKeys[41];
let shiftRight = allKeys[53];
let ctrlLeft = allKeys[54];
let altLeft = allKeys[56];
let altRight = allKeys[58];
let winLeft = allKeys[55];
let ctrlRight = allKeys[59];
let space = allKeys[57];
let arrLeft = allKeys[60];
let arrRight = allKeys[63];
let arrDown = allKeys[62];
let arrUp = allKeys[61];
let enter = allKeys[27];
let backspace = allKeys[13];

space.classList.add("space");
arrLeft.classList.add("arrow");
arrLeft.classList.add("arrowLeft");
arrRight.classList.add("arrow");
arrRight.classList.add("arrowRight");
arrDown.classList.add("arrow");
arrDown.classList.add("arrowDown");
arrUp.classList.add("arrow");
arrUp.classList.add("arrowUp");
backspace.classList.add("backspace");
enter.classList.add("enter");
tab.classList.add("tab");
capsLock.classList.add("capsLock");
shiftLeft.classList.add("shiftLeft");
shiftRight.classList.add("shiftRight");
ctrlLeft.classList.add("ctrlLeft");
altLeft.classList.add("altLeft");
altRight.classList.add("altRight");
winLeft.classList.add("winLeft");
ctrlRight.classList.add("ctrlRight");

document.addEventListener("keydown", (event) => {
  for (let i = 0; i < allKeys.length; i++) {
    switch (event.code) {
      case codeList[i]:
        allKeys[i].classList.add("pressed");
        break;
    }
  }

  if (event.code == "ShiftLeft" && (event.altKey || event.metaKey)) {
    if (allKeys[0].innerHTML === "`") {
      localStorage.clear();
      langStorage = geoLower;

      localStorage.setItem(lang, JSON.stringify(langStorage));
      language = JSON.parse(localStorage.getItem(lang));

      filling(langStorage);
    } else {
      localStorage.clear();
      langStorage = englishLowArr;

      localStorage.setItem(lang, JSON.stringify(langStorage));
      language = JSON.parse(localStorage.getItem(lang));

      filling(langStorage);
    }
  }

  if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
    if (allKeys[0].innerHTML === "`") {
      filling(englishUpper);
    } else {
      filling(geoUpper);
    }
  }

  if (event.code == "AltRight") {
    for (let i = 0; i < allKeys.length; i++) {
      switch (event.code) {
        case codeList[i]:
          allKeys[54].classList.remove("pressed");
          break;
      }
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
    if (allKeys[0].innerHTML === "~") {
      filling(englishLowArr);
    } else {
      filling(geoLower);
    }
  }

  for (let i = 0; i < allKeys.length; i++) {
    if (event.code == codeList[i]) {
      allKeys[i].classList.remove("pressed");
      break;
    }
    if (event.code == "CapsLock") {
      return;
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "CapsLock") {
    if (allKeys[0].innerHTML === "`") {
      filling(englishUpper);
      allKeys[28].classList.add("pressed");
    } else if (allKeys[0].innerHTML === "~") {
      filling(englishLowArr);
      allKeys[28].classList.remove("pressed");
    } else if (allKeys[0].innerHTML === "„") {
      filling(geoUpper);
      allKeys[28].classList.add("pressed");
    } else if (allKeys[0].innerHTML === "“") {
      filling(geoLower);
      allKeys[28].classList.remove("pressed");
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "CapsLock") {
    if (allKeys[0].innerHTML === "`") {
      allKeys[28].classList.remove("pressed");
    } else if (allKeys[0].innerHTML === "„") {
      allKeys[28].classList.remove("pressed");
    }
  }
});

arrLeft.classList.add("functional");
arrRight.classList.add("functional");
arrDown.classList.add("functional");
arrUp.classList.add("functional");
backspace.classList.add("functional");
enter.classList.add("functional");
tab.classList.add("functional");
capsLock.classList.add("functional");
shiftLeft.classList.add("functional");
shiftRight.classList.add("functional");
ctrlLeft.classList.add("functional");
altLeft.classList.add("functional");
altRight.classList.add("functional");
winLeft.classList.add("functional");
ctrlRight.classList.add("functional");

keyBoard.addEventListener("click", (event) => {
  let positionStart = textArea.selectionStart;
  const beforeText = textArea.value.slice(0, positionStart),
    afterText = textArea.value.slice(positionStart);

  textArea.focus();

  if (
    event.target.tagName === "SPAN" &&
    event.target.classList.contains("functional") === false
  ) {
    textArea.value += event.target.innerHTML;
    positionStart += 1;
  }

  if (event.target.classList.contains("space")) {
    textArea.value = `${beforeText}\u0020${afterText}`;
    textArea.selectionStart = positionStart;
    textArea.selectionEnd = positionStart;
  }

  if (event.target.classList.contains("tab")) {
    textArea.value = `${beforeText}\t${afterText}`;
    positionStart += 1;
  }

  if (event.target.classList.contains("enter")) {
    textArea.value = `${beforeText}\n${afterText}`;
    positionStart += 1;
  }

  if (event.target.classList.contains("arrowUp")) {
    textArea.value = `${beforeText}\u2191${afterText}`;
    positionStart += 1;
  }

  if (event.target.classList.contains("arrowDown")) {
    textArea.value = `${beforeText}\u2193${afterText}`;
    positionStart += 1;
  }

  if (event.target.classList.contains("arrowLeft")) {
    textArea.value = `${beforeText}\u2190${afterText}`;
    positionStart += 1;
  }

  if (event.target.classList.contains("arrowRight")) {
    textArea.value = `${beforeText}\u2192${afterText}`;
    positionStart += 1;
  }

  if (event.target.classList.contains("backspace")) {
    textArea.value = beforeText.slice(0, -1) + afterText;
    if (positionStart > 0) {
      positionStart -= 1;
    } else {
      positionStart = 0;
    }
  }

  textArea.selectionStart = positionStart;
  textArea.selectionEnd = positionStart;
});

keyBoard.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("capsLock")) {
    if (allKeys[0].innerHTML === "~") {
      filling(englishLowArr);
      event.target.classList.remove("pressed");
    } else if (allKeys[0].innerHTML === "“") {
      filling(geoLower);
      event.target.classList.remove("pressed");
    } else if (allKeys[0].innerHTML === "`") {
      filling(englishUpper);
      event.target.classList.add("pressed");
    } else if (allKeys[0].innerHTML === "„") {
      filling(geoUpper);
      event.target.classList.add("pressed");
    }
  }

  if (
    event.target.classList.contains("shiftLeft") ||
    event.target.classList.contains("shiftRight")
  ) {
    if (allKeys[0].innerHTML === "`") {
      filling(englishUpper);
    } else {
      filling(geoUpper);
    }
  }

  if (event.target.tagName === "SPAN") {
    event.target.classList.add("pressed");
  }
});

keyBoard.addEventListener("mouseup", (event) => {
  if (
    event.target.classList.contains("shiftLeft") ||
    event.target.classList.contains("shiftRight")
  ) {
    event.target.classList.remove("pressed");
    if (allKeys[0].innerHTML === "~") {
      filling(englishLowArr);
    } else {
      filling(geoLower);
    }
  }
  if (event.target.classList.contains("capsLock")) {
    if (allKeys[0].innerHTML === "`") {
      event.target.classList.remove("pressed");
    } else if (allKeys[0].innerHTML === "„") {
      event.target.classList.remove("pressed");
    }
  }

  if (event.target.tagName === "SPAN") {
    if (event.target.classList.contains("capsLock")) {
      return false;
    }
    event.target.classList.remove("pressed");
  }
});
