Đầu vào là

```js
const attractions = [
  {
    name: "A",
    times: {
      startTime: "8:00",
      endTime: "11:00",
    },
    combo:[{
        timeRange:'half',
        price:{
            person: 2,
            child:1
        }
    }]
  },
  {
    name: "B",
    times: {
      startTime: "8:00",
      endTime: "22:00",
    },
    combo:[{
        timeRange:'full',
        price:{
            person: 5,
            child:2
        },
    },{
        timeRange:'half',
        price:{
            person: 2,
            child:1
        }
    }]
  },
  {
    name: "C",
    times: {
      startTime: "8:00",
      endTime: "22:00",
    },
    combo:[{
        timeRange:'full',
        price:{
            person: 5,
            child:2
        },
    },{
        timeRange:'half',
        price:{
            person: 2,
            child:1
        }
    }]
  },
  {
    name: "D",
    times: {
      startTime: "8:00",
      endTime: "22:00",
    },
    combo:[{
        timeRange:'full',
        price:{
            person: 5,
            child:2
        },
    },{
        timeRange:'half',
        price:{
            person: 2,
            child:1
        }
    }]
  },
  {
    name: "E",
    times: {
      startTime: "8:00",
      endTime: "22:00",
    },
    combo:[{
        timeRange:'full',
        price:{
            person: 5,
            child:2
        },
    },{
        timeRange:'half',
        price:{
            person: 2,
            child:1
        }
    }]
  },
  {
    name: "F",
    times: {
      startTime: "8:00",
      endTime: "22:00",
    },
    combo:[{
        timeRange:'full',
        price:{
            person: 5,
            child:2
        },
    },{
        timeRange:'half',
        price:{
            person: 2,
            child:1
        }
    }]
  },
];
và
const hotels = [
  {
    name: "hotel A",
    price: {
      person: 2,
      child: 1,
    },
  },
  {
    name: "hotel B",
    price: {
      person: 2,
      child: 1,
    },
  },
];
và
const budget = 40
const person = 2
const dateRange = 2
đầu ra:
results = [
    {
      day: 1,
      attractions: [
        {
          name: "A",
          startTime: "8:00",
          endTime: "11:00",
        },
        {
          name: "C",
          startTime: "13:00",
          endTime: "17:00",
        },
        {
          name: "D",
          startTime: "18:00",
          endTime: "22:00",
        },
      ],
      hotel:[{name: "Hotel A"}]
    },
    {
      day: 2,
      attractions: [
        {
          name: "B",
          startTime: "8:00",
          endTime: "22:00",
        },
      ],
      hotel:[{name: "Hotel A"}]
    }
]
```

Tạo lịch trình theo yêu cầu sau:

1. Trong 1 ngày từ 8:00 đến 22:00 = 'full' tương ứng với 3 "half" tương ứng với: 8:00 đến 11:00, 13:00 đến 17:00, 18:00 đến 22:00, nếu combo có timeRange là half thì có thể chia ra tương ứng với 3 khung thời gian trên (Không được trùng 'name' trong bất kỳ đoạn nào trong toàn bộ lịch trình)
2. Lịch trình được tạo ra được cung cấp 'budget' với 'person' và 'dateRange' cho sẵn và phải thỏa mãn với price:
{
  person: 2,
  child:1
} theo từng địa điểm với 'name', ví dụ:budget = 40, person = 2, dateRange = 2 người đi đến địa điểm: 
    name: "A" lúc startTime: "8:00", endTime: "11:00" và giá tiền cho "combo" "half" là person:2, child:1 vì không có trẻ con(person = 2) nên tiền họ phải bỏ ra là 2 cho mỗi người vậy là "budget" còn 40 - 2 x 2 = 36 và 2 người đó còn thời gian là: 13 giờ đến 22 giờ ngày thứ nhất và ngày thứ 2 để đi chơi (dateRange = 2) tiếp theo họ đi đến địa điểm "C" từ "13:00" đến "17:00" và giá tiền là 2 cho mỗi người vậy "budget" sẽ là: 36 - 2 x 2 = 32, kế tiếp họ đi đến địa điểm "D" từ "18:00" đến "22:00" và mất 2 cho mỗi người vậy "budget" sẽ là: 32 - 2 x 2 = 28. Vậy 2 người đó còn mỗi 1 ngày để đi chơi là ngày thứ 2, day:2. Trong 2 ngày đó họ đều nghỉ trong 1 khách sạn hotel:[{name: "Hotel A"}] có giá tiền person: 2 cho mỗi người vậy họ mất thêm "budget" là 28 - 2 x 2 x 2 = 20 vào ngày thứ 2, họ quyết định đi đến địa điểm "B" toàn thời gian "full" nên "combo" có giá person: 5 nên họ mất thêm 5 cho mỗi người thành "budget" là 20 - 5 x 2 = 10 và họ mất hết cả ngày thứ 2: từ 8 giờ đến 22 giờ cuối ngày họ nghỉ chân ở khách sạn "Hotel A" tiền đã được trả trước ở ngày 1 .
    Trường hợp 2: Có 2 người lớn và 1 trẻ con: budget = 30, person = 2,child = 1 dateRange = 1 đi đến địa điểm "E" cả ngày 'full' hết budget = 30 - (5 x 2 + 2 x 1) = 18 vì vé cho mỗi người lớn là 2 và vé dành cho trẻ con là 2 (cho mỗi người) và họ nghỉ trong khách sạn "hotel B" vậy budget sẽ là 18 - (2 x 2 + 1 x 1) = 13. Kết quả trả ra là: 
    results = [
    {
      day: 1,
      attractions: [
        {
          name: "E",
          startTime: "8:00",
          endTime: "22:00",
        },
      ],
      hotel:[{name: "Hotel B"}]
    },
    ]
    Trường hợp 3: Có 5 người lớn và 1 trẻ con: budget = 9, person = 5, child = 1 dateRange = 2 đi đến địa điểm B cả ngày 'full' hết budget = 9 - (5 x 2 + 2 x 1) = -3 vậy là họ không đủ tiền. Kết quả trả ra là:
    results = []
