
let myyObject = {
    name2: "myObject",
    sayName: () => {
        console.log(this);
    }
};

name2 = "global";
myyObject.sayName();
let myObject = {
  name: 'myObject',
  outerFunction : function () {
      console.log(this.name);

      let innerFunction1 = () => {
          console.log(this.name);

          let innerFunction2 = () => {
              console.log(this);
          };

          innerFunction2();
      };

      innerFunction1();
  }
};

myObject.outerFunction();


