import { Istudent } from 'src/app/Istudent';

export const studentsData = async (): Promise<Istudent[]> => {
  return [
    { name: 'Akash', mark: 74 },
    { name: 'Saurabh', mark: 81 },
    { name: 'Abcd', mark: 90 },
    { name: 'Pqrs', mark: 72 },
    { name: 'Pradnya', mark: 60 },
    { name: 'viraj', mark: 40 },
  ];
};
