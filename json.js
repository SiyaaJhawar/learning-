
(async () => {
  const res = await fetch('https://www.boredapi.com/api/activity', {
    headers: { Accept: 'application/json' },
  });
  const json = await res.json();
  Object.entries(json).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
})();
