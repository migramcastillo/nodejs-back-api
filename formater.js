const formater = (numbersString) => {
  const numbersSplit = String(numbersString)
    .split(",")
    .map((num) => Number(num));

  const sortList = [];

  for (const num of numbersSplit) {
    const minorIndex = sortList.findIndex((n) => n >= num);

    if (minorIndex !== -1) {
      //  Si hay como ingresar un elemento en un determinado index
      sortList.splice(minorIndex, 0, num);
    } else {
      sortList.push(num);
    }
  }

  return sortList;
};

module.exports = formater;
