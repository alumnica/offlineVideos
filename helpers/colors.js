export const colors = {
  blue: "#2d00f7",
  purple: "#6a00f4",
  lightPurple: "#b100e8",
  pink: "#f20089",
  salmon: "#F63F40",
  darkGreen: "#007f5f",
  green: "#2b9348",
  lightGreen: "#55a630",
  yellow: "#ffff3f",
  black: "#121a21",
  white: "#feffff",
};

export const colorsArray = [
  "#2d00f7",
  "#6a00f4",
  "#8900f2",
  "#a100f2",
  "#b100e8",
  "#bc00dd",
  "#d100d1",
  "#e500a4",
  "#f20089",
  "#F63F40",
  "#007f5f",
  "#2b9348",
  "#55a630",
  "#80b918",
  "#aacc00",
  "#bfd200",
  "#d4d700",
  "#dddf00",
  "#eeef20",
  "#ffff3f",
];

export const getRandomColor = () => {
  return colorsArray[
    Math.floor(Math.random() * Math.floor(colorsArray.length))
  ];
};
