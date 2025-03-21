import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  text: string;
  link?: string;
}

export const ProjectCard = ({ image, title, text, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
        </Link>
      ) : (
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      )}

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{text}</p>
      </div>
    </div>
  );
};
