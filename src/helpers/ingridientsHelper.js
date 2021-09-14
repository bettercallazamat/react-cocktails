const ingridientsHelper = (cocktail) => {
  const ingridients = [];
  const ingridientsMeasures = [];
  const ingridientsObj = {};
  const keys = Object.keys(cocktail);
  keys.forEach((key) => {
    if (key.includes('strIngredient') && cocktail[key]) {
      ingridients.push(cocktail[key]);
    } else if (key.includes('strMeasure') && cocktail[key]) {
      ingridientsMeasures.push(cocktail[key]);
    }
  });

  for (let i = 0; i < ingridients.length; i += 1) {
    const measure = ingridientsMeasures[i]
      ? ingridientsMeasures[i]
      : 'defined in instructions';
    ingridientsObj[ingridients[i]] = measure;
  }

  return ingridientsObj;
};

export default ingridientsHelper;
