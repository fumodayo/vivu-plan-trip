import { IconType } from "react-icons";

interface MenuItemProps {
  icon?: IconType;
  onClick?: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, icon: Icon }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-normal flex flex-row justify-between relative"
    >
      {Icon && <Icon size={20} />}
      {label}
    </div>
  );
};

export default MenuItem;
