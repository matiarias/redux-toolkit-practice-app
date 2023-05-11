// import storeConfigure from "redux-mock-store";
// import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";

import {
  arrayConSoloNumeros,
  cualEsMayor,
  filtrarNumeroMasAlto,
  primerLetraMayuscula,
  suma,
} from "../utils/helpers";

describe("tests de practica", () => {
  // ----------------- tests para la función suma ---------------------

  test("la función suma que declare en este test me debe devolver la suma correcta de sus dos parametros", () => {
    let result = suma(5, 5);

    expect(typeof result).not.toBe("string");

    expect(result).toBe(10);
  });

  test("si la función suma recibe algun dato que no sea numerico como parametro, devolver un mensaje de datos no validos", () => {
    let result = suma("5", 5);

    expect(result).toBe("datos no validos");
  });

  // ----------------- tests para la función filtrar número mas alto ---------------------

  test("devuelve el número mas alto del array que tiene como parametro la función filtarNumero", () => {
    let response = filtrarNumeroMasAlto([2, 4, 8, 24]);

    expect(response).toBe(24);
  });

  //   ----- tests para chequear que el array como parametro solo tenga números -----

  test("checkear si el array que viene como parametro en la función arrayConSoloNumeros solo tiene números", () => {
    let response = arrayConSoloNumeros([24, 27, 23]);

    expect(response).toBe(true);
  });

  //   ------------ tests para la función primerLetraMayuscula -----------

  test("checkear si la función solo puede recibir un string como parametro", () => {
    let response = primerLetraMayuscula("hola matias");

    expect(typeof response).toBe("string");
  });

  test("si mando como parametro algun dato que no sea string a la función, me debe devolver un mensaje de datos no validos", () => {
    let response = primerLetraMayuscula(7);

    expect(response).toBe("datos no validos");
  });

  test("checkear que cada palabra del string debe empezar con mayuscula", () => {
    let response = primerLetraMayuscula("hola matias carlos arias");

    expect(response).toBe("Hola Matias Carlos Arias");
  });

  // --------------- tests para la función cualEsMayor --------------

  test("checkear que la función solo recibe números como parametros ", () => {
    let response = cualEsMayor(24, 74);

    expect(typeof response).toBe("number");
  });

  test("checkear que la función si no recibe como parametro números, debe devolver un mensaje de datos no validos", () => {
    let response = cualEsMayor(["hola", "matias"]);

    expect(response).toBe("datos no validos");
  });

  test("checkear que la funcion devuelva el número mas alto entre 1 y 2", () => {
    let response = cualEsMayor(1, 2);

    expect(response).toBe(2);
  });
});
