import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirtorySection = createSelector(
    [selectDirectory],
    directory => directory.sections
);