import React, { memo } from 'react';
import { MotionAside } from '../constants/Motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Aside({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof MotionAside extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionAside {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionAside>
      ) : (
        <aside {...attributes} className={cn('', className)} style={style}>
          {children}
        </aside>
      )}
    </>
  );
}
export default memo(Aside);
