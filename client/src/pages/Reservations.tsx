import { useMemo, useState } from "react";

import { eachDayOfInterval } from "date-fns";
import { Range } from "react-date-range";

import Calendar from "../components/inputs/Calendar";
import QuantitySelect from "../components/inputs/QuantitySelect";
import Container from "../components/Container";
import Button from "../components/Button";
import Selector from "../components/selector/Selector";
import { formatDate } from "../utils/formatDate";
import OptionPrice from "../components/inputs/OptionPrice";
import useBookingStore from "../hooks/useBooking";
import { FaCompass } from "react-icons/fa";
import useTipsModal from "../hooks/useTipsModal";
import Listings from "../components/reservations/Listings";

const initialDateRange = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

const Reservations = () => {
  const [dateRange, setDates] = useState<Range[]>(initialDateRange);
  const [totalDateRange, setTotalDateRange] = useState(1);

  const { totalDate, setDateRange } = useBookingStore(
    (state) => state.dateRange
  );
  const { type, person, child } = useBookingStore((state) => state.group);
  const { totalPrice } = useBookingStore((state) => state.price);

  useMemo(() => {
    if (dateRange[0].startDate && dateRange[0].endDate) {
      const range = eachDayOfInterval({
        start: dateRange[0].startDate,
        end: dateRange[0].endDate,
      });
      setTotalDateRange(range.length);
      setDateRange(range.length);
    }
  }, [dateRange]);

  const dateRanges = `${formatDate(dateRange[0].startDate)} - ${formatDate(
    dateRange[0].endDate
  )}`;

  const handleBooking = () => {
    console.log({ totalDate, totalPrice, totalDateRange });
  };

  const tipsModal = useTipsModal();

  return (
    <div>
      <div className="relative mb-[-50px] h-[400px] w-full bg-hero-pattern bg-no-repeat bg-center flex">
        <div className="bg-black/30 h-[400px] w-full absolute top-0" />
        <div className="relative justify-center flex flex-col mx-[400px]">
          <div>
            <div className="text-5xl font-medium text-white">Đà Nẵng</div>
            <div className="text-xl font-medium text-white">
              Khám phá điểm vui chơi, ưu đãi, kinh nghiệm du lịch Đà Nẵng
            </div>
          </div>
          <span
            onClick={() => tipsModal.onOpen()}
            className="flex flex-row items-center text-white bg-black/60 rounded-xl p-1 w-[120px] mt-2 cursor-pointer hover:bg-black/80"
          >
            <FaCompass size={16} />
            <span className="mx-2 font-semibold text-sm">Bạn cần biết</span>
          </span>
        </div>
      </div>
      <Container>
        <div className="flex justify-between shadow-lg max-h-20 p-4 rounded-card bg-white relative">
          <Selector
            calendar
            totaldays={totalDateRange}
            title="Ngày đi/ ngày trở về"
            subtitle={dateRanges}
            body={
              <Calendar
                value={dateRange}
                onChange={(value) => setDates([value.selection])}
              />
            }
          />
          <Selector
            title="Sở thích du lịch"
            subtitle={`${type}, ${person} Người, ${child} Trẻ em`}
            body={<QuantitySelect />}
          />
          <OptionPrice />
          <div className="w-32">
            <Button label="Tạo chuyến đi" onClick={handleBooking} />
          </div>
        </div>
        <Listings />
      </Container>
    </div>
  );
};

export default Reservations;
