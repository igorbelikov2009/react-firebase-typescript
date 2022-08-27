import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import Chat from "./components/Chat";
import Login from "./components/Login";

interface IRoutes {
  path: string;
  Component: React.FC<{}>;
}

export const publicRoutes: IRoutes[] = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes: IRoutes[] = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
