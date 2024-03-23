import { useState } from "react";
import { Profile } from "../interfaces/GetProfileResponse";

export const useProfile = () => {
  const [user, setUser] = useState<Profile | undefined>();

  const getProfile = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message) throw Error("Username not found");

    return data;
  };

  const searchUsers = async (search: string) => {
    try {
      const user = await getProfile(search);

      return setUser(user);
    } catch (e) {
      alert("USER NOT FOUND");
    }
  };

  return { user, setUser, searchUsers };
};
