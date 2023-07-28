import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const value = "some value";

  return (
    <div>
      <Navbar />
      <div className="page">
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </div>
    </div>
  );
};

export default HomeLayout;
