import { FallBack as Offline } from './browser/dom-states/index';
import ScreenLoader from './browser/dom-states/ScreenLoader';
import { Main } from './semantics/index';
import { SemanticLayout } from './layout/index';
import { useOnlineStatus, useLoading } from '../hooks/index';

const App = (): JSX.Element => {
  const isOnline = useOnlineStatus();
  const isLoading = useLoading();
  const AppContainer = () => (
    <SemanticLayout>
      {/* <Header /> */}
    </SemanticLayout>
  );
  return (
    <Main className="w-full h-screen ml-auto mr-auto ">
      {isLoading && <ScreenLoader />}
      {!isLoading && isOnline && <AppContainer />}
      {!isLoading && !isOnline && <Offline />}
    </Main>
  );
};
export default App;
