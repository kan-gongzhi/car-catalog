import { createSelector } from 'reselect';

export const getMakes = ({ makes }) => makes;

export const getMakeById = (makeId = '') =>
  createSelector(getMakes, makes => makes.find(({ id }) => id === makeId));
