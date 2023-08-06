import { useState } from "react";
import VaryButton from "../buttons/VaryButton";
import { HiPlus, HiMinus } from "react-icons/hi";
import useBookingStore from "../../hooks/useBooking";

type Select = {
  type: string;
  child: number;
  person: number;
};

interface Option {
  child: number;
  person: number;
}

const OptionItem: React.FC<{
  title: string;
  description?: string;
  onClick?: () => void;
}> = ({ title, description, onClick }) => (
  <div
    onClick={onClick}
    className="text-base font-medium py-5 px-5 flex flex-col hover:bg-orange-100"
  >
    {title}
    {description && (
      <span className="text-sm font-normal text-gray-400">{description}</span>
    )}
  </div>
);

const QuantitySelector: React.FC<{
  title: string;
  option: number;
  onChange: (value: number) => void;
}> = ({ title, option, onChange }) => (
  <div className="flex justify-between px-5 my-2">
    <h1 className="font-medium">{title}</h1>
    <div>
      <VaryButton
        disabled={title === "Trẻ em" ? option < 1 : option <= 1}
        onClick={() => onChange(option - 1)}
        icon={HiMinus}
      />
      <span className="mx-3">{option}</span>
      <VaryButton onClick={() => onChange(option + 1)} icon={HiPlus} />
    </div>
  </div>
);

const QuantitySelect: React.FC = () => {
  const [familyOption, setFamilyOption] = useState<Option>({
    child: 0,
    person: 1,
  });
  const [groupOption, setGroupOption] = useState<Option>({
    child: 0,
    person: 1,
  });

  const { setGroupSelector } = useBookingStore((state) => state.group);

  const handleClick = (selectedType: string) => {
    let option: Select = { type: "Cá nhân", person: 1, child: 0 };
    switch (selectedType) {
      case "Cá nhân":
        option = { type: selectedType, person: 1, child: 0 };
        break;
      case "Cặp đôi":
        option = { type: selectedType, person: 2, child: 0 };
        break;
      case "Gia đình":
        option = { type: selectedType, ...familyOption };
        break;
      case "Đoàn":
        option = { type: selectedType, ...groupOption };
        break;
      default:
        break;
    }
    const { type, person, child } = option;
    setGroupSelector(type, person, child);
  };

  return (
    <div className="flex flex-col">
      <OptionItem title="Cá nhân" onClick={() => handleClick("Cá nhân")} />
      <div className="h-[2px] w-full shrink-0 bg-gray-200" />
      <OptionItem title="Cặp đôi" onClick={() => handleClick("Cặp đôi")} />
      <div className="h-[2px] w-full shrink-0 bg-gray-200" />
      <div
        className="hover:bg-orange-100 pb-5"
        onClick={() => handleClick("Gia đình")}
      >
        <OptionItem
          title="Gia đình"
          description="Trẻ em theo quy định là dưới 16 tuổi"
        />
        <QuantitySelector
          title="Người lớn"
          option={familyOption.person}
          onChange={(value) =>
            setFamilyOption((prev) => ({ ...prev, person: value }))
          }
        />
        <QuantitySelector
          title="Trẻ em"
          option={familyOption.child}
          onChange={(value) =>
            setFamilyOption((prev) => ({ ...prev, child: value }))
          }
        />
      </div>
      <div className="h-[2px] w-full shrink-0 bg-gray-200" />
      <div
        className="hover:bg-orange-100 pb-5"
        onClick={() => handleClick("Đoàn")}
      >
        <OptionItem
          title="Đoàn"
          description="Trẻ em theo quy định là dưới 16 tuổi"
        />
        <QuantitySelector
          title="Người lớn"
          option={groupOption.person}
          onChange={(value) =>
            setGroupOption((prev) => ({ ...prev, person: value }))
          }
        />
        <QuantitySelector
          title="Trẻ em"
          option={groupOption.child}
          onChange={(value) =>
            setGroupOption((prev) => ({ ...prev, child: value }))
          }
        />
      </div>
    </div>
  );
};

export default QuantitySelect;
