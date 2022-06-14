import "./Repos.styles.css";

export const Repos = ({ repos }) => {
  return (
    <div className="repos-container">
      <p className="repos-container-title">
        {repos ? "Repositories from " + repos[0].owner.login : ""}
      </p>
      {repos?.map((item) => {
        return (
          <div className="repo-item" key={item.id}>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              <span className="repo-name">{item.name}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};
