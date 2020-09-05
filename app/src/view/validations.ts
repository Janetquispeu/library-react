// validation functions
export const required = value => (value || typeof value === 'string' ? null : 'Este campo es requerido');
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Debes ingresar letras y/o números' : null;
export const requiredArray = value => (value && value.length > 0 ? null : 'Este campo es requerido');
