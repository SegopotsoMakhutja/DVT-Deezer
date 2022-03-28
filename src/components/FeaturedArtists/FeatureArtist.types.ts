export interface IFeaturedArtist {
    accentColor: string;
    backgroundImage: string;
    artistName: string;
    id: string;
}

export interface IFeaturedArtistsProps {
    featureArtists: Array<IFeaturedArtist>;
}
