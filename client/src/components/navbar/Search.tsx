import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-70 h-10 bg-neutral-100 box-border relative rounded-[99rem] border border-transparent hover:border-[#ff5b00] focus-within:border-[#ff5b00]">
      <i className="icon absolute left-3 top-1/2 transform -translate-y-1/2">
        <BiSearch size={18} />
      </i>
      <input className="search-input w-full h-full bg-transparent text-sm pl-[38px] pr-3 outline-none" />
    </div>
  );
};

export default Search;
