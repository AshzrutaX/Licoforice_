export interface Anime {
  id: string;
  title: string;
  description: string;
  poster: string;
  banner: string;
  rating: number;
  year: number;
  episodes: number;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  genres: string[];
  studio: string;
  duration: string;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}