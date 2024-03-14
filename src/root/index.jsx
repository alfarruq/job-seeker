import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { path } from "../utils";
// import aaa from "../assets/img/logo.png"

function Root() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {path.map(({ id, Element, path }) => {
          return <Route key={id} path={path} element={Element} />;
        })}
      </Routes>
    </>
  );
}

export default Root;
