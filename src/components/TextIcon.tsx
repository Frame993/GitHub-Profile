interface Props {
    title: string;
    icon: string;
}

export default function TextIcon({ title, icon }: Props) {
  return (
    <div className="flex ">
      <img src={icon} alt="icon" className="w-[20px] filter"/>
      <p className="text-light-gray small">{title}</p>
    </div>
  );
}
