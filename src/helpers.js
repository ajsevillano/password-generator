let characters = '';
let passwordLength = '';

const setUpperCase = (isUpperCase) => {
  isUpperCase && (characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
};

const setLowerCase = (islowercase) => {
  islowercase && (characters += 'abcdefghijklmnopqrstuvwxyz');
};

const setSymbols = (isSymbol) => {
  isSymbol && (characters += '!@#$%^&*()<>,.?/[]{}-=_+|/');
};

const setNumber = (isNumeric) => {
  isNumeric && (characters += '0123456789');
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

export const generatePassword = (uppercase, lowercase, symbols, numbers) => {
  console.log(uppercase, lowercase, symbols, numbers);
  setPasswordLength(passwordLength);
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);
  const password = passwordCharacters();
  return password;
};
