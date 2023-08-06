import { Link } from "react-router-dom";
import Container from "../components/Container";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Map, ViewStateChangeEvent, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

const Place = () => {
  const [viewport, setViewport] = useState({
    latitude: 16.06045710530602,
    longitude: 108.2097851153426,
    zoom: 14,
  });
  const onViewportChange = (e: ViewStateChangeEvent) =>
    setViewport(e.viewState);

  return (
    <Container>
      <div className="pt-5">
        <div>
          <h1 className="font-semibold text-4xl">
            Sun World Ba Na Hills Đà Nẵng
          </h1>
          <p className="text-sm pt-2">
            Bước vào chốn tiên cảnh tại khu du lịch đẳng cấp Sun World Bà Nà
            Hills
          </p>
          <div className="flex flex-row items-center my-5">
            <div className="text-orange-400 flex flex-row items-center">
              <AiFillStar size={20} />
              <h1>4.8</h1>
            </div>
            <div className="flex flex-row items-center mx-5">
              <HiOutlineLocationMarker />
              <Link to={"/"} className="whitespace-nowrap underline mx-2">
                Bà Nà Hills - Xã Hòa Ninh, Huyện Hòa Vang, T.P Đà Nẵng
              </Link>
            </div>
          </div>

          <div className="h-[450px] flex w-full relative">
            <div className="w-2/3 h-full relative">
              <img
                className="w-full h-full bg-cover rounded-l-card"
                src="./src/assets/hero-bg.jpg"
                alt="Image"
              />
            </div>

            <div className="w-1/3 h-full absolute top-0 right-0">
              <div className="w-full h-1/2 relative rounded-tr-card">
                <img
                  className="w-full h-full bg-cover rounded-tr-card"
                  src="./src/assets/hero-bg.jpg"
                  alt="Image"
                />
              </div>
              <div className="w-full h-1/2 relative rounded-br-card">
                <img
                  className="w-full h-full bg-cover rounded-br-card"
                  src="./src/assets/hero-bg.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="mr-[250px]">
            <div className="p-5 bg-orange-100/50 my-5 rounded-card">
              <h1 className="text-xl font-semibold my-2">Điểm nổi bật</h1>
              <ul className="list-disc mx-5">
                <li>Vui lòng kiểm tra lịch vận hành trước khi mua vé!</li>
                <li>
                  Đến Bà Nà Hills để trải nghiệm tuyến cáp treo thuộc top 10 thế
                  giới với quang cảnh hùng vĩ từ đỉnh núi Chúa
                </li>
                <li>
                  Chụp ảnh tại Cầu Vàng, cây cầu đi bộ ấn tượng nhất thế giới
                  với khung cảnh tuyệt vời
                </li>
                <li>
                  Chiêm ngưỡng công trình kiến trúc đặc sắc của làng Pháp cổ
                  kính cùng không gian văn hoá linh thiêng
                </li>
              </ul>
            </div>
            <div>
              <h1 className="header">Các gói dịch vụ</h1>
              <div className="p-5 my-5 rounded-card border-[1px]">
                <h1>
                  [Vé QR Code - Vào Cửa Trực Tiếp] Vé Vào Cổng Ba Na Hills + Xe
                  Bus Đưa đón 2 Chiều từ Đà Nẵng
                </h1>
                <div>
                  <p>Người lớn</p>
                  <span>đ 1,890,000</span>
                  <p>Trẻ em (Chiều cao 100cm-139cm)</p>
                  <span>đ 905,000</span>
                </div>
                <p>Thông tin gói dịch vụ</p>
              </div>
            </div>
            <div>
              <h1 className="header">Về dịch vụ này</h1>
              <div className="my-5">
                <h2 className="subtitle">
                  Vì sao bạn nên chọn vui chơi tại Bà Nà Hills Đà Nẵng?
                </h2>
                <p className="content">
                  Đối với các tín đồ du lịch, Bà Nà Hills sẽ luôn nằm trong danh
                  sách phải ghé thăm khi đến Đà Nẵng. Đây là quần thể du lịch
                  nghỉ dưỡng kết hợp vui chơi giải trí đẳng cấp bậc nhất Việt
                  Nam, được mệnh danh là “chốn bồng lai tiên cảnh”. Sở hữu khí
                  hậu tuyệt vời cùng cảnh quan thiên nhiên kỳ thú. Từ ngắm nhìn
                  toàn cảnh núi non hùng vĩ bằng tuyến cáp treo đạt kỷ lục
                  Guinness, đi bộ trên Cầu Vàng ấn tượng nhất thế giới. Đắm chìm
                  vào kiến trúc cổ kính lộng lẫy của làng Pháp, vui chơi thả ga
                  tại khu vui chơi Fantasy dành cho mọi du khách. Tham quan bảo
                  tàng sáp hay chiêm ngưỡng tượng Đức Phật Thích Ca lớn nhất
                  Châu Á tại chùa Linh Ứng. Những trải nghiệm thú vị tại Bà Nà
                  Hills hứa hẹn sẽ mang đến nhiều điều thú vị cho kỳ nghỉ của
                  bạn.
                </p>
                <h2 className="subtitle">
                  Vé Cáp Treo Bà Nà Hills Đà Nẵng mang đến cho bạn những gì?
                </h2>
                <p className="content">
                  Nằm ở đỉnh núi Chúa, cách duy nhất để đến Bà Nà Hill là bạn
                  phải di chuyển bằng cáp treo. Lập 4 kỷ lục thế giới, cáp treo
                  Bà Nà Hill Đà Nẵng là một điểm thu hút chính của nơi đây. Cáp
                  treo sẽ đưa bạn đi băng rừng, ngắm toàn cảnh núi non hùng vĩ -
                  từ những thác nước cao và những ngọn núi sương mù, đến những
                  cánh rừng dày của thảm thực vật nhiệt đới.
                </p>
                <p className="content">
                  Cầu Vàng là địa điểm chụp ảnh nổi tiếng nhất tại Đà Nẵng và
                  được tạp chí TIME vinh danh trong “Top 10 điểm đến tuyệt vời
                  nhất thế giới năm 2018” và trang The Guardian công nhận là
                  “Cây cầu đi bộ ấn tượng nhất thế giới”. Ngoài ra, Làng Pháp,
                  nơi tái hiện một nước Pháp cổ kính và lãng mạn với những công
                  trình kiến trúc cổ điển độc đáo như quảng trường, nhà thờ, thị
                  trấn, làng cổ, và khách sạn là một trong những công trình được
                  du khách yêu thích khi đến đây. Đừng bỏ qua khu vui chơi giải
                  trí Fantasy Park với nhiều trò chơi giải trí, vận động dành
                  cho cả gia đình.
                </p>
                <p className="content">
                  Giá vé cáp treo Bà Nà Hills Đà Nẵng trên Vivu bao gồm vé vào
                  cổng và vé cáp treo khứ hồi cho hành trình của bạn. Ngoài ra,
                  bạn còn được tham quan các khu vui chơi và khu vực khác nằm
                  trong điểm du lịch Đà Nẵng nổi tiếng này với các ưu đãi hấp
                  dẫn.
                </p>
                <p className="content">
                  Dễ dàng vào cổng Bà Nà Hills bằng QR code, sau đó, bạn có thể
                  mua vé Bảo Tàng Sáp với giá ưu đãi và có combo đi kèm bữa trưa
                  để chuyến du lịch Đà Nẵng của bạn thuận tiện hơn. Combo vé này
                  phù hợp với gia đình có trẻ nhỏ, bé sẽ được thưởng thức bữa
                  trưa cùng với bố mẹ.
                </p>
                <p className="content">
                  Hãy khám phá tất cả những điều này với vé Bà Nà Hills cực kỳ
                  ưu đãi khi bạn đặt qua Vivu! Tham khảo thêm Bí Kíp Vivu và
                  phần Câu Hỏi Thường Gặp để có trải nghiệm tốt hơn.
                </p>
              </div>
            </div>
            <div>
              <h1 className="header">Những điều cần lưu ý</h1>
              <p className="text-xl font-semibold my-2">Bí kíp Vivu:</p>
              <ul className="list-disc mx-5">
                <li>
                  Bạn vui lòng đeo khẩu trang trong suốt chuyến đi và tuân thủ
                  các biện pháp phòng chống COVID-19
                </li>
                <li>
                  Bạn nên tham khảo bản đồ du lịch Bà Nà Hills trước để tiết
                  kiệm thời gian di chuyển
                </li>
                <li>
                  Thời gian hoạt động của cáp treo tại Sun World Bà Nà Hills là
                  từ 8:00 - 17:00. Hãy chú ý thời gian để di chuyển ra cáp treo
                  cho kịp thời gian quay về và cũng đừng quên chú ý các loa
                  thông báo tại khu du lịch để không bỏ lỡ chuyến cáp treo cuối
                  cùng
                </li>
                <li>
                  Bà Nà Hills không cho phép mang đồ ăn. Tuy nhiên các bạn có
                  thể dùng bữa tại các nhà hàng hoặc quầy bán lưu động
                </li>
                <li>
                  Bạn nên mặc trang phục giữ ấm hoặc mang theo áo ấm, vì thời
                  tiết mát mẻ và sẽ lạnh vào buổi chiều trên Bà Nà Hills đồng
                  thời cũng lưu ý trang phục khi ghé thăm các khu vực tâm linh
                  nha
                </li>
                <li>
                  Đừng bỏ lỡ tàu hỏa leo núi, để trải nghiệm chuyến thám hiểm
                  thú vị và hoàn toàn miễn phí
                </li>
                <li>
                  Vé đặt tại Vivu sẽ không bao gồm Bảo tàng tượng sáp (giá vé:
                  100.000 VNĐ) và Trú Vũ Trà Quán, do đó bạn nên mang theo tiền
                  mặt để mua vé và sử dụng dịch vụ tại 2 khu vực này
                </li>
              </ul>
            </div>
            <div>
              <h1 className="header">Địa điểm</h1>
              <Map
                {...viewport}
                onMove={onViewportChange}
                style={{
                  width: "800px",
                  height: "240px",
                  borderRadius: "16px",
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={
                  "pk.eyJ1IjoidGhhaXJ5byIsImEiOiJjbDc4OTMzNzkwN2ZzM3ZueXE0NWdyNHB0In0.G_TZ_zbzQ8T7512A44nK9g"
                }
              >
                <Marker
                  longitude={108.2097851153426}
                  latitude={16.06045710530602}
                  anchor="top"
                />
                <Popup
                  longitude={108.2097851153426}
                  latitude={16.06045710530602}
                  anchor="bottom"
                  className="
                    box-border 
                    overflow-hidden 
                    bg-[white] 
                    shadow-[0_2px_7px_1px_rgba(0,0,0,0.3)] 
                    border 
                    p-1
                    rounded-card
                    border-solid
                    text-sm
                    font-bold
                  "
                >
                  Bà Nà Hills - Xã Hòa Ninh, Huyện Hòa Vang, T.P Đà Nẵng
                </Popup>
              </Map>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Place;
