import { Routes, Route, HashRouter } from "react-router-dom"
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { UserResponse } from "./models/User";
import { createContext, useState } from "react";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import AdminPage from "./pages/AdminPage/AdminPage";

interface AuthContextInfo {
  userInfo?: UserResponse;
  userToken?: string;
  login?: (userToken: string, userInfo: UserResponse) => void;
  logout?: () => void;
}

export const AuthContext = createContext<AuthContextInfo>({});

const App = (): JSX.Element => {
  const [userToken, setUserToken] = useState<string | undefined>();
  const [userInfo, setUserInfo] = useState<UserResponse | undefined>();
  const login = (userTokenFromApi: string, userInfoFromApi: UserResponse): void => {
    setUserToken(userTokenFromApi);
    setUserInfo(userInfoFromApi);
  };

  const logout = (): void => {
    setUserToken(undefined);
    setUserInfo(undefined);
  };
  return (
    <AuthContext.Provider value={{ userInfo, userToken, login, logout }}>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/user" element={<PlayerPage></PlayerPage>}></Route>
            <Route path="/personal-area/admin" element={<AdminPage></AdminPage>}></Route>

          </Routes>
        </HashRouter>
      </div>
    </AuthContext.Provider>

  );
}

export default App;
