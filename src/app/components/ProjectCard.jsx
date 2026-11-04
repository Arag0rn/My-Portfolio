import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const t = useTranslations("Projects");
  return (
    <div className="h-full flex flex-col">
      <div className="h-52 md:h-72 shrink-0 rounded-t-xl relative group overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />

        {(gitUrl || previewUrl) && (
        <div className="overlay absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-80 group-focus-within:opacity-100 group-focus-within:bg-opacity-80 transition-opacity duration-500">
          {gitUrl && (
          <Link href={gitUrl} aria-label={t("code_link", { title })} className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
            <CodeBracketIcon aria-hidden="true" className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>
          )}

          {previewUrl && (
          <Link href={previewUrl} aria-label={t("preview_link", { title })} className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
            <EyeIcon aria-hidden="true" className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>
          )}
        </div>
        )}
      </div>

      <div className="flex-1 text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
