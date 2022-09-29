var traverseDomAndCollectElements = function (
  matchFunc,
  startEl = document.body
) {
  var resultSet = [];

  /* if (typeof startEl === "undefined") {
    startEl = document.body;
  }*/

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if (matchFunc(startEl)) resultSet.push(startEl);

  //recorrer los hijos
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    // concatenando
    resultSet = [...resultSet, ...result];
  }
  //
  return resultSet;
};
/* 
body -- tra(matc, body) --- resultSet[] + tra(matc, div class = 'myClass')
|---->div class = 'myClass' --->
|    |--->h1
|    |--->h1 class = 'myClass'
|
|-----> div
*/

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
// selector = '.nombre' ||'#nombre' || div.nombredeclase || div

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  for (let index = 0; i < selector.length; i++) {
    if (selector[i] === ".") return "tag.class";
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  // '#myid' div id=myId div.id--myId
  var selectorType = selectorTypeMatcher(selector); // Tipos: id, class, tag.class, tag
  var matchFunction; //function (el) --> el.id === '#id' ---> true
  if (selectorType === "id") {
    matchFunction = function (el) {
      //'#id' ---> div = id = myId ---> div.id --> myId
      return "#" + el.id === selector; // concateno y devuelvo un booleano
    };
  } else if (selectorType === "class") {
    matchFunction = function (el) {
      for (let i = 0; i < el.classList.length; i++) {
        if ("." + el.classList[i] === selector)
          //concateno el elemento --> "."
          return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (el) {
      let [t, c] = selector.split("."); // [tag, class] --- t = tag   c = class
      // recursion

      return matchFunctionMaker(t)(el) && matchFunctionMaker("." + c)(el);
    };
  } else if (selectorType === "tag") {
    matchFunction = function (el) {
      return el.tagName === selector.toUpperCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
//$'.myClass') ---> document.querySelectorAll('.myClass')
