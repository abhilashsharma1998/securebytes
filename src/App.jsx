import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";
import { menuLinks } from "./constants/menu-links";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        {menuLinks?.map(({ path, component: Component }, index) => {
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
