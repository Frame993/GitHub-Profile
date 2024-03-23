interface Props {
    title: string;
    data: string;
}

export default function Datos({ title, data }: Props) {
  return (
    <div className=" flex items-center ml-4 bg-almost-black px-4 py-2 rounded-xl">
      <p className="text-light-gray small">{title}</p>
      <hr className="w-[1px] h-[20px] bg-light-gray mx-4" />
      <p className="small">{data}</p>
    </div>
  );
}
