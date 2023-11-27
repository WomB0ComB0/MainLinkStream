type StylingProps = {
  style?: React.CSSProperties;
  className?: string;
};

type CardIconClass = 'w-6 h-6 cursor-pointer';
type SVGTypes = {
  SVG: React.SVGAttributes<SVGElement>;
  className: CardIconClass;
};
interface SVGProps extends StylingProps {
  SVG?: SVGTypes['SVG'];
  className?: SVGTypes['className'];
}

type Id = string | number;

interface LoaderData {
  q: string;
}

type TypeProps = {
  type: 'Development' | 'Socials' | 'Networking' | 'Design' | 'Learning' | undefined;
};

type Data = {
  id: Id;
  name: string;
  link: undefined | string;
  type: TypeProps['type'];
  sourceSVG?: React.ComponentType<React.SVGProps<SVGSVGElement>> | object;
  description: string;
  featured?: boolean;
};

type Erroring = {
  error: Error | null;
  handleError: (error: Error) => void;
  clearError: () => void;
};

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

interface Links<T = string> extends Record<string, T> {}

type IndexProps = string | number | null | undefined;

interface SearchProps {
  searchParams: { [key: string]: string | undefined };
}

interface HeaderProps {
  query: string;
  type: string;
}

type UrlQueryParams = {
  params: URLSearchParams;
  key?: string;
  value?: string;
  keysToRemove?: string[];
};
