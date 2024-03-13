interface IAccount {
  avatar: {
    gravatar: {
      hash: string;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  includeAdult: boolean;
  username: string;
}
export default IAccount;
