import { filtrarNumeroMasAlto } from "./helpers";

// ---------- funcion que depende de la función filtrar número mas alto -----

export const devolverElDobleMasAlto = (array) => {
  let numeroMasAlto = filtrarNumeroMasAlto(array);

  return numeroMasAlto * 2;
};
