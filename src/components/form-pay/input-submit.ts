import Block from "../../core/templates/block";

export class InputSubmit extends Block {
  private inputElem: HTMLElement;

  constructor() {
    super("input-submit", "input__submit");
    this.inputElem = document.createElement("input");
    this.inputElem.id = "submit-info";
    this.inputElem.className = "submit__info";
    this.inputElem.setAttribute("type", "submit");
    this.inputElem.setAttribute("value", "Submit");
    this.inputElem.addEventListener("click", InputSubmit.onclickButton);
  }

  render() {
    this.container.append(this.inputElem);
    return this.container;
  }

  static onclickButton() {
    checkName();
    checkPhone();
    checkAddress();
    checkEmail();
    checkCreditNumber();
    checkCreditDate();
    checkCreditCvv();
    checkForm();
  }
}

function checkName() {
  let name = document.getElementById("input-name") as HTMLInputElement;
  let wrappName = document.getElementById("wrapper-input1");
  let iconInput = document.getElementById("check-input1");
  let errorText = document.getElementById("error-input1");
  let text = "";
  if (name?.value.length === 0) {
    text = "Field must not be empty";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (name!.value.length < 4) {
    text = "Characters must be more than 3";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (name!.value.length >= 4) {
    text = "";
    veiwCheck(wrappName!, iconInput!, errorText!, text, true);
  }
}

function checkPhone() {
  let phone = document.getElementById("input-phone") as HTMLInputElement;
  let wrappName = document.getElementById("wrapper-input2");
  let iconInput = document.getElementById("check-input2");
  let errorText = document.getElementById("error-input2");
  let text = "";
  if (phone?.value.length === 0) {
    text = "Field must not be empty";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (!/^[0-9]+$/.test(phone?.value)) {
    text = "Characters must be numbers only";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else {
    text = "";
    veiwCheck(wrappName!, iconInput!, errorText!, text, true);
  }
}

function checkAddress() {
  let address = document.getElementById("input-address") as HTMLInputElement;
  let wrappName = document.getElementById("wrapper-input3");
  let iconInput = document.getElementById("check-input3");
  let errorText = document.getElementById("error-input3");
  let text = "";
  if (address?.value.length === 0) {
    text = "Field must not be empty";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (address!.value.length >= 4) {
    text = "";
    veiwCheck(wrappName!, iconInput!, errorText!, text, true);
  }
}

function checkEmail() {
  let email = document.getElementById("input-email") as HTMLInputElement;
  let wrappName = document.getElementById("wrapper-input4");
  let iconInput = document.getElementById("check-input4");
  let errorText = document.getElementById("error-input4");
  let text = "";
  if (email?.value.length === 0) {
    text = "Field must not be empty";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (email?.value.indexOf("@") === -1) {
    text = "Incorrect email";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (email?.value.indexOf("@") !== -1) {
    if (email!.value[0] === "@") {
      text = "missing characters before '@'";
      veiwCheck(wrappName!, iconInput!, errorText!, text, false);
    } else if (email!.value[email!.value.length - 1] === "@") {
      text = "missing characters after '@'";
      veiwCheck(wrappName!, iconInput!, errorText!, text, false);
    } else {
      text = "";
      veiwCheck(wrappName!, iconInput!, errorText!, text, true);
    }
  }
}

function checkCreditNumber() {
  let creditNum = document.getElementById("credit-number") as HTMLInputElement;
  let wrappName = document.getElementById("wrapper-input5");
  let iconInput = document.getElementById("check-input5");
  let errorText = document.getElementById("error-input5");
  let text = "";
  if (creditNum?.value.length === 0) {
    text = "Field must not be empty";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (!/^[0-9]+$/.test(creditNum?.value)) {
    text = "Characters must be numbers only";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (/^[0-9]+$/.test(creditNum?.value) && creditNum?.value.length < 16) {
    text = "the number of digits must be 16";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else {
    text = "";
    veiwCheck(wrappName!, iconInput!, errorText!, text, true);
  }
}

function checkCreditDate() {
  let creditDate = document.getElementById("credit-date") as HTMLInputElement;
  let wrappName = document.getElementById("wrapper-input6");
  let iconInput = document.getElementById("check-input6");
  let errorText = document.getElementById("error-input6");
  let text = "";
  if (creditDate?.value.length === 0) {
    text = "Field must not be empty";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (!/(0[1-9]|1[0-2])\/([0-9]{2})/.test(creditDate.value)) {
    text = "date format  _ _ / _ _";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else {
    text = "";
    veiwCheck(wrappName!, iconInput!, errorText!, text, true);
  }
}

function checkCreditCvv() {
  let creditCvv = document.getElementById("credit-cvv") as HTMLInputElement;
  let wrappName = document.getElementById("wrapper-input7");
  let iconInput = document.getElementById("check-input7");
  let errorText = document.getElementById("error-input7");
  let text = "";
  if (creditCvv?.value.length === 0) {
    text = "Field must not be empty";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (!/^[0-9]+$/.test(creditCvv?.value)) {
    text = "Characters must be numbers only";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else if (/^[0-9]+$/.test(creditCvv?.value) && creditCvv?.value.length < 3) {
    text = "the number of digits must be 16";
    veiwCheck(wrappName!, iconInput!, errorText!, text, false);
  } else {
    text = "";
    veiwCheck(wrappName!, iconInput!, errorText!, text, true);
  }
}

function checkForm() {
  let count = 0;
  let checkTitle = document.getElementById("check-form");
  for(let i = 1; i < 8; i++) {
    let checkTemp = document.getElementById(`wrapper-input${i}`) as HTMLElement;
    if (checkTemp!.style.border === "2px solid green") {
      count++;
    }
    if(count === 7) {
      checkTitle!.innerText = "Format sent !!!";
    }
  }
}

function veiwCheck(
  wrapp: HTMLElement,
  icon: HTMLElement,
  error: HTMLElement,
  text: string,
  check: boolean
) {
  if (check) {
    wrapp!.style.border = "2px solid green";
    icon!.style.background = "url('./assets/icons8-ok.svg')";
    icon!.style.backgroundSize = "contain";
    error!.textContent = "";
  } else {
    wrapp!.style.border = "2px solid red";
    icon!.style.background = "url('./assets/icons8-false.svg')";
    icon!.style.backgroundSize = "contain";
    error!.textContent = `${text}`;
  }
}
