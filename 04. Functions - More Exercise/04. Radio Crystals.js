function radioCrystals(array) {
  let arrLength = array.length;
  let target = array[0];

  for (i = 1; i < arrLength; i++) {
    currentChunks = array[i];
    console.log(`Processing chunk ${array[i]} microns`);
    let countCut = 0;
    let countLap = 0;
    let countGrind = 0;
    let countEtch = 0;
    let countXray = 0;

    while (currentChunks / 4 >= target) {
      //cut
      currentChunks /= 4;
      countCut++;
    }
    if (countCut !== 0) {
      console.log(`Cut x${countCut}`);
      currentChunks = Math.trunc(currentChunks);
      console.log("Transporting and washing");
    }

    while (currentChunks * 0.8 >= target) {
      //lap 20%
      currentChunks *= 0.8;
      countLap++;
    }
    if (countLap !== 0) {
      console.log(`Lap x${countLap}`);
      currentChunks = Math.trunc(currentChunks);
      console.log("Transporting and washing");
    }

    //•	Grind
    while (currentChunks - 20 >= target) {
      currentChunks -= 20;
      countGrind++;
    }
    if (countGrind !== 0) {
      console.log(`Grind x${countGrind}`);
      currentChunks = Math.trunc(currentChunks);
      console.log("Transporting and washing");
    }

    //•	Etch -2
    while (currentChunks - 1 >= target) {
      currentChunks -= 2;
      countEtch++;
    }
    if (countEtch !== 0) {
      console.log(`Etch x${countEtch}`);
      currentChunks = Math.trunc(currentChunks);
      console.log("Transporting and washing");
    }

    //•	X-ray

    while (currentChunks + 1 === target) {
      currentChunks += 1;
      countXray++;
    }
    if (countXray !== 0) {
      console.log(`X-ray x${countXray}`);
      currentChunks = Math.trunc(currentChunks);
    }

    if (currentChunks === target) {
      console.log(`Finished crystal ${target} microns`);
    }
  }
}
radioCrystals([1000, 4000, 8100]);
