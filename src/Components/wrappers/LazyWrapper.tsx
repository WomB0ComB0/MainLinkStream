/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { PropsWithChildren } from 'react';

const LazyImageWrapper: React.FC<PropsWithChildren<any>> = (props) => {
  const { children } = props;
  const cloneChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === 'img') {
      return React.cloneElement(
        child as React.DetailedReactHTMLElement<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
        { loading: 'lazy' },
      );
    }
    return child;
  });

  return <>{cloneChildren}</>;
};

export default LazyImageWrapper;
