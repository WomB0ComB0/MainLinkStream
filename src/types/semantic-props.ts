import React, { PropsWithChildren } from 'react';
import { HTMLMotionProps } from 'framer-motion';

type Semantics = 'header' | 'main' | 'footer' | 'section' | 'article' | 'aside' | 'nav' | 'picture' | 'figure';
export interface SemanticProps extends PropsWithChildren {
  framer?: boolean;
  framerProps?: HTMLMotionProps<Semantics>;
  attributes?: React.HTMLAttributes<HTMLElement>;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
}
