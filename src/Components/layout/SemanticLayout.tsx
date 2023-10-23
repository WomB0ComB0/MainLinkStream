import { PropsWithChildren } from "react";
import { Nav, Footer } from "../semantics/index";
const SemanticLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default SemanticLayout