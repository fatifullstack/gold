import { lazy } from "react";
import Loadable from "app/components/Loadable";

const MiningSites = Loadable(lazy(() => import("./Organization/MiningSites/MiningSites")));

const administrativeRoutes = [
  { path: "/organization/mining-sites", element: <MiningSites /> },
];

export default administrativeRoutes;
