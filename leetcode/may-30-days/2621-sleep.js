async function sleep(millis) {
    return new Promise((resolve, reject) => {
    let name = "Nooka";
    setTimeout(() => {
      if (!name) return reject(new Error('no name passed in!'));
      return resolve(name);
    }, millis);
  });
}