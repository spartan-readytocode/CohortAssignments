function delay(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}
