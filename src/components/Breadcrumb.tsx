import { Link, LinkProps } from "react-router-dom";

const Breadcrumb = ({ children, className, ...restProps }: LinkProps) => {
  return <Link {...restProps}>{children ?? <span>Loading...</span>}</Link>;
};

export default Breadcrumb;
