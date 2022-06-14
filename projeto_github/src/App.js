import { useState, useEffect } from "react";
import alertify from "alertifyjs";

import { User, Repos, Made } from "./components";

/* Styles */
import "./App.css";
import "alertifyjs/build/css/alertify.css";

let getUserData = async (user) => {
  try {
    const req = await fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (req.status !== 200) {
      return null;
    }
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

let getUserRepos = async (user) => {
  try {
    const req = await fetch(`https://api.github.com/users/${user}/repos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (req.status !== 200) {
      return null;
    }

    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [user, setUser] = useState("guidolingip1");
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    getUserData(user).then((data) => setUser(data));
    getUserRepos(user).then((data) => setRepos(data));
  }, []);

  let handleButton = () => {
    let search = document.getElementById("searchbar").value;
    getUserData(search).then((data) => {
      if (data != null) {
        setUser(data);
      } else {
        alertify.set("notifier", "position", "top-left");
        alertify.error("User not found ! ");
      }
    });

    getUserRepos(search).then((data) => {
      if (data != null) {
        setRepos(data);
      }
    });
  };

  if (repos === null) {
    return <div></div>;
  } else {
    console.log(repos);
    return (
      <div className="app">
        <div className="profile-content">
          <div>
            <div className="search">
              <input
                type="text"
                className="searchbar"
                id="searchbar"
                placeholder="Search"
                autoComplete="off"
              />
              <button className="search-button" onClick={handleButton}>
                Search
              </button>
            </div>
            <User {...user} />
            <Made />
          </div>
          <Repos repos={repos} />
        </div>
      </div>
    );
  }
}

export default App;
