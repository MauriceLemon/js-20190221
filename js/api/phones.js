const API_URL = 'https://msemionova.github.io/js-20190221/api';

export const getAll = async ({ query, order } = {}) => {
  try {
    const response = await fetch(`${API_URL}/phones.json`);
    let phones = await response.json();

    if (query) {
      phones = phones.filter(phone => phone.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (order === 'name') {
      phones = phones.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return (nameA < nameB) ? -1 : 1;
      });
    } else if (order === 'age') {
      phones = phones.sort((a, b) => a.age - b.age);
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
