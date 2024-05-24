const obj1 = {
  cpu: false,
  processorOn: function () {
    this.cpu = true;
    console.log("процессор запущен");
  },
  processorOff: function () {
    this.cpu = false;
    console.log("процессор выключен");
  },
};
const obj2 = {
  ram: false,
  ramOn: function () {
    this.ram = true;
    console.log("ОЗУ запущен");
  },
  ramOff: function () {
    this.ram = false;
    console.log("ОЗУ выключен");
  },
};
const obj3 = {
  hdd: false,
  hddOn: function () {
    this.hdd = true;
    console.log("hdd запущен");
  },
  hddOff: function () {
    this.hdd = false;
    console.log("hdd выключен");
  },
};
const pcStart = {
  pcStart1: function () {
    if (this.cpu === true && this.ram === true && this.hdd === true)
      console.log("компьютер запущен");
    else console.log("какой-то элемент не запущен");
  },
};

// const pc = {
//   text: "это компьютер",
//   // __proto__:obj1,
//   // __proto__:obj2,
//   // __proto__:obj3,
//   cpu: obj1,
//   ram: obj2,
//   hdd: obj3,
//   start: pcStart,
// };
// console.log(pc);
// const pc = {
//   text: "это компьютер",
//   cpu: false,
//   ram: false,
//   hdd: false,
//   processorOn: function () {
//     this.cpu = true;
//     console.log("процессор запущен");
//   },
//   ramOn: function () {
//     this.ram = true;
//     console.log("ОЗУ запущен");
//   },

//   hddOn: function () {
//     this.hdd = true;
//     console.log("hdd запущен");
//   },
//   pcStart1: function () {
//     if (this.hdd === true && this.ram === true && this.cpu === true)
//       console.log("компьютер запущен");
//     else console.log("какой-то элемент не запущен");
//   },
// };

const PC2 = {
  ...obj1,
  ...obj2,
  ...obj3,
  ...pcStart,
};
console.log(PC2);
PC2.processorOn();
PC2.ramOn();
PC2.hddOn();
PC2.pcStart1();
console.log(PC2);
// console.log(pc);
// pc.cpu.processorOn();
// pc.ram.ramOn();
// pc.hdd.hddOn();
// pc.start.pcStart1();
