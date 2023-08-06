import ListingCard from "./ListingCard";

const Listings = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="flex flex-col items-center p-2">
        <h1 className="p-2 text-3xl font-semibold">Đà Nẵng có gì chơi?</h1>
        <p>
          Bạn không biết nên bắt đầu từ đâu? Vậy bạn hãy xem qua các hành trình
          đã được đề xuất bên dưới để có một số ý tưởng cho chuyến đi của bạn.
        </p>
      </div>
      <div className="pt-5 flex">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </div>
  );
};

export default Listings;
