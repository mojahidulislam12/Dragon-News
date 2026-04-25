import NavBar from "@/components/shared/NavBar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
};

export default AuthLayout;
