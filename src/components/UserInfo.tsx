interface Props {
    title: string;
    data: number | string;
}

export default function Datos({ title, data }: Props) {
  return (
    <div className=" flex items-center ml-4 bg-almost-black px-4 py-2 rounded-xl">
      <p className="text-light-gray small">{title}</p>
      <div className="w-[1px] h-[20px] bg-light-gray mx-4"></div>
      <p className="small">{data}</p>
    </div>
  );
}
