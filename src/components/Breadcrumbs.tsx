import { UIMatch, useLocation, useMatches } from "react-router-dom";

interface HandleType {
  crumb: (title?: string) => JSX.Element;
}

const Breadcrumbs = () => {
  const matches = useMatches() as UIMatch<null, HandleType>[];
  const crumbs = matches.map(({ handle }) => handle?.crumb).filter(Boolean);
  const location = useLocation();

  return (
    <ol
      style={{
        display: "flex",
        alignItems: "center",
        whiteSpace: "pre",
        listStyleType: "none",
      }}
    >
      {crumbs.map((crumb, index) => {
        const isLast = index + 1 === crumbs.length;
        return (
          <li key={index}>
            <span
              style={
                isLast
                  ? { pointerEvents: "none" }
                  : {
                      textDecoration: "underline",
                    }
              }
            >
              {crumb(location.state?.userName)}
            </span>
            {!isLast && (
              <span style={{ pointerEvents: "none", padding: "5px" }}>/</span>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumbs;
