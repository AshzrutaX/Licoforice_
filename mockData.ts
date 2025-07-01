import { Anime, Episode } from '../types/anime';

export const mockAnime: Anime[] = [
  {
    id: '1',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    description: 'A young boy becomes a demon slayer to avenge his family and cure his sister.',
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    rating: 9.2,
    year: 2019,
    episodes: 44,
    status: 'Ongoing',
    genres: ['Action', 'Drama', 'Historical', 'Supernatural'],
    studio: 'Ufotable',
    duration: '24 min'
  },
  {
    id: '2',
    title: 'Your Name',
    description: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies.',
    poster: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    rating: 8.4,
    year: 2016,
    episodes: 1,
    status: 'Completed',
    genres: ['Romance', 'Drama', 'Supernatural'],
    studio: 'CoMix Wave Films',
    duration: '106 min'
  },
  {
    id: '3',
    title: 'Attack on Titan',
    description: 'Humanity fights for survival against giant humanoid Titans.',
    poster: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    rating: 9.0,
    year: 2013,
    episodes: 87,
    status: 'Completed',
    genres: ['Action', 'Drama', 'Horror'],
    studio: 'Studio Pierrot',
    duration: '24 min'
  },
  {
    id: '4',
    title: 'Spirited Away',
    description: 'A young girl enters a world ruled by gods and witches where humans are changed into beasts.',
    poster: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    rating: 9.3,
    year: 2001,
    episodes: 1,
    status: 'Completed',
    genres: ['Adventure', 'Family', 'Fantasy'],
    studio: 'Studio Ghibli',
    duration: '125 min'
  },
  {
    id: '5',
    title: 'One Piece',
    description: 'Monkey D. Luffy sets off on an adventure with his pirate crew in search of the greatest treasure.',
    poster: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    rating: 9.1,
    year: 1999,
    episodes: 1000,
    status: 'Ongoing',
    genres: ['Action', 'Adventure', 'Comedy'],
    studio: 'Toei Animation',
    duration: '24 min'
  },
  {
    id: '6',
    title: 'Naruto',
    description: 'A young ninja seeks recognition from his peers and dreams of becoming the Hokage.',
    poster: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    rating: 8.7,
    year: 2002,
    episodes: 720,
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Martial Arts'],
    studio: 'Studio Pierrot',
    duration: '23 min'
  }
];

export const mockEpisodes: Record<string, Episode[]> = {
  '1': [
    {
      id: 'e1-1',
      number: 1,
      title: 'Cruelty',
      duration: '24:12',
      thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      videoUrl: '#'
    },
    {
      id: 'e1-2',
      number: 2,
      title: 'Trainer Sakonji Urokodaki',
      duration: '24:05',
      thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      videoUrl: '#'
    }
  ]
};