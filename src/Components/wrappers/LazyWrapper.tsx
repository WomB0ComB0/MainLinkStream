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
