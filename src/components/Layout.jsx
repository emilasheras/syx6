import PropTypes from "prop-types";

export default function Layout({ header, main }) {
  console.log('Layout Component Rendered');
  return (
    <>
      <header>{header}</header>
      <main>{main}</main>
      {/* <footer>{footer}</footer> */}
    </>
  );
}

Layout.propTypes = {
  main: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  // children: PropTypes.node.isRequired,
};
