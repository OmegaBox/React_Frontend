import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import NotFound from "../Organisms/NotFound";

const NotFoundWrap = () => {
  return (
    <div>
      <Header />
      <main className={["notFound", "clearfix"].join(" ")}>
        <NotFound />
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(NotFoundWrap);
