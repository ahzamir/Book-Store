const apiGetBooks = async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/F6xaVFIjunp7AOsoP9NW/books/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const apiAddBooks = async (title, author) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/F6xaVFIjunp7AOsoP9NW/books/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: title.replace(/\s+/g, ''),
      title,
      author,
      category: 'Under Constructuion',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

const apiRemoveBook = async (id) => {
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/F6xaVFIjunp7AOsoP9NW/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: { contenttype: 'application/json' },
  });
  return response;
};

export { apiAddBooks, apiRemoveBook, apiGetBooks };
