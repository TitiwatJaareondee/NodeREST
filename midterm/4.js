function totalVolume(...boxes) {
    let total = 0;
    let sum = 0;

    for (let box of boxes) sum =+ box;

    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      const volume = box.reduce((acc, side) => acc * side, 1); 
      total += volume;
    }
  
    return total;
  }

  console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
  console.log(totalVolume([2,2,2],[2,1,1]));
  console.log(totalVolume([1,1,1]));
  