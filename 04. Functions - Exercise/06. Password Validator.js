function passwordValidator(password) {
  let passwordLength = password.length;

  let isLength = true;
  if (passwordLength < 6 || passwordLength > 10) {
    console.log("Password must be between 6 and 10 characters");
  }

  let isCharOrDigit = true;
  for (let k = 0; k < passwordLength; k++) {
    let current = password[k].charCodeAt();
    let isDigit = current >= 48 && current <= 57;
    let isSmallCase = current >= 97 && current <= 122;
    let isUpperCase = current >= 65 && current <= 90;
   
    if ((!isDigit) && (!isSmallCase) && (!isUpperCase)) {
      isCharOrDigit = false
    }
  }
  if (!isCharOrDigit) {
    console.log("Password must consist only of letters and digits");
  }


  let digitCounter = 0;
  for (let i = 0; i < passwordLength; i++) {
    if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
      digitCounter++;
    }
  }
  let isleast2Digit = digitCounter >= 2;
  if (!isleast2Digit) {
    console.log("Password must have at least 2 digits");
  }

  if (isLength && isleast2Digit && isCharOrDigit) {
    console.log("Password is valid");
  }
}
passwordValidator('l#ogIn11');
