export interface CardCasinoType {
  name: string;
  bonus: string[];
  link: string;
  icon: string;
  raiting: string;
  type: "gold" | "silver" | "bronze" | "basic";
}
import logo from "../logo/white.svg";

export const MockCasinos: CardCasinoType[] = [
  {
    name: "Kings Game Casino",
    bonus: ["Up to 500% ", "250 FS"],
    link: "https://kings.game/",
    icon: logo,
    raiting: "10/10",
    type: "gold",
  },
  {
    name: "Betera",
    bonus: ["10% Weekly Cashback"],
    link: "https://kings.game/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-9hA_KN2akodzIqmjd-saynmJQwBo1m2pfzWSXGVBT4ww6SRTC9rmu3z&s=10",
    raiting: "9/10",
    type: "silver",
  },
  {
    name: "1 Win",
    bonus: ["10% Weekly Cashback"],
    link: "https://kings.game/",
    icon: "https://fsn1.your-objectstorage.com/ac-cdn/images/1win.webp",
    raiting: "9/10",
    type: "bronze",
  },
  {
    name: "Winline",
    bonus: ["10% Weekly Cashback"],
    link: "https://kings.game/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25Pr9YskXydIMn184GgGZ6y07Ht60V3fTI3VlnuofUs6imPUxl3yjjpo&s=10",
    raiting: "8/10",
    type: "basic",
  },
  {
    name: "Fonbet",
    bonus: ["10% Weekly Cashback"],
    link: "https://kings.game/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFh3cVAkpRdyteY36uY-CG4mSVq2tj4MzyaD_TlaFBPX7ErjxeSiFKNJk&s=10",
    raiting: "7.5/10",
    type: "basic",
  },
];
