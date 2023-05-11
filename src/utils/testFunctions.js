export const suma = (num1, num2) => {
  if (typeof (num1 + num2) === "string") {
    return "datos no validos";
  }

  return num1 + num2;
};

// ---------------------------------------------

export const filtrarNumero = (arrayNumeros) => {
  return Math.max(...arrayNumeros);
};

export const arrayConSoloNumeros = (array) => {
  return array.every((element) => typeof element === "number");
};

// -----------------------------------------------

export const primerLetraMayuscula = (string) => {
  if (typeof string !== "string") {
    return "datos no validos";
  }

  let newArr = string.split(" ");

  newArr = newArr.map((element) => {
    element = element[0].toUpperCase() + element.slice(1);
    return element;
  });

  return newArr.join(" ");
};

// --------------------------------------------

export const cualEsMayor = (numero1, numero2) => {
  if (typeof numero1 !== "number" && typeof numero2 !== "number") {
    return "datos no validos";
  }

  return Math.max(numero1, numero2);
};
