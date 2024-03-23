interface Props {
  onSearch: (searchText: string) => void;
}

export default function InputSearch({ onSearch }: Props) {

  const onType = (str:string)=>{
    setTimeout(() => {
      onSearch(str)
    }, 1000);
  }

  return (
    <div className="flex bg-dark-gray py-2 px-4 rounded-lg w-[400px]">
      <input
        onChange={(e) => onType(e.target.value)}
        className="w-full px-2 small"
        type="text"
        placeholder="username"
      />
    </div>
  );
}
