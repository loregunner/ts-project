(() => {
  // let myNumber: number;
  // let myString: string;

  let myNull: null =  null;
  let myUndefined: undefined = undefined;

  let myNumber : number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString: 'hola';

  function hi(name: string | null) {
    let hello = 'hola ';
    if(name) {
    hello += name
    }else{
    hello += 'nobody'
  }
  console.log(hello);

  }

  function hi2(name: string | null) {
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);

  }
  hi2('Connor')
  hi2(null);
  hi('Lorena');
  hi(null)
})();
