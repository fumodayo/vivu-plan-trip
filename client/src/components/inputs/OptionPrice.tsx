import { useMemo, useState } from "react";
import Select from "react-select";

import { formatCurrency } from "../../utils/formatCurrency";
import useBookingStore from "../../hooks/useBooking";

export type OptionSelectValue = {
  type: string;
  label: string;
  value: number;
};

const OptionPrice = () => {
  const [option, setOption] = useState<OptionSelectValue>();

  const { totalDate } = useBookingStore((state) => state.dateRange);
  const { person, child } = useBookingStore((state) => state.group);

  const [options, setOptions] = useState<OptionSelectValue[]>([]);

  const { setPriceRange } = useBookingStore((state) => state.price);

  useMemo(() => {
    const personChildLimit = 2;
    const minValueForEconomy = 2000000;
    const minValueForAffordable = 3000000;
    const luxuryValue = 5000000;

    let valueForEconomy = 1000000 * totalDate * (person + child);
    let valueForAffordable = 2000000 * totalDate * (person + child);
    let valueForLuxury = 3000000 * totalDate * (person + child);

    if (totalDate < 3 && person + child < personChildLimit) {
      valueForEconomy = minValueForEconomy;
      valueForAffordable = minValueForAffordable;
      valueForLuxury = luxuryValue;
    }

    const options = [
      {
        type: `Dưới ${formatCurrency(valueForEconomy)}`,
        label: "Tiết kiệm",
        value: valueForEconomy,
      },
      {
        type: `Dưới ${formatCurrency(valueForAffordable)}`,
        label: "Bình dân",
        value: valueForAffordable,
      },
      {
        type: `Dưới ${formatCurrency(valueForLuxury)}`,
        label: "Sang trọng",
        value: valueForLuxury,
      },
    ];
    setOptions(options);
  }, [totalDate, person, child]);

  return (
    <div className="w-80 mx-2">
      <Select
        placeholder="Mức giá"
        isClearable
        options={options}
        value={option}
        onChange={(option) => {
          if (option) {
            setPriceRange(option.value);
          }
          setOption(option as OptionSelectValue);
        }}
        formatOptionLabel={(option: OptionSelectValue) => (
          <div className="flex flex-row items-center gap-3">
            <span className="text-neutral-500 ml-1 font-medium">
              {option.label}
            </span>
            <span>{option.type}</span>
          </div>
        )}
        classNames={{
          control: () => "p-2 border-2",
          input: () => "text-sm",
          option: () => "text-sm",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffd9c9",
          },
        })}
      />
    </div>
  );
};

export default OptionPrice;
