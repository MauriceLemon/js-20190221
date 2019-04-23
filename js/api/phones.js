const API_URL = 'https://mauricelemon.github.io/js-20190221/api';

export const getAll = async ({ query, order } = {}) => {
  try {
    const response = await fetch(`${API_URL}/phones.json`);
    let phones = await response.json();

    if (query) {
      phones = phones;
    }

    if (order) {
      phones = phones;
    }

    return phones;
  } catch (e) {
    return [];
  }
};

export const getById = (phoneId) => (
  fetch(`${API_URL}/phones/${phoneId}.json`)
    .then(response => response.json())
    .catch(() => 0)
);
