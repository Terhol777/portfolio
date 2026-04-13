export default function sitemap() {
  const baseUrl = 'https://Terhol777.github.io';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}