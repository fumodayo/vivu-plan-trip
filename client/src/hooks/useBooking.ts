import { create } from "zustand";

export type DateRange = {
  totalDate: number;
  setDateRange: (totalDate: number) => void;
};

export type Group = {
  type: string;
  person: number;
  child: number;
  setGroupSelector: (type: string, person: number, child: number) => void;
};

export type Price = {
  totalPrice: number;
  setPriceRange: (totalPrice: number) => void;
};

interface BookingStore {
  dateRange: DateRange;
  group: Group;
  price: Price;
}

const useBookingStore = create<BookingStore>((set) => ({
  dateRange: {
    totalDate: 1,
    setDateRange: (totalDate: number) =>
      set((state) => ({ dateRange: { ...state.dateRange, totalDate } })),
  },
  group: {
    type: "Cá nhân",
    person: 1,
    child: 0,
    setGroupSelector: (type: string, person: number, child: number) =>
      set((state) => ({ group: { ...state.group, type, person, child } })),
  },
  price: {
    totalPrice: 0,
    setPriceRange: (totalPrice: number) =>
      set((state) => ({ price: { ...state.price, totalPrice } })),
  },
}));

export default useBookingStore;
