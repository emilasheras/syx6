import PropTypes from "prop-types";

export default function Layout({ header, main, footer }) {
  console.log('Layout Component Rendered');
  return (
    <>
      <header>{header}</header>
      <main>{main}</main>
      <footer className="text-center">{footer}</footer>
    </>
  );
}

Layout.propTypes = {
  main: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};
