import IPersonCast from './IPersonCast';
import IPersonCrew from './IPersonCrew';

interface ICombinedCredits {
  cast: IPersonCast[];
  crew: IPersonCrew[];
}

export default ICombinedCredits;
