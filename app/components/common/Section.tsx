import { cn } from "@/app/lib/utils";
import Image, { StaticImageData } from "next/image";

type SectionProps = {
  children: string | JSX.Element | JSX.Element[];
  bgImage?: StaticImageData;
  className?: string;
};

export const Section = ({
  className,
  bgImage,
  children,
}: SectionProps) => {
  return (
    <section className={cn("relative min-h-max lg:min-h-[768px]", className)}>
      {bgImage ? (
        <div className="absolute inset-0 -z-1 rounded-lg">
          <Image
            src={bgImage}
            fill={true}
            alt="bg image for trusted car"
            className="bg-cover rounded-xl"
          />
        </div>
      ) : (
        ""
      )}
      {children}
    </section>
  );
};
