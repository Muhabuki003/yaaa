// Movie data for babytime
const MOVIE_DATA = {
  trending: [
    { id: 1, title: "The Last Frontier", year: 2025, rating: 8.5, duration: "2h 12m", quality: "HD", type: "Movie", genres: ["Action", "Adventure", "Drama"], emoji: "🏔️", color: "#1a0533", desc: "In a world ravaged by climate collapse, one family must journey across the frozen wasteland to find the last habitable zone on Earth." },
    { id: 2, title: "Neon Dreams", year: 2025, rating: 7.9, duration: "1h 48m", quality: "4K", type: "Movie", genres: ["Sci-Fi", "Thriller"], emoji: "🌃", color: "#0d0221" },
    { id: 3, title: "The Silent Hour", year: 2024, rating: 8.2, duration: "2h 05m", quality: "HD", type: "Movie", genres: ["Horror", "Mystery"], emoji: "🕯️", color: "#1a0505" },
    { id: 4, title: "Velocity", year: 2025, rating: 7.5, duration: "1h 55m", quality: "4K", type: "Movie", genres: ["Action", "Thriller"], emoji: "🏎️", color: "#0d1a2d" },
    { id: 5, title: "Wild Hearts", year: 2024, rating: 8.0, duration: "2h 18m", quality: "HD", type: "Movie", genres: ["Romance", "Drama"], emoji: "💕", color: "#1a0d1a" },
    { id: 6, title: "Shadow Protocol", year: 2025, rating: 8.8, duration: "2h 22m", quality: "4K", type: "Movie", genres: ["Action", "Spy", "Thriller"], emoji: "🕴️", color: "#050d1a" },
    { id: 7, title: "Midnight Garden", year: 2024, rating: 7.6, duration: "1h 42m", quality: "HD", type: "Movie", genres: ["Fantasy", "Animation"], emoji: "🌙", color: "#0a0a1a" },
    { id: 8, title: "Crimson Tide Rising", year: 2025, rating: 8.3, duration: "2h 08m", quality: "HD", type: "Movie", genres: ["War", "Drama"], emoji: "⚓", color: "#1a0d05" },
  ],
  movies: [
    { id: 10, title: "Starfall", year: 2025, rating: 8.1, duration: "2h 15m", quality: "4K", type: "Movie", genres: ["Sci-Fi", "Adventure"], emoji: "⭐", color: "#050d1a" },
    { id: 11, title: "The Lost Kingdom", year: 2024, rating: 7.8, duration: "2h 20m", quality: "HD", type: "Movie", genres: ["Fantasy", "Adventure"], emoji: "🏰", color: "#0d1a0d" },
    { id: 12, title: "Night Watch", year: 2025, rating: 7.4, duration: "1h 50m", quality: "HD", type: "Movie", genres: ["Crime", "Thriller"], emoji: "🔦", color: "#050505" },
    { id: 13, title: "Echo Valley", year: 2024, rating: 8.0, duration: "1h 58m", quality: "HD", type: "Movie", genres: ["Mystery", "Drama"], emoji: "🏞️", color: "#0a1a0a" },
    { id: 14, title: "Firestorm", year: 2025, rating: 7.2, duration: "2h 05m", quality: "4K", type: "Movie", genres: ["Action", "Disaster"], emoji: "🔥", color: "#1a0a00" },
    { id: 15, title: "Dancing in the Rain", year: 2024, rating: 8.4, duration: "1h 45m", quality: "HD", type: "Movie", genres: ["Musical", "Romance"], emoji: "💃", color: "#0d0d1a" },
    { id: 16, title: "The Watcher", year: 2025, rating: 7.9, duration: "1h 52m", quality: "HD", type: "Movie", genres: ["Horror", "Thriller"], emoji: "👁️", color: "#050505" },
    { id: 17, title: "Golden Hour", year: 2024, rating: 8.6, duration: "2h 10m", quality: "4K", type: "Movie", genres: ["Drama", "Biography"], emoji: "🌅", color: "#1a0d05" },
    { id: 18, title: "Beyond the Veil", year: 2025, rating: 7.7, duration: "2h 00m", quality: "HD", type: "Movie", genres: ["Supernatural", "Horror"], emoji: "👻", color: "#0a0515" },
    { id: 19, title: "Circuit Break", year: 2024, rating: 7.3, duration: "1h 38m", quality: "HD", type: "Movie", genres: ["Action", "Tech"], emoji: "⚡", color: "#050d1a" },
    { id: 20, title: "The Chef's Table", year: 2025, rating: 8.0, duration: "1h 55m", quality: "4K", type: "Movie", genres: ["Comedy", "Drama"], emoji: "🍳", color: "#0d0d05" },
    { id: 21, title: "Frozen Depths", year: 2024, rating: 8.1, duration: "2h 15m", quality: "HD", type: "Movie", genres: ["Adventure", "Survival"], emoji: "❄️", color: "#050d1a" },
  ],
  tvShows: [
    { id: 30, title: "Crystal Empire", year: 2025, rating: 8.9, duration: "3 Seasons", quality: "4K", type: "TV", genres: ["Fantasy", "Drama"], emoji: "💎", color: "#0d051a" },
    { id: 31, title: "Dark Horizons", year: 2024, rating: 8.5, duration: "2 Seasons", quality: "HD", type: "TV", genres: ["Sci-Fi", "Thriller"], emoji: "🌌", color: "#05050d" },
    { id: 32, title: "Brooklyn Blue", year: 2025, rating: 7.8, duration: "1 Season", quality: "HD", type: "TV", genres: ["Crime", "Drama"], emoji: "🚔", color: "#0a0d1a" },
    { id: 33, title: "Laugh Factory", year: 2024, rating: 7.6, duration: "4 Seasons", quality: "HD", type: "TV", genres: ["Comedy"], emoji: "😂", color: "#0d0d05" },
    { id: 34, title: "The Summit", year: 2025, rating: 8.7, duration: "2 Seasons", quality: "4K", type: "TV", genres: ["Drama", "Adventure"], emoji: "⛰️", color: "#0a1a05" },
    { id: 35, title: "Ghost Stories", year: 2024, rating: 8.2, duration: "3 Seasons", quality: "HD", type: "TV", genres: ["Horror", "Anthology"], emoji: "👻", color: "#05050d" },
    { id: 36, title: "Speedway", year: 2025, rating: 7.4, duration: "1 Season", quality: "HD", type: "TV", genres: ["Sports", "Drama"], emoji: "🏁", color: "#0d0d0d" },
    { id: 37, title: "Love in Paris", year: 2024, rating: 8.0, duration: "2 Seasons", quality: "4K", type: "TV", genres: ["Romance"], emoji: "❤️", color: "#1a050d" },
  ],
  continueWatching: [
    { id: 40, title: "Starfall", progress: 45, year: 2025, rating: 8.1, type: "Movie", emoji: "⭐", color: "#050d1a" },
    { id: 41, title: "Crystal Empire", progress: 72, year: 2025, rating: 8.9, type: "TV S1:E8", emoji: "💎", color: "#0d051a" },
    { id: 42, title: "Dark Horizons", progress: 30, year: 2024, rating: 8.5, type: "TV S2:E4", emoji: "🌌", color: "#05050d" },
    { id: 43, title: "Echo Valley", progress: 88, year: 2024, rating: 8.0, type: "Movie", emoji: "🏞️", color: "#0a1a0a" },
  ]
};
