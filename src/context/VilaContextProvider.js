import moment from "jalali-moment";
import React, { useState, useEffect, createContext } from "react";
export const VilaContext = createContext({});
function VilaContextProvider({ children }) {
  const vilaData = [
    {
      id: 1,
      gallery: [
        "https://picsum.photos/id/231/400/250",
        "https://picsum.photos/id/232/400/250",
        "https://picsum.photos/id/233/400/250",
        "https://picsum.photos/id/234/400/250",
        "https://picsum.photos/id/235/400/250",
        "https://picsum.photos/id/236/400/250",
      ],
      link: "https://google.com",
      title: "1ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      bookedDays: [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person1",

      discountPresentage: 20,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
    {
      id: 2,
      gallery: [
        "https://picsum.photos/id/212/400/250",
        "https://picsum.photos/id/224/400/250",
        "https://picsum.photos/id/123/400/250",
        "https://picsum.photos/id/82/400/250",
        "https://picsum.photos/id/182/400/250",
        "https://picsum.photos/id/912/400/250",
      ],
      link: "https://google.com",
      title: "2ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      bookedDays:  [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person2",

      discountPresentage: 20,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
    {
      id: 3,
      gallery: [
        "https://picsum.photos/id/731/400/250",
        "https://picsum.photos/id/312/400/250",
        "https://picsum.photos/id/987/400/250",
        "https://picsum.photos/id/521/400/250",
        "https://picsum.photos/id/796/400/250",
        "https://picsum.photos/id/465/400/250",
      ],
      link: "https://google.com",
      title: "3ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      bookedDays: [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person1",
      discountPresentage: 20,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
    {
      id: 4,
      gallery: [
        "https://picsum.photos/id/700/400/250",
        "https://picsum.photos/id/754/400/250",
        "https://picsum.photos/id/645/400/250",
        "https://picsum.photos/id/798/400/250",
        "https://picsum.photos/id/126/400/250",
        "https://picsum.photos/id/645/400/250",
      ],
      link: "https://google.com",
      title: "4ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: false,
      bookedDays:  [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person2",

      discountPresentage: 0,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
    {
      id: 5,
      gallery: [
        "https://picsum.photos/id/785/400/250",
        "https://picsum.photos/id/645/400/250",
        "https://picsum.photos/id/936/400/250",
        "https://picsum.photos/id/875/400/250",
        "https://picsum.photos/id/785/400/250",
        "https://picsum.photos/id/465/400/250",
      ],
      link: "https://google.com",
      title: "5ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: false,
      bookedDays:  [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person1",

      discountPresentage: 20,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
    {
      id: 6,
      gallery: [
        "https://picsum.photos/id/785/400/250",
        "https://picsum.photos/id/124/400/250",
        "https://picsum.photos/id/721/400/250",
        "https://picsum.photos/id/852/400/250",
        "https://picsum.photos/id/925/400/250",
        "https://picsum.photos/id/465/400/250",
      ],
      link: "https://google.com",
      title: "6ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: false,
      bookedDays:  [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person2",

      discountPresentage: 0,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
    {
      id: 7,
      gallery: [
        "https://picsum.photos/id/798/400/250",
        "https://picsum.photos/id/456/400/250",
        "https://picsum.photos/id/654/400/250",
        "https://picsum.photos/id/321/400/250",
        "https://picsum.photos/id/753/400/250",
        "https://picsum.photos/id/159/400/250",
      ],
      link: "https://google.com",
      title: "7ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: false,
      bookedDays: [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person1",

      discountPresentage: 20,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
    {
      id: 8,
      gallery: [
        "https://picsum.photos/id/951/400/250",
        "https://picsum.photos/id/555/400/250",
        "https://picsum.photos/id/333/400/250",
        "https://picsum.photos/id/222/400/250",
        "https://picsum.photos/id/111/400/250",
        "https://picsum.photos/id/777/400/250",
      ],
      link: "https://google.com",
      title: "8ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: false,
      bookedDays: [moment("2022/04/16"),moment("2022/04/20"),moment("2022/04/22"),moment("2022/04/24")],
      owner:"person2",

      discountPresentage: 0,
      feature: [
        {
          isValid: false,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: false,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
        {
          isValid: true,
          title: "حمام",
          icon: "fa-solid fa-shower",
        },
        {
          isValid: true,
          title: "گاز",
          icon: "fa-solid fa-fire-flame-simple",
        },
        {
          isValid: true,
          title: "آب",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          isValid: true,
          title: "مبلمان",
          icon: "fa-solid fa-couch",
        },
        {
          isValid: true,
          title: "سرویس بهداشتی",
          icon: "fa-solid fa-toilet-paper",
        },
        {
          isValid: true,
          title: "کولر",
          icon: "fa-solid fa-air-conditioner",
        },
        {
          isValid: false,
          title: "پارکینگ",
          icon: "fa-solid fa-square-parking",
        },
        {
          isValid: true,
          title: "برق",
          icon: "fa-solid fa-plug",
        },
      ],
    },
  ];
  return (
    <VilaContext.Provider value={{ vilaData }}>{children}</VilaContext.Provider>
  );
}

export default VilaContextProvider;
