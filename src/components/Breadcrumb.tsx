import { Link, LinkProps } from "react-router-dom";

const Breadcrumb = ({ children, className, ...restProps }: LinkProps) => (
  <Link {...restProps} style={{ textDecoration: "none" }}>
    {children ?? <span>Loading...</span>}
  </Link>
);

export default Breadcrumb;
