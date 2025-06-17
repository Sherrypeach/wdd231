export async function fetchItems() {
    try {
      const res = await fetch('./scripts/data.json');
      if (!res.ok) throw new Error(res.statusText);
      return await res.json();
    } catch (err) {
      console.error('Fetch error:', err);
      return [];
    }
  }
  