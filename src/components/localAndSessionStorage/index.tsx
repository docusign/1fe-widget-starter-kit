/** @jsxImportSource @emotion/react */

import React from 'react';

import { utilSectionStyles } from '../routes/styles/utilsDemo.styles';

import { LocalAndSessionStorage1FE } from './localAndSessionStorage1FE';

export const LocalAndSessionStorage: React.FC = () => {
  return (
    <div css={utilSectionStyles} data-qa='utils.experiments.container'>
      <LocalAndSessionStorage1FE />
    </div>
  );
};
