import useTipsModal from "../../hooks/useTipsModal";
import Modal from "./Modal";

interface TemperatureLineProps {
  title: string;
  high: number;
  low: number;
  tips: string;
}

const weathers = [
  {
    title: "THG 12 - THG 2",
    hight: 25,
    low: 19,
    tips: "Trời se lạnh - lý tưởng cho chuyến nghỉ dưỡng",
  },
  {
    title: "THG 3 - THG 5",
    hight: 32,
    low: 23,
    tips: "Mát mẻ - thời gian tuyệt nhất để du lịch Đà Nẵng",
  },
  {
    title: "THG 6 - THG 8",
    hight: 34,
    low: 26,
    tips: "Thời tiết nắng nóng - thích hợp để đi biển",
  },
  {
    title: "THG 9 - THG 11",
    hight: 30,
    low: 23,
    tips: "Mùa mưa - khả năng cao có bão hay mưa to",
  },
];

const TemperatureLine: React.FC<TemperatureLineProps> = ({
  title,
  high,
  low,
  tips,
}) => {
  return (
    <div className="mx-4">
      <header className="mb-2 text-base">{title}</header>
      <div>
        <span className="text-2xl">{high}&deg;</span>
        <span className="text-2xl ml-6 text-gray-400">{low}&deg;</span>
      </div>
      <p className="mt-3">{tips}</p>
    </div>
  );
};

const TipsModal = () => {
  const tipsModal = useTipsModal();

  return (
    <Modal isOpen={tipsModal.isOpen} onClose={tipsModal.onClose}>
      <div className="p-10 text-sm">
        <h1 className="font-semibold text-xl mb-8">Vài nét về Đà Nẵng</h1>
        <p>
          Đà Nẵng là thành phố của những cây cầu và được mệnh danh là thành phố
          đáng sống nhất Việt Nam. Nổi tiếng với hình ảnh Cầu Rồng vừa mạnh mẽ
          vừa uy nghiêm, thành phố phố Đà Nẵng được thiên nhiên ưu ái ban tặng
          những bãi biển trong xanh cùng hàng loạt hòn đảo ấn tượng. Du lịch Đà
          Nẵng đang ngày một phát triển, thu hút đông đảo du khách trong nước
          lẫn quốc tế. Bãi biển Mỹ Khê bao la bên cạnh Ngũ Hành Sơn hùng vĩ cùng
          “viên ngọc quý” Bán Đảo Sơn Trà - tất cả những danh lam thắng cảnh này
          đều góp phần mang đến trải nghiệm chân thực cho du khách ghé thăm.
        </p>
        <br />
        <p>
          Có dịp đi du lịch Đà Nẵng tự túc, bạn đừng bỏ lỡ cơ hội khám phá khu
          du lịch Bà Nà Hills nổi tiếng với Cầu Vàng và khung cảnh Châu Âu thu
          nhỏ của Làng Pháp. Ngoài ra, #teamVivu có thể đi tàu ra Cù Lao Chàm để
          ngắm san hô, hít hà hương biển trong lành giữa thiên nhiên hoang sơ,
          chỉ cách biển Cửa Đại 16km. Trong khi đó, Thánh Địa Mỹ Sơn lại là một
          điểm đến đầy hứa hẹn cho những ai yêu thích lịch sử và đam mê khám phá
          văn hoá Chăm Pa. Và còn rất nhiều di tích lịch sử khác như Bảo Tàng
          Chăm Pa, Chùa Linh Ứng hay Đỉnh Bàn Cờ danh tiếng.
        </p>
        <br />
        <p>
          Có rất nhiều điều để trải nghiệm và khám phá ở thành phố Đà Nẵng. Bạn
          đừng quên dành một ngày thư giãn ở Suối Khoáng Nóng Thần Tài để nghỉ
          ngơi trước khi kết thúc chuyến du lịch. Nếu được, hãy lên kế hoạch
          tham quan thành phố này vào dịp festival pháo hoa hàng năm và trải
          nghiệm một trong những sự kiện quốc tế thú vị nhất năm. Ghé thăm Phố
          Cổ Hội An, bảo tàng úp ngược Upside Down World để chụp những bức ảnh
          tuyệt đẹp cùng bạn bè, thẳng tiến chợ đêm thưởng thức đặc sản Đà Nẵng
          và chiêm ngưỡng vẻ đẹp về đêm của thành phố đều là những ý tưởng không
          tồi đâu đấy.
        </p>
        <br />
        <p>
          Từ tham quan đến mua sắm, nghỉ dưỡng hay thử thách với các trò chơi
          trên biển, Đà Nẵng là địa điểm gói gọn mọi trải nghiệm hàng đầu mà bạn
          không nên bỏ lỡ. Dù vi vu một mình, cùng người yêu, theo nhóm bạn hoặc
          gia đình đông đúc, #teamVivu đều có thể khám phá khía cạnh bất ngờ thú
          vị về thành phố biển đáng yêu này.
        </p>
        <br />
        <p>
          Vivu Vietnam mang đến đa dạng dịch vụ hấp dẫn để bạn thoải mái khám
          phá Đà Nẵng như xe đưa đón riêng, vé tham quan, tour du lịch, voucher
          ăn uống và ưu đãi khách sạn với quy trình đặt hàng vô cùng tiện lợi.
          Cùng Vivu Vietnam du lịch Đà Nẵng ngay để tận hưởng những ưu đãi độc
          quyền và chuẩn bị cho một chuyến đi tràn đầy niềm vui. Nếu bạn chưa
          biết chơi gì ở Đà Nẵng, Vivu sẽ giúp bạn với rất nhiều thông tin và bí
          kíp du lịch Đà Nẵng hữu ích nữa đấy.
        </p>
        <div className="h-[1px] w-full shrink-0 bg-gray-200 my-5" />
        <h1 className="font-semibold text-xl mb-5">Thời tiết địa phương</h1>
        <div className="flex flex-row">
          {weathers.map((content) => (
            <TemperatureLine
              title={content.title}
              high={content.hight}
              low={content.low}
              tips={content.tips}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default TipsModal;
