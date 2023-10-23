declare module '*.mp4' {
  import React = require('react');
  export const ReactComponent: React.FC<
    React.VideoHTMLAttributes<HTMLVideoElement>
  >;
  const src: string;
  export default src;
}

declare module '*.png' {
  import React = require('react');
  export const ReactComponent: React.FC<
    React.ImgHTMLAttributes<HTMLImageElement>
  >;
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
