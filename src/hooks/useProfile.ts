import { useState } from "react";
import { Profile } from "../interfaces/GetProfileResponse";
import { UserRepos } from "../interfaces/GetUserRepos";

export const useProfile = () => {
  const [user, setUser] = useState<Profile | undefined>();
  const [repos, setRepos] = useState<UserRepos[]>([]);

  const getProfile = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message) throw Error("Username not found");

    return data;
  };

  const searchUsers = async (search: string) => {
    try {
      const user = await getProfile(search);
      const repos = await getRepos(user.login);

      return setUser(user), setRepos(repos);
    } catch (e) {
      console.log("USER NOT FOUND");
      return setUser(undefined), setRepos([]);
    }
  };

  //////////////// repositories //////////////////////// repositories /////////////////////////////

  const getRepos = async (username: string) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    return data;
  };

  ////////// returns ///////

  return { user, setUser, searchUsers, repos, setRepos, getRepos };
};
