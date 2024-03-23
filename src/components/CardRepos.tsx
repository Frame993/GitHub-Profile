import TextIcon from "./TextIcon";
import iconNesting from "../assets/Nesting.svg";

interface Props {
  repoTitle: string;
  repoParagraph: string;
  iconTitle: string;
}

export default function CardRepos({
  repoTitle,
  repoParagraph,
  iconTitle,
}: Props) {
  return (
    <div className="flex flex-col bg-gradient-to-r from-almost-black to-dark-blue p-4 rounded-xl mt-8">
      <div className="flex flex-col mb-4 gap-2">
        <p className="text-almost-white">{repoTitle}</p>
        <p className="text-light-gray small">{repoParagraph}</p>
      </div>
      <div className="flex gap-2">
        <TextIcon title={iconTitle} icon={iconNesting} />
      </div>
    </div>
  );
}
