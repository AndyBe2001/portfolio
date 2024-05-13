import Image from "next/image";

export const HomeWorkThumbnail = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div className="shrink-0">
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
          maxHeight: "480px",
        }}
      />
    </div>
  );
};
