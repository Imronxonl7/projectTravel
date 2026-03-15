
const getData = async ({ url }: { url: string }) => {
  try {
    const res = await fetch(`${"https://x8ki-letl-twmt.n7.xano.io/api:qNrTfAaz"}/${url}`, {
      // Явно используем только revalidate без дополнительных параметров cache
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      // Это поможет увидеть в логах, если API вернул 404 или 500
      console.error(`Fetch error for ${url}: ${res.status} ${res.statusText}`);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error(`Network error for ${url}:`, error);
    return []; // Возвращаем пустой массив, чтобы билд не падал
  }
};

export default getData;