(() => {
  type userID = string | number | boolean;
  let userId: string | number | boolean;

  const greeting = (userId: userID) => {

    if (typeof userId == 'string'){
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }

  }

  // Literal types
type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = "M";
  shirtSize = "L";
  shirtSize = "XL";
  shirtSize = "S";

})();
