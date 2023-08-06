interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <img
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "./src/assets/logo.png"}
    />
  );
};

export default Avatar;
