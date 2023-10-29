import React, { FC } from 'react';
import { Section } from '../../semantics';

const FallBack: FC = () => (
  <React.Fragment>
    <Section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">You are offline</h1>
      <p className="text-xl text-gray-600">Please check your internet connection</p>
    </Section>
  </React.Fragment>
);
export default FallBack;
