const sumOfABeach = (beach) => {
beach = beach.toLowerCase();
   let sand = beach.split("sand").length - 1,
       water = beach.split("water").length - 1,
       fish = beach.split("fish").length - 1,
       sun = beach.split("sun").length - 1
  return sand + water + fish + sun;
}