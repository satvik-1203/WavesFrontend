export const DEFAULT_API = () => {
  return "http://localhost:3001/api/";
};

export const genres = () => {
  return `${DEFAULT_API()}genres`;
};

export const genreId = (id) => {
  return `${DEFAULT_API()}genres/${id}`;
};

export const customerApi = () => {
  return `${DEFAULT_API()}customers`;
};

export const loginApi = () => {
  return `${DEFAULT_API()}login`;
};
