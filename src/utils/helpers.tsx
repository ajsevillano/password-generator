interface Checkboxes {
  id: number;
  isChecked: boolean;
  label: string;
  labelMobile: string;
  name: string;
}

let charactersString = '';

const charactersObject = [
  { uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
  { lowercase: 'abcdefghijklmnopqrstuvwxyz' },
  { symbol: '!@#$%^&*()<>,.?/[]{}-=_+|/' },
  { numbers: '0123456789' },
];

// If the checkbox is checked, then add the corresponding character to the charactersString variable.
const selectRightCharacters = (isChecked: boolean[]) => {
  isChecked.map((everyCheck, index) => {
    return (
      everyCheck === true &&
      (charactersString += Object.values(charactersObject[index]))
    );
  });
};

//  It returns a random integer between the min and max values, inclusive.
const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Randomize the characterString variable
const randomizePassword = (passLength: number) => {
  let password = '';
  if (charactersString.length > 0) {
    for (let i = 0; i < passLength; i++) {
      password +=
        charactersString[getRandomInteger(0, charactersString.length - 1)];
    }
    charactersString = '';
    return password;
  }
};

//It creates an array of booleans with the check value of the checkboxes (true o false)
// Then fulfill the charactersSttring variable and use it to generate a random password.
export const generatePassword = (
  checkBoxes: Array<Checkboxes>,
  passLength: number
) => {
  const isChecked = checkBoxes.map((checked) => checked.isChecked);
  selectRightCharacters(isChecked);
  const password = randomizePassword(passLength);
  return password;
};
