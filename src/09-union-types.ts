(() => {
let userId: string | number;

userId = 1212;
userId = 'asas';

const greeting = (myText: string | number) => {

  if (typeof myText == 'string'){
    console.log(`string ${myText.toLocaleLowerCase()}`);
  }else {
     console.log(`number ${myText.toFixed(1)}`);
  }

}

greeting(12.12121212);
greeting('asas');

})();
