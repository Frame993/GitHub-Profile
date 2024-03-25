interface Props {
    image?: string | undefined;
    username?: string | undefined;
    description?: string | undefined;
    onClick?: () => void;
}

export default function InputResults({image, description, username, onClick}:Props ) {
  return (
    <div className="flex items-center bg-dark-gray py-2 px-2 rounded-lg w-[90%] md:max-w-[400px] gap-4 hover:bg-almost-black cursor-pointer" onClick={onClick}>
      <img
        src={image}
        alt="profile image"
        className="w-[40px] h-full object-cover rounded-lg"
      />
      <div className="flex flex-col">
        <h3>{username}</h3>
        <p className="small text-almost-white">{description? description?.slice(0, 50) + "..." : description  }</p>
      </div>
    </div>
  );
}
