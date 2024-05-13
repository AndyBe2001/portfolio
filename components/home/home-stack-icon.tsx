import Image from "next/image";

export const HomeStackIcon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      src={src}
      width="0"
      height="0"
      alt={alt}
      sizes="100vw"
      style={{
        display: "block",
        width: "auto",
        height: "auto",
        maxHeight: "50px",
      }}
    />
  );
};
