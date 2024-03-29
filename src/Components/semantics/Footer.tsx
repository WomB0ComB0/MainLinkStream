import React, { memo } from 'react';
import { MotionFooter } from '../constants/Motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Footer({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof MotionFooter extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionFooter {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionFooter>
      ) : (
        <footer {...attributes} className={cn('', className)} style={style}>
          {children}
        </footer>
      )}
    </>
  );
}
export default memo(Footer);
