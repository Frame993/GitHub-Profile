interface Props {
    title: string | null | number ;
    icon: string;
}

export default function TextIcon({ title, icon }: Props) {
  return (
    <div className="flex items-center gap-1">
      <img src={icon} alt="icon" className="w-[18px] h-[18px]"/>
      <p className="text-light-gray small">{title}</p>
    </div>
  );
}
