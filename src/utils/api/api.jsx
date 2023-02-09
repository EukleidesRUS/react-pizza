export const api = {
  url: "https://63e5370d4474903105fbffc0.mockapi.io/",
  headers: {
    "Content-type": "application/json",
  },
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

//Проверка статуса запроса
export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

//Запрос ингредиентов
export const getPizzas = async () => {
  return await request(`${api.url}/items`, {
    method: "GET",
    headers: api.headers,
  });
};
