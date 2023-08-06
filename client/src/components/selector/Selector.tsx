import { useRef, useEffect, useState } from "react";

interface SelectorProps {
  calendar?: boolean;
  totaldays?: number;
  title: string;
  subtitle?: string;
  body: React.ReactNode;
}

const Selector: React.FC<SelectorProps> = ({
  calendar,
  totaldays,
  title,
  subtitle,
  body,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="rounded-lg bg-gray-100 p-2 w-[250px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-xs text-neutral-500">{title}</h1>
        <div className="text-base font-medium">
          {subtitle}
          {calendar && (
            <span className="border inline-block text-xs font-semibold leading-none align-middle mx-2 px-2 py-[3px] rounded-card border-solid border-[#212121]">
              {totaldays} Ngày
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="w-[450px] absolute left-0 translate-y-1 bg-white rounded-card border shadow-xl z-10">
          {body}
        </div>
      )}
    </div>
  );
};

export default Selector;
