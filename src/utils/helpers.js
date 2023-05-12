// -------------------- función suma ----------------------

export const suma = (num1, num2) => {
  if (typeof (num1 + num2) !== "number") {
    return "datos no validos";
  }

  return num1 + num2;
};

// ------------------------- función filtrar numero mas alto ------------------

export const filtrarNumeroMasAlto = (arrayNumeros) => {
  if (arrayNumeros.every((element) => typeof element === "number")) {
    return Math.max(...arrayNumeros);
  }

  return "error, el parametro no es un arreglo de números";
};

// ------------------ función primer letra mayuscula ------------------

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

// ----------------- función cual es el numero mas alto -------------

export const cualEsMayor = (numero1, numero2) => {
  if (typeof numero1 !== "number" && typeof numero2 !== "number") {
    return "datos no validos";
  }

  return Math.max(numero1, numero2);
};
