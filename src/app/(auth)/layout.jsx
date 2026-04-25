import BreakingNews from "@/components/shared/BreakingNews";
import NavBar from "@/components/shared/NavBar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      {children}
    </>
  );
};

export default AuthLayout;
