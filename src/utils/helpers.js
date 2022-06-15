let characters = '';

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

const passwordCharacters = (passLength) => {
  let password = '';
  if (characters.length > 0) {
    for (let i = 0; i < passLength; i++) {
      password += characters[getRandomInteger(0, characters.length - 1)];
    }
    characters = '';
    return password;
  }
};

export const generatePassword = (checkBoxes, passLength) => {
  const isChecked = checkBoxes.map((checked) => checked.isChecked);
  const [uppercase, lowercase, symbols, numbers] = isChecked;
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);
  const password = passwordCharacters(passLength);

  return password;
};
