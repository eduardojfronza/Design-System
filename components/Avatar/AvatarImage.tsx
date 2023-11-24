import Image from "next/image";

export type AvatarImageProps = {
  src: string;
  altDescription: string | "";
};

const AvatarImage = ({ src, altDescription }: AvatarImageProps) => {
  const size = 100;
  return (
    <div>
      <Image src={src} alt={altDescription} width={size} height={size} />
    </div>
  );
};

export default AvatarImage;
