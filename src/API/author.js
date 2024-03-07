import axios from "axios";

export const getAuthors = async () => {
  const { data } = await axios.get(
    import.meta.env.VITE_APP_BASE_URL + "/api/v1/author"
  );
  return data;
};

export const deleteAuthor = async (id) => {
  const { data } = await axios.delete(
    `${import.meta.env.VITE_APP_BASE_URL}/api/v1/author/delete/${id}`
  );
  return data;
};

export const createAuthor = async (author) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/api/v1/author/create`,
    author
  );
  return data;
};

export const updateAuthorFunc = async (author) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_APP_BASE_URL}/api/v1/author/update/${author.id}`,
    author
  );
  return data;
};
