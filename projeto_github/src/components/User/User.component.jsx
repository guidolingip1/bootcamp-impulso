import "./User.styles.css";

export const User = ({
  login,
  bio,
  name,
  followers,
  following,
  public_repos,
  avatar_url,
  html_url,
}) => (
  <div>
    <div className="user-container">
      <div className="user-container-img">
        <img className="user-img" src={avatar_url} alt="Github user profile pic" />
      </div>
      <div className="user-container-loginName">
        <span className="user-container-name">{name}</span>
        <span className="user-container-login">{login}</span>
      </div>
      <div className="user-container-bio">{bio}</div>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <button className="user-container-seeOnGithub-button">See on GitHub</button>
      </a>
      <div className="user-container-info">
        <div className="user-container-followers block">
          <h2>Followers</h2>
          {followers}
        </div>
        <div className="user-container-following block">
          <h2>Following</h2>
          {following}
        </div>
        <div className="user-container-publicRepos block">
          <h2>Repos</h2>
          {public_repos}
        </div>
      </div>
    </div>
  </div>
);
