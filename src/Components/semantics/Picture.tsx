import { FC, memo } from 'react'
import { SemanticProps } from '../../types/semantic-props'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
function Picture({ framer, framerProps, attributes, key, style, className, children }: SemanticProps) {
  type SectionMotionProps = typeof motion.picture extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <motion.picture
          {...(framerProps as SectionMotionProps)}
          className={cn('', className)}
          style={style}
          key={key}
        >
          {children}
        </motion.picture>
      ) : (
        <picture {...attributes} className={cn('', className)} style={style}>
          {children}
        </picture>
      )}
    </>
  )
}

export default memo(Picture)