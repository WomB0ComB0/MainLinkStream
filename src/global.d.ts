declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
declare global {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
      }
    }
  }
type Id = string | number;
interface LoaderData {
    q: string;
}
type TypeProps = {
    type: "Development" | "Socials" | "Networking" | "Design" | "Learning" | undefined;
}
type Data = {
    id: Id;
    name: string;
    link: undefined | string;
    type: TypeProps["type"];
    sourceSVG?: React.ComponentType<React.SVGProps<SVGSVGElement>> | object;
    description: string;
    featured?: boolean;
};
const CardIconClass: string = "w-6 h-6 cursor-pointer" 
type SVGProps = {
  SVG: React.SVGAttributes<SVGElement>
  class: CardIconClass
};

type Erroring = {
  error: Error | null;
  handleError: (error: Error) => void;
  clearError: () => void;
};
