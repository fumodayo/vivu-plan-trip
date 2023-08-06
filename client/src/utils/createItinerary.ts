interface Attraction {
  name: string;
  times: {
    startTime: string;
    endTime: string;
  };
  combo: {
    timeRange: string;
    price: {
      person: number;
      child: number;
    };
  }[];
}

interface Hotel {
  name: string;
  price: {
    person: number;
    child: number;
  };
}

interface ItineraryResult {
  day: number;
  attractions: {
    name: string;
    startTime: string;
    endTime: string;
  }[];
  hotel: {
    name: string;
  }[];
}

export function createItinerary(
  attractions: Attraction[],
  hotels: Hotel[],
  budget: number,
  person: number,
  child: number,
  dateRange: number
): ItineraryResult[] {
  const halfTimeSlots = [
    { startTime: "8:00", endTime: "11:00" },
    { startTime: "13:00", endTime: "17:00" },
    { startTime: "18:00", endTime: "22:00" },
  ];

  function findAttraction(
    index: number,
    usedNames: string[]
  ): Attraction | undefined {
    const attraction = attractions[index];
    if (usedNames.includes(attraction.name)) {
      return findAttraction(index + 1, usedNames);
    } else {
      return attraction;
    }
  }

  function calculateTotalPrice(
    attractions: Attraction[],
    hotel: Hotel,
    numPersons: number,
    numChildren: number,
    remainingBudget: number
  ): {
    totalPrice: number;
    remainingBudget: number;
    attractions: Attraction[];
  } {
    const attractionPrice = attractions.reduce(
      (acc, attraction) => {
        const combo = attraction.combo.find(
          (c) =>
            c.timeRange === "half" &&
            c.price.person <= acc.remainingBudget / numPersons
        );

        if (combo) {
          const totalPriceNeeded =
            combo.price.person * numPersons + combo.price.child * numChildren;
          if (totalPriceNeeded <= acc.remainingBudget) {
            acc.remainingBudget -= totalPriceNeeded;
            acc.totalPrice += totalPriceNeeded;
            acc.attractions.push({
              name: attraction.name,
              startTime: attraction.times.startTime,
              endTime: attraction.times.endTime,
            });
          }
        }

        return acc;
      },
      { totalPrice: 0, remainingBudget, attractions: [] } as {
        totalPrice: number;
        remainingBudget: number;
        attractions: Attraction[];
      }
    );

    const hotelPriceNeeded =
      hotel.price.person * numPersons + hotel.price.child * numChildren;
    if (hotelPriceNeeded <= attractionPrice.remainingBudget) {
      attractionPrice.remainingBudget -= hotelPriceNeeded;
      attractionPrice.totalPrice += hotelPriceNeeded;
      attractionPrice.attractions.push({
        name: hotel.name,
      });
    }

    return attractionPrice;
  }

  function buildItinerary(): ItineraryResult[] {
    const results: ItineraryResult[] = [];
    const usedNames: string[] = [];
    let remainingBudget = budget;

    for (let day = 1; day <= dateRange; day++) {
      const attractionsOfDay: {
        name: string;
        startTime: string;
        endTime: string;
      }[] = [];
      let totalPrice = 0;

      for (const timeSlot of halfTimeSlots) {
        const availableAttraction = findAttraction(0, usedNames);
        if (!availableAttraction) break;

        const attractionPrice = calculateTotalPrice(
          [availableAttraction],
          hotels[0],
          person,
          child,
          remainingBudget
        );

        if (attractionPrice.totalPrice <= remainingBudget) {
          usedNames.push(availableAttraction.name);
          attractionsOfDay.push({
            name: availableAttraction.name,
            startTime: timeSlot.startTime,
            endTime: timeSlot.endTime,
          });
          totalPrice += attractionPrice.totalPrice;
          remainingBudget -= attractionPrice.totalPrice;
        }
      }

      if (totalPrice === 0) {
        // Ngân sách không đủ để thực hiện lịch trình cho ngày này
        break;
      }

      results.push({
        day,
        attractions: attractionsOfDay,
        hotel: [{ name: hotels[0].name }],
      });
    }

    return results;
  }

  return buildItinerary();
}
