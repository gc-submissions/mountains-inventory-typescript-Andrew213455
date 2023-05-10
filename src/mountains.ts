import { Mountain } from "./models/Mountain";

export let mountains: Mountain[] = [
  { name: "kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "denali", height: 20310 },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallestMountain = array[0];
  array.forEach((item) => {
    if (tallestMountain.height < item.height) {
      tallestMountain = item;
    }
  });
  return tallestMountain.name;
};
