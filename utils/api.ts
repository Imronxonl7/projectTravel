const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getData = async ({ url }: { url: string }) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}`, {
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