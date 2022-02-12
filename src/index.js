const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // расставить пробелы каждые 10 символов
  let result = expr.replace(/(.{10})/g, "$1 ");

  const newTable = {};
  for (key in MORSE_TABLE) {
    let newkey = key.replace(/\./g, 10);
    newkey = newkey.replace(/-/g, 11);
    while (newkey.length < 10) {
      newkey = "0" + newkey;
    }
    newTable[newkey] = MORSE_TABLE[key];
  }

  for (key in newTable) {
    let re = new RegExp(key, "g");
    result = result.replace(re, newTable[key]);
  }
  result = result.replace(/ /g, "");
  result = result.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");

  return result;
}

module.exports = {
  decode,
};
