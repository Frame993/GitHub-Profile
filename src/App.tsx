import UserInfo from "./components/UserInfo";
import InputSearch from "./components/InputSearch";
import { useProfile } from "./hooks/useProfile";
import CardRepos from "./components/CardRepos";

export default function App() {
  const { user, searchUsers } = useProfile();

  return (
    <>
      <div className="flex search-container h-[200px] w-full items-start justify-center pt-10">
        <InputSearch onSearch={searchUsers} />
      </div>
      {user && (
        <div className="md:max-w-[800px] flex flex-col mx-auto relative">
          <div className="w-full absolute top-[-20px]">
            <div className="flex items-end justify-between">
              {user && (
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-[80px] rounded-xl outline outline-8 outline-dark-gray"
                />
              )}
              <div className="flex">
                <UserInfo title="Followers" data={user.followers} />
                <UserInfo title="Following" data={user.following} />
                <UserInfo title="Location" data={user.location} />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <h1 className="text-3xl ">{user.login}</h1>
              <p>{user.bio}</p>
            </div>
            <div className="card grid grid-cols-2 gap-4">
              <CardRepos
                repoTitle=".github"
                repoParagraph="Something her"
                iconTitle="Nesting"
              />
              <CardRepos
                repoTitle=".github"
                repoParagraph="Something her"
                iconTitle="Nesting"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
