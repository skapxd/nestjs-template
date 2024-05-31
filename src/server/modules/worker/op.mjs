export const op = () => {
  console.log('inicio operación costosa');
  const t0 = performance.now();

  let total = 0;
  for (let i = 0; i < 5_000_000_000; i++) {
    total += i;
  }

  const tz = (performance.now() - t0) / 1_000;

  console.log(`Call to doSomething took ${tz.toFixed(2)} sec.`);

  return total;
};
