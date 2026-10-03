export const services = [
  {
    number: "01",
    title: "MONTAŻ OPON",
    short: "Fachowy montaż na nowoczesnych maszynach bezdotykowych.",
    long: "Zdejmowanie i montaż opon na felgach do 22'', bez ryzyka zarysowań. Kontrola ciśnienia i czujników TPMS przy każdej wymianie.",
  },
  {
    number: "02",
    title: "WYWAŻANIE",
    short: "Wyważanie kół z dokładnością do 1 grama.",
    long: "Precyzyjne wyważanie na wyważarkach 3D eliminuje wibracje przy wysokich prędkościach i chroni zawieszenie.",
  },
  {
    number: "03",
    title: "SERWIS OPON",
    short: "Przechowywanie sezonowe, naprawy i kontrola bieżnika.",
    long: "Sezonowy hotel opon, naprawa przebić, ocena zużycia bieżnika i doradztwo dotyczące dalszej eksploatacji.",
  },
  {
    number: "04",
    title: "DOBÓR OPON",
    short: "Setup dopasowany do auta, stylu jazdy i trasy.",
    long: "Analiza specyfikacji pojazdu i warunków jazdy, dobór kompoundu i rozmiaru pod kątem przyczepności i kontroli.",
  },
];

export const performanceStats = [
  {
    number: "01",
    title: "PRECISE BALANCE",
    value: "±1G",
    detail: "Tolerancja wyważania kół na sprzęcie klasy warsztatowej.",
  },
  {
    number: "02",
    title: "CORRECT PRESSURE",
    value: "±0.1 BAR",
    detail: "Kontrola ciśnienia dopasowana do obciążenia i temperatury.",
  },
  {
    number: "03",
    title: "PERFECT FIT",
    value: "100%",
    detail: "Zgodność rozmiaru opony ze specyfikacją producenta pojazdu.",
  },
];

export const tireShowcase = [
  {
    category: "PERFORMANCE",
    name: "TL-P1 ASPHALT",
    size: "245/35 R20",
    description: "Miękki kompound, maksymalna przyczepność na suchej nawierzchni.",
  },
  {
    category: "SPORT TOURING",
    name: "TL-ST2 CIRCUIT",
    size: "225/45 R18",
    description: "Balans komfortu i precyzji dla codziennej, dynamicznej jazdy.",
  },
  {
    category: "WINTER",
    name: "TL-W3 GRIPLINE",
    size: "215/55 R17",
    description: "Kontrola na lodzie i śniegu bez utraty stabilności na suchym asfalcie.",
  },
];

export const whyUs = [
  {
    title: "PRECISION",
    detail: "Każdy etap serwisu mierzony i weryfikowany sprzętem klasy warsztatowej.",
  },
  {
    title: "EXPERIENCE",
    detail: "Zespół techników pracujących wyłącznie z oponami i zawieszeniem.",
  },
  {
    title: "TECHNOLOGY",
    detail: "Maszyny bezdotykowe i wyważarki 3D nowej generacji.",
  },
  {
    title: "INDIVIDUAL APPROACH",
    detail: "Setup dobrany do Twojego auta, nie do średniej statystycznej.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "BOOK",
    detail: "Rezerwujesz termin online lub telefonicznie w kilka minut.",
  },
  {
    number: "02",
    title: "CHECK",
    detail: "Diagnostyka bieżnika, ciśnienia i geometrii przed serwisem.",
  },
  {
    number: "03",
    title: "FIT",
    detail: "Montaż i wyważanie na sprzęcie precyzyjnym klasy warsztatowej.",
  },
  {
    number: "04",
    title: "DRIVE",
    detail: "Odbierasz auto gotowe do jazdy z pełną kontrolą na drodze.",
  },
];

export const carBrands = ["BMW", "AUDI", "MERCEDES-BENZ", "VOLKSWAGEN", "PORSCHE"];

export const carModels: Record<string, string[]> = {
  BMW: ["M340i", "330i", "X3 M40i"],
  AUDI: ["S3", "RS4", "A4 45 TFSI"],
  "MERCEDES-BENZ": ["C43 AMG", "E300", "GLC 300"],
  VOLKSWAGEN: ["Golf GTI", "Arteon", "Tiguan R"],
  PORSCHE: ["Macan S", "718 Cayman", "Panamera"],
};

export const tireSizes = ["225/40 R19", "245/35 R20", "235/45 R18", "255/40 R19"];
export const seasons = ["SUMMER", "WINTER", "ALL-SEASON"];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1600&auto=format&fit=crop",
    alt: "Zbliżenie na bieżnik opony sportowej",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    alt: "Samochód sportowy w ciemnym garażu",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
    alt: "Detal felgi aluminiowej",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
    alt: "Wnętrze warsztatu samochodowego",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1600&auto=format&fit=crop",
    alt: "Koło samochodu sportowego z bliska",
    span: "",
  },
];
