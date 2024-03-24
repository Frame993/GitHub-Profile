import React from "react";
interface Props {
  repoTitle: string | null
  repoParagraph: string | null
  children: React.ReactNode;
}

export default function CardRepos({
  repoTitle,
  repoParagraph,
  children,
}: Props) {
  return (
    <div className="flex flex-col bg-gradient-to-r from-almost-black to-dark-blue p-6 rounded-xl mt-8 justify-between">
      <div className="flex flex-col mb-4 gap-2">
        <p className="text-almost-white">{repoTitle}</p>
        <p className="text-almost-white small">{repoParagraph}</p>
      </div>
      <div className="flex gap-4">
        {children}
      </div>
    </div>
  );
}
