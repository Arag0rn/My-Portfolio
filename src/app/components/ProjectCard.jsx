import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="overlay absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white relative">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>

          <Link href={previewUrl} className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
