import { createSelector } from 'reselect';

export const getModels = ({ models }) => models;

export const getModelById = modelId =>
  createSelector(getModels, models => models.find(({ id }) => id === modelId));
