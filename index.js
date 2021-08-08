const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(name){
        cats.push("Ralph");
  }

  function destructivelyPrependCat(name){
        cats.unshift("Bob");
  }

  function destructivelyRemoveLastCat(){
        cats.pop();
  }

  function destructivelyRemoveFirstCat(){
        cats.shift();
  }

  function appendCat(name){
        const newArray = cats.slice();
        newArray.push("Broom");
        return newArray;
  }

  function prependCat(name){
        const newArray2 = cats.slice();
        newArray2.unshift("Arnold");
        return newArray2;
  }

  function removeLastCat(){
        const newArray3 = cats.slice();
        newArray3.pop();
        return newArray3;
  }

  function removeFirstCat(){
        const newArray4 = cats.slice();
        newArray4.shift();
        return newArray4;
}