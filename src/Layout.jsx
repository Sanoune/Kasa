import PropTypes from "prop-types";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
