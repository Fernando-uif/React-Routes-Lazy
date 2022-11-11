import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyLoad/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import("../01-lazyLoad/layout/LazyLayout"));
// const lazy3 = lazy(() => import("../01-lazyLoad/pages/LazyPage3"));

export const routes: Routes[] = [
  {
    Component: LazyLayout,
    name: "Lazy layout",
    path: "/lazyload/*",
    to: "/lazyload/",
  },
  {
    Component: NoLazy,
    name: "No lazy",
    path: "no-lazy",
    to: "/no-lazy",
  },
];
