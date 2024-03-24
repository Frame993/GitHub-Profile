interface Props {
  onSearch: (searchText: string) => void;
}

export default function InputSearch({ onSearch }: Props) {
  return (
    <div className="flex bg-dark-gray py-2 px-4 rounded-lg w-[90%] md:max-w-[400px]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="7" stroke="#97A3B6" stroke-width="2" />
        <path
          d="M20 20L17 17"
          stroke="#97A3B6"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <input
        type="text"
        placeholder="Github username"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-2 small"
      />
    </div>
  );
}
