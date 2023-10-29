import { cn } from '../../lib/utils';

export default function BlackHole({
  height,
  width,
  className,
  style,
}: { height?: number | string; width?: number | string } & StylingProps) {
  return (
    <img
      src="/assets/images/blackhole.png"
      className={cn('object-cover h-full ', className)}
      style={style}
      height={height}
      width={width}
      loading="eager"
      alt={`Black hole image`}
    />
  );
}
