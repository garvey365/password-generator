document.addEventListener("DOMContentLoaded", () => {
    const lengthSlider = document.getElementById("length-slider");
    const lengthValue = document.getElementById("length-value");
    const includeUppercase = document.getElementById("include-uppercase");
    const includeLowercase = document.getElementById("include-lowercase");
    const includeNums = document.getElementById("include-nums")
    const includeSpecialChars = document.getElementById("include-special-chars");
    const generatePasswordButton = document.getElementById("generate-password");
    const passwordInput = document.getElementById("password");
    const copyPasswordButton = document.getElementById("copy-password");
  

    lengthSlider.addEventListener("mouseup", () => {
      let length = parseInt(lengthSlider.value);
      lengthValue.textContent = lengthSlider.value;
      let password = generatePassword(length, includeUppercase.checked,includeLowercase.checked,includeNums.checked, includeSpecialChars.checked)
      passwordInput.value = password;
    });
  
    generatePasswordButton.addEventListener("click", () => {
      const length = parseInt(lengthSlider.value);
      const password = generatePassword(length, includeUppercase.checked,includeLowercase.checked,includeNums.checked, includeSpecialChars.checked);
      passwordInput.value = password;
    });
  
    copyPasswordButton.addEventListener("click", () => {
      passwordInput.select();
      document.execCommand("copy");
    });

    
  });
  
  function generatePassword(length, useUppercase,useLowercase,useNumscase,useSpecialChars) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numscaseChars = "0123456789";
    // const specialChars = "!@#$%^&*()-_=+[{]};:'\",<.>/?`~";
    const specialChars = "!@#$%^*_;:',.?";
  
    let availableChars = "";
    if (useNumscase) availableChars +=numscaseChars;
    if (useLowercase) availableChars +=lowercaseChars;
    if (useUppercase) availableChars += uppercaseChars;
    if (useSpecialChars) availableChars += specialChars;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * availableChars.length);
      password += availableChars[index];
    }
    return password;
  }

