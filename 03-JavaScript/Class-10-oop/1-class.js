// OOP - paradigm
// entities or objects(Real Word)
// properties (attibutes / variables)
// methods (functions)

class Control {
  constructor(temp) {
    this.temperature = temp;
    this.color = "white";
    this.ison = false;
  }

  on_off() {
    this.ison = !this.ison;
  }

  tempUpper() {
    this.temperature = this.temperature + 1;
  }

  tempLower() {
    this.temperature = this.temperature - 1;
  }
}

const airControl = new Control(18);
const airControl2 = new Control(22);

console.log(airControl.temperature);
console.log(airControl2.temperature);
console.log(airControl.color);

console.log(airControl.ison);

airControl.tempUpper();
console.log(airControl.temperature);
airControl.tempLower();
airControl.tempLower();
airControl.tempLower();
airControl.tempLower();
console.log(airControl.temperature);

const buttonUpper = document.querySelector(".button-upper");
const buttonLower = document.querySelector(".button-lower");
const buttonOnOff = document.querySelector(".on-off");

buttonUpper.addEventListener("click", () => {
  airControl.tempUpper();
  console.log(airControl.temperature);
});

buttonLower.addEventListener("click", () => {
  airControl.tempLower();
  console.log(airControl.temperature);
});

buttonOnOff.addEventListener("click", () => {
  airControl.on_off();
  console.log(airControl.ison);
});
