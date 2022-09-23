const customFetch = (data, stallTime = 0, id) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        if (data) {
          if (id) {
            const product = data.find((plant) => plant.id === id);
            resolve(product);
          } else {
            resolve(data);
          }
        }
      } catch (err) {
        reject(err);
      }
    }, stallTime),
  );
};

export default customFetch;
