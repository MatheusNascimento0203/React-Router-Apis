import { Outlet } from "react-router-dom";
import HomeNavegation from "../Components/HomeNavegation";

export default () => {
  return (
    <>
      <HomeNavegation />
      <main className="bg-[#242424] min-h-screen text">
        <Outlet />
      </main>
    </>
  );
};
