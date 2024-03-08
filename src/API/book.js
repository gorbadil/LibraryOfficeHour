import axios from "axios";

export const getBooks = async () => {
  const { data } = await axios.get(
    import.meta.env.VITE_APP_BASE_URL + "/api/v1/book"
  );
  return data;
};

export const deleteBook = async (id) => {
  const { data } = await axios.delete(
    `${import.meta.env.VITE_APP_BASE_URL}/api/v1/book/delete/${id}`
  );
  return data;
};

export const createBook = async (book) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/api/v1/book/create`,
    book
  );
  return data;
};

export const updateBookFunc = async (book) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_APP_BASE_URL}/api/v1/book/update/${book.id}`,
    book
  );
  return data;
};
