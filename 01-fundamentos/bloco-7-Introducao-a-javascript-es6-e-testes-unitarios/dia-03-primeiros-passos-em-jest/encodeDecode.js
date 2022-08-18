function encode(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == 'a') {
      result += '1';
    } else
    if (string[i] == 'e') {
      result += '2';
    } else
    if (string[i] == 'i') {
      result += '3';
    } else
    if (string[i] == 'o') {
      result += '4';
    } else
    if (string[i] == 'u') {
      result += '5';
    } else
    {
      result += string[i]
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == '1') {
      result += 'a';
    } else
    if (string[i] == '2') {
      result += 'e';
    } else
    if (string[i] == '3') {
      result += 'i';
    } else
    if (string[i] == '4') {
      result += 'o';
    } else
    if (string[i] == '5') {
      result += 'u';
    } else
    {
      result += string[i]
    }
  }
  return result;
}
const functions = { encode, decode };
module.exports = functions;