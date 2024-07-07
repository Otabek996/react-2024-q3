import axios from 'axios';

const api = {
  fetchData: async () => {
    const URL = 'https://swapi.dev/api/';

    return await axios
      .get(URL)
      .then((res) => res)
      .catch((err) => err);
  },
};

export default api;
