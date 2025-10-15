const ACCESS_KEY = process.env.VUE_APP_UNSPLASH_ACCESS_KEY || '';

export async function fetchUnsplashImages(query: string, perPage = 1) {
  if (!ACCESS_KEY) {
    console.warn('Unsplash API key is missing.');
    return [];
  }

  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&per_page=${perPage}&client_id=${ACCESS_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
		console.log(data);
		

    if (!data.results) return [];

    return data.results.map((p: any) => ({
      id: p.id,
      title: p.alt_description || p.description || 'Untitled',
      url: p.urls.regular,
      likes: 0,
      dislikes: 0,
      comments: []
    }));
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
}
