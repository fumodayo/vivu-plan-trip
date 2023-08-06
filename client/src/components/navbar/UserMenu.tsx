import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { LuHistory } from "react-icons/lu";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="">
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md 
            w-[100px] 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem icon={LuHistory} label="Lịch sử" />
              <hr />
              <MenuItem label="Đăng xuất" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
