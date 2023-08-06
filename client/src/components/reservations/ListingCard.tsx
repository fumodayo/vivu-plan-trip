const ListingCard = () => {
  return (
    <div className="flex flex-col w-[260px] border border-slate-200 rounded-card cursor-pointer hover:-translate-y-1 duration-300 ml-5">
      <div className="relative overflow-hidden rounded-t-card">
        <img
          className="w-full h-[200px] bg-cover rounded-t-card"
          src="./src/assets/hero-bg.jpg"
          alt="Image"
        />
      </div>
      <div className="my-2 mx-4">
        <p className="font-semibold text-base">
          Đi Bà Nà Hills, Hội An, Núi Thần Tài hoặc...
        </p>
        <span className="flex flex-row items-center text-white bg-orange-100 rounded-xl p-1 w-[140px] mt-2 cursor-pointer">
          <span className="mx-2 font-semibold text-sm text-orange-500">Nhiều người xem</span>
        </span>
        <div className="pt-2">
          <p>
            Thời gian: <span className="font-semibold"> 3 ngày</span>
          </p>
          <p>
            Từ
            <span className="font-semibold"> đ 1,829,829</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
