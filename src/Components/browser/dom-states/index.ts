import { lazy } from 'react';
const NotFound = lazy(() => import("./404"))
const ScreenLoader = lazy(() => import('./ScreenLoader'));
const FallBack = lazy(() => import ('./fallback'));
export { NotFound, ScreenLoader, FallBack };