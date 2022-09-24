export interface Episode {
  created_at: Date;
  _id: string;
  name: string;
  synopsis: string;
  release: Date;
  thumbnail: string;
  video_url: string;
  duration: number;
  order: number;
  serie_id: SerieID;
}

export interface SerieID {
  _id: string;
  name: string;
}
