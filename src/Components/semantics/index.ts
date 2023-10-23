import { lazy } from 'react'
const Article = lazy(() => import('./Article'))
const Aside = lazy(() => import('./Aside'))
const Div = lazy(() => import('./Div'))
const Footer = lazy(() => import('./Footer'))
const Main = lazy(() => import('./Main'))
const Menu = lazy(() => import('./Menu'))
const Nav = lazy(() => import('./Nav'))
const Picture = lazy(() => import('./Picture'))
const Section = lazy(() => import('./Section'))
export { Article, Aside, Div, Footer, Main, Menu, Nav, Picture, Section }