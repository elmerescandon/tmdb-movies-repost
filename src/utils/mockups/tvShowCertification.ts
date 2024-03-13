import ICertification from '../interfaces/ICertification';

const tvShowCertification: ICertification[] = [
  {
    certification: 'NR',
    meaning: 'No rating information.',
    order: 0,
  },
  {
    certification: 'TV-Y',
    meaning: 'This program is designed to be appropriate for all children.',
    order: 1,
  },
  {
    certification: 'TV-Y7',
    meaning: 'This program is designed for children age 7 and above.',
    order: 2,
  },
  {
    certification: 'TV-G',
    meaning: 'Most parents would find this program suitable for all ages.',
    order: 3,
  },
  {
    certification: 'TV-PG',
    meaning:
      'This program contains material that parents may find unsuitable for younger children.',
    order: 4,
  },
  {
    certification: 'TV-14',
    meaning:
      'This program contains some material that many parents would find unsuitable for children under 14 years of age.',
    order: 5,
  },
  {
    certification: 'TV-MA',
    meaning:
      'This program is specifically designed to be viewed by adults and therefore may be unsuitable for children under 17.',
    order: 6,
  },
];

export default tvShowCertification;
