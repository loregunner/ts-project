(() => {
  let myDynamicVar: any;
  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDynamicVar = 12345;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);



})();
