export async function fetchNews(category = "") {
    try {
    const url = category
      ? `/api/news?category=${category}` // pakai query, bukan path tambahan
        : `/api/news`;

    const response = await fetch(url);
    const data = await response.json();
    return data; // kalau backend sudah kirim array langsung
    // atau return data.articles || [] kalau backend kirim objek penuh
    } catch (error) {
    console.error("Gagal fetch berita:", error);
    return [];
    }
} 