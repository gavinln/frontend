export async function roll() {
  // Fetch a random number from 1 to 6
  // (with a delay, so that we can see it)
  return new Promise((fulfil, reject) => {
    setTimeout(() => {
      // simulate a flaky network
      if (Math.random() > 0.1) fulfil(Math.floor(Math.random() * 6) + 1);
      else reject(new Error('Request failed'));
    }, 1000);
  });
}
