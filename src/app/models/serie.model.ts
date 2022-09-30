import { Episode } from './episode.model';

export interface Serie {
  created_at: Date;
  genders: string[];
  titles: string[];
  _id: string;
  name: string;
  synopsis: string;
  thumbnail: string;
  release: Date;
  season: string;
  season_year: number;
  banner_image: string;
  type: string;
}

export interface QueuedSerie {
  created_at: Date;
  user_id: string;
  _id: string;
  serie_propietary: Serie;
  current_episode: Omit<Episode, 'serie_id'> & { episode_id: string };
}
