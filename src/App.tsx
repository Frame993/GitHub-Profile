import UserInfo from "./components/UserInfo";
import InputSearch from "./components/InputSearch";
import { useProfile } from "./hooks/useProfile";

export default function App() {
  const { user, searchUsers } = useProfile();

  return (
    <>
      <div className="flex search-container h-[200px] w-full items-start justify-center pt-10">
        <InputSearch onSearch={searchUsers} />
      </div>
      {user && (
        <div className="md:max-w-[800px] flex flex-col mx-auto relative">
          <div className="flex items-end justify-between">
            {user && (
              <img src={user.avatar_url} alt="avatar" className="w-[80px] rounded-xl" />
            )}
            <div className="flex">
              <UserInfo title="Followers" data={user.followers_url} />
              <UserInfo title="Following" data={user.following_url} />
              <UserInfo title="Location" data={user.location} />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-3xl ">{user.login}</h1>
            <p>How people build software</p>
          </div>
        </div>
      )}
    </>
  );
}
