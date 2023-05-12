import {
  filtrarNumeroMasAlto,
  primerLetraMayuscula,
  suma,
  cualEsMayor,
} from "./helpers";

// ---------- función que depende de la función filtrar número mas alto -----

export const devolverElDobleMasAlto = (array) => {
  if (Array.isArray(array)) {
    let numeroDobleMasAlto = filtrarNumeroMasAlto(array);

    return numeroDobleMasAlto * 2;
  }

  return "error, el parametro no es un arreglo de números";
};

// ------- función que depende de la función primerLetraMayuscula ----------

export const convertirVerificarMayusculas = (texto) => {
  if (typeof texto === "string") {
    let firstLetterUppercase = primerLetraMayuscula(texto);

    const newString = firstLetterUppercase.split(" ");

    const result = newString.every((word) => word[0] === word[0].toUpperCase());

    return result
      ? "perfecto, todas las palabras empiezan con mayusculas"
      : "error, alguna de las palabras no empiezan con una mayuscula";
  }

  return "error, el parametro no es de tipo string";
};

// ------- función que depende de las funciones suma - cualEsMayor ----------

export const sumarleAlNumeroMasAlto = (num1, num2, num3) => {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    typeof num3 === "number"
  ) {
    const maxValue = cualEsMayor(num1, num2);

    const result = suma(maxValue, num3);

    return result;
  }

  return "error, los parametros deben ser de tipo number";
};
