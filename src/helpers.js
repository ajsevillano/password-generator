let characters = '';
let passwordLength = '';

const setUpperCase = (isUpperCase) => {
  isUpperCase && (characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  return '';
};

const setLowerCase = (isLowerCase) => {
  isLowerCase && (characters += 'abcdefghijklmnopqrstuvwxyz');
  return '';
};

const setSymbols = (isSymbol) => {
  isSymbol && (characters += '!@#$%^&*()<>,.?/[]{}-=_+|/');
  return '';
};

const setNumber = (isNumeric) => {
  isNumeric && (characters += '0123456789');
  return '';
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
    characters = '';
    passwordLength = 0;
    return password;
  }
};

export const generatePassword = (isLowerCase) => {
  setPasswordLength(passwordLength);
  setUpperCase(true);
  setLowerCase(isLowerCase);
  setSymbols(false);
  setNumber(false);
  const password = passwordCharacters();
  return password;
};
