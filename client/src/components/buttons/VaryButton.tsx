import { IconType } from "react-icons";

interface VaryButtonProps {
  disabled?: boolean;
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const VaryButton: React.FC<VaryButtonProps> = ({
  disabled,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        ${disabled ? "opacity-30" : "hover:bg-orange-200"}
        rounded-lg
        transition
        border-[1px]
        border-orange-400
        p-1
      `}
    >
      {Icon && <Icon className="text-orange-500" size={18} />}
    </button>
  );
};

export default VaryButton;
