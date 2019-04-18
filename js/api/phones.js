const API_URL = 'https://mgrinko.github.io/js-20190221/api';

export const getAll = () => {
    return fetch(API_URL + '/phones.json')
        .then(response => response.json());
};

export const getById = (phoneId) => {
    return fetch(API_URL + '/phones/' + phoneId + '.json')
        .then(response => response.json());
};