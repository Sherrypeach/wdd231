export async function fetchItems() {
  try {
    const res = await fetch('./scripts/data.json');
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Fetch error:', err);
    return [];
  }
}