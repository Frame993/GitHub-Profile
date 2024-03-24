import UserInfo from "./components/UserInfo";
import InputSearch from "./components/InputSearch";
import { useProfile } from "./hooks/useProfile";
import CardRepos from "./components/CardRepos";
import TextIcon from "./components/TextIcon";

import iconNesting from "./assets/Nesting.svg";
import iconStar from "./assets/Star.svg";
import iconChield from "./assets/Chield_alt.svg";

export default function App() {
  const { user, searchUsers, repos } = useProfile();

  return (
    <>
      <div className="flex search-container h-[200px] w-full items-start justify-center pt-10">
        <InputSearch onSearch={searchUsers} />
      </div>
      {user && (
        <div className="w-[90%] md:max-w-[800px] flex flex-col mx-auto relative">
          <div className="w-full top-[-20px] absolute">
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:justify-between">
              {user && (
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-[80px] rounded-xl outline outline-8 outline-dark-gray"
                />
              )}
              <div className="flex flex-col md:flex-row gap-y-2">
                <UserInfo title="Followers" data={user.followers} />
                <UserInfo title="Following" data={user.following} />
                <UserInfo title="Location" data={user.location} />
              </div>
            </div>
            <div className="flex flex-col mt-4 mb-4">
              <h1>{user.login}</h1>
              <p className="small">{user.bio}</p>
            </div>
            <div className="card grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-4">
              {repos && 
                repos.map((repos) => (
                  <CardRepos
                    key={repos.id}
                    repoTitle={repos.name}
                    repoParagraph={repos.description}
                  > 
                    {repos.license && <TextIcon title={repos.license.spdx_id} icon={iconChield} /> }
                    <TextIcon title={repos.forks} icon={iconNesting} />
                    <TextIcon title={repos.stargazers_count} icon={iconStar} />
                    <p className="text-light-gray small">
                      updated {parseInt(repos.updated_at)}
                    </p>
                  </CardRepos>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
