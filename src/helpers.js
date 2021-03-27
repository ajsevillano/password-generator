let characters = '';
let passwordLength = '';

const setUpperCase = (isUpperCase) => {
  isUpperCase
    ? (characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    : (characters += '');
};

const setLowerCase = (isLowerCase) => {
  isLowerCase
    ? (characters += 'abcdefghijklmnopqrstuvwxyz')
    : (characters += '');
};

const setSymbols = (isSymbol) => {
  isSymbol ? (characters += '!@#$%^&*()<>,.?/[]{}-=_+|/') : (characters += '');
};

const setNumber = (isNumeric) => {
  isNumeric ? (characters += '0123456789') : (characters += '');
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const setPasswordLength = (length) => {
  passwordLength = length;
  return passwordLength;
};

const passwordCharacters = () => {
  const characterList = characters;
  let password = '';
  if (characterList.length > 0) {
    for (let i = 0; i < passwordLength; i++) {
      password += characterList[getRandomInteger(0, characterList.length - 1)];
    }

    return password;
  }
};

export const generatePassword = () => {
  setPasswordLength(passwordLength);
  setUpperCase(true);
  setLowerCase(true);
  setSymbols(true);
  setNumber(true);
  const password = passwordCharacters();
  return password;
};
