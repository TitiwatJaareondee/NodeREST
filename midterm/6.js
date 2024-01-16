function removeDups(arr) {
    const uniqueSet = new Set(arr);

    const uniqueArray = [...uniqueSet];
  
    return uniqueArray;
  }

  console.log(removeDups([1,0,1,0]));
  console.log(removeDups(["The","big","cat"]));
  console.log(removeDups(["John","Tayler","John"]));