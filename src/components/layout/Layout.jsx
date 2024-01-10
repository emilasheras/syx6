import PropTypes from "prop-types";

export default function Layout({ header, footer, children }) {
  console.log('Layout Component Rendered');
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer className="text-center">{footer}</footer>
    </>
  );
}

Layout.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
