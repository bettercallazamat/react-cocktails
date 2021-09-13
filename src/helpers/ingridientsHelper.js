const ingridientsHelper = (cocktail) => {
  let ingridients = [];
  let ingridientsMeasures = [];
  let ingridientsObj = [];
  const keys = Object.keys(cocktail);
  keys.forEach((key, index) => {
    if (key.includes('strIngredient') && cocktail[key]) {
      ingridients.push(cocktail[key]);
    } else if (key.includes('strMeasure') && cocktail[key]) {
      ingridientsMeasures.push(cocktail[key]);
    }
  });

  for (let i = 0; i < ingridients.length; i++) {
    let measure = ingridientsMeasures[i]
      ? ingridientsMeasures[i]
      : 'defined in instructions';
    ingridientsObj[ingridients[i]] = measure;
  }

  return ingridientsObj;
}

export default ingridientsHelper;