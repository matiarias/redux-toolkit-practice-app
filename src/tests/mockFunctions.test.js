import {
  filtrarNumeroMasAlto,
  primerLetraMayuscula,
  suma,
  cualEsMayor,
} from "../utils/helpers";

import {
  devolverElDobleMasAlto,
  convertirVerificarMayusculas,
  sumarleAlNumeroMasAlto,
} from "../utils/mockFunctions";

jest.mock("../utils/helpers.js");

// ------------------------- tests con funciones mockeadas ---------------------

describe("tests para la función devolver el doble mas alto del array ", () => {
  test("devuelve el doble del numero mas alto del array", () => {
    filtrarNumeroMasAlto.mockReturnValueOnce(10);

    let response = devolverElDobleMasAlto([2, 4, 10]);

    expect(response).toBe(20);
  });

  test("la función no puede devolver otro dato que no sea un número", () => {
    filtrarNumeroMasAlto.mockReturnValueOnce(24);

    let response = devolverElDobleMasAlto([10, 7, 24]);

    expect(typeof response).toBe("number");
  });

  test("la función no puede recibir otro dato que no sea un array y devuelve un mensaje de eror si le pasamos como parametro un string o otro de tipo de dato", () => {
    filtrarNumeroMasAlto.mockReturnValueOnce(
      "error, el parametro no es un arreglo de números"
    );

    let response = devolverElDobleMasAlto("hola matias");

    expect(response).toBe("error, el parametro no es un arreglo de números");
  });
});

describe("tests para la función convertirVerificarMayusculas", () => {
  test("devuelve un mensaje positivo si es que todas las palabras del texto empiezan con mayusculas", () => {
    primerLetraMayuscula.mockReturnValueOnce("Hola Matias Carlos");

    let response = convertirVerificarMayusculas("Hola Matias Carlos");

    expect(response).toBe(
      "perfecto, todas las palabras empiezan con mayusculas"
    );
  });

  test("devuelve un mensaje de error porque no todas las palabras son de tipo string", () => {
    primerLetraMayuscula.mockReturnValueOnce(27);

    let response = convertirVerificarMayusculas(24);

    expect(response).toBe("error, el parametro no es de tipo string");
  });

  test("devuelve un mensaje de error si es que alguna de las palabras del texto no empiezan con mayusculas", () => {
    primerLetraMayuscula.mockReturnValueOnce("hola Matias carlos");

    let response = convertirVerificarMayusculas("hola Matias carlos");

    expect(response).toBe(
      "error, alguna de las palabras no empiezan con una mayuscula"
    );
  });
});

describe("tests para la función sumarleAlNumeroMasAlto", () => {
  test("test que devuelve la suma del mayor de los dos primeros números + el tercer número", () => {
    cualEsMayor.mockReturnValueOnce(10);

    let response = sumarleAlNumeroMasAlto(5, 10, 14);

    expect(response).toBe(24);
  });

  test("todos los parametros deben ser de tipo number, si no devuelve un mensaje de error", () => {
    cualEsMayor.mockReturnValueOnce(24);

    let response = sumarleAlNumeroMasAlto(
      "viajar a paris y amsterdam",
      27,
      true
    );

    expect(response).toBe("error, los parametros deben ser de tipo number");
  });
});
