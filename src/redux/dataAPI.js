const apiAddBooks = async (title, author) => {
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/F6xaVFIjunp7AOsoP9NW/books/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: title.replace(''),
      title,
      author,
      category: 'Non'
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};

// const apiGetBooks = async () => {
//   const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`, {
//     method: 'GET',
//     headers: { contenttype: 'application/json' },
//   });
//   const data = await response.json();
//   return data;
// };

// const apiRemoveBook = async (id) => {
//   const response = await fetch(`${API_ID + id}`, {
//     method: 'DELETE',
//     body: {
//       item_id: id,
//     },
//     headers: { contenttype: 'application/json' },
//   });
//   const data = await response.json();
//   return data;
// };

export { apiAddBooks };
