import ICombinedCredits from './ICombinedCredits';

interface IPerson {
  adult: boolean;
  alsoKnownAs: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdbId: string;
  knownForDepartment: string;
  name: string;
  placeOfBirth: string;
  popularity: number;
  profilePath: string;
  combinedCredits: ICombinedCredits;
}

export default IPerson;
