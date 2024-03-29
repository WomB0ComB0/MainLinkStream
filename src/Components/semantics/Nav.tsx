import React, { memo } from 'react';
import { MotionNav } from '../constants/Motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Nav({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof MotionNav extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionNav {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionNav>
      ) : (
        <nav {...attributes} className={cn('', className)} style={style}>
          {children}
        </nav>
      )}
    </>
  );
}
export default memo(Nav);
