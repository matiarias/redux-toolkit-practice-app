import { filtrarNumeroMasAlto } from "../utils/helpers";
import { devolverElDobleMasAlto } from "../utils/mockFunctions";

jest.mock("../utils/helpers.js");

// ------------------------- tests con funciones mockeadas ---------------------

describe("tests con funciones mockeadas", () => {
  // -------- test para la función devolver el doble mas alto del array ---------

  test("devuelve el doble del numero mas alto del array", () => {
    filtrarNumeroMasAlto.mockReturnValueOnce(10);

    let response = devolverElDobleMasAlto([2, 4, 10]);

    expect(response).toBe(20);
  });

  test("la función no puede devolver otro dato que no sea un número", () => {
    let response = devolverElDobleMasAlto("holaaaaa");

    expect(typeof response).toBe("number");
  });
});
