import { PropsWithChildren } from 'react';
import { Footer, NavBar } from '../main/index';
import { StarsCanvas } from '../visuals/index';

const SemanticLayout = ({ children }: PropsWithChildren) => (
  <>
    <StarsCanvas />
    <NavBar />
    {children}
    <Footer />
  </>
);

export default SemanticLayout;
