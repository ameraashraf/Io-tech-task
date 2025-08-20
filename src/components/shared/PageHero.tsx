import Image from "next/image";

interface PageHeroProps {
  alt?: string;
  src?: string;
  heightClassName?: string;
}

export default function PageHero({
  alt = "Hero image",
  src = "/backgroundImage.png",
  heightClassName = "h-[40vh] md:h-[55vh] lg:h-[90vh]",
}: PageHeroProps) {
  return (
    <figure className={`relative ${heightClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
    </figure>
  );
}
