const {
  isPrematureTemplateContentError,
} = require("@11ty/eleventy/src/EleventyErrorUtil");
const { INCREMENTO, DECREMENTO } = require("../action-types");

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá.
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const incremento = () => {
  // completa la funcion
  return {
    type: "INCREMENTO",
  };
};

const decremento = () => {
  return {
    type: "DECREMENTO",
  };
};

module.exports = {
  incremento,
  decremento,
};
