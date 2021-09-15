import ingridientsHelper from '../helpers/ingridientsHelper';

describe('ingridientsHelper', () => {
  const cocktail = {
    idDrink: 'Brazil',
    strDrink: 'Margarita',
    strCategory: 'Ordinary Drink',
    strIBA: 'Contemporary Classics',
    strAlcoholic: 'Alcoholic',
    strGlass: 'Cocktail glass',
    strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
    strIngredient1: 'Tequila',
    strIngredient2: 'Triple sec',
    strIngredient3: 'Lime juice',
    strIngredient4: 'Salt',
    strMeasure1: '1 1/2 oz ',
    strMeasure2: '1/2 oz ',
    strMeasure3: '1 oz ',
    strMeasure4: null,
  };

  const ingridients = {
    Tequila: '1 1/2 oz ',
    'Triple sec': '1/2 oz ',
    'Lime juice': '1 oz ',
    Salt: 'defined in instructions',
  };

  it('returns object with key as a ingridient and value as a measure', () => {
    expect(ingridientsHelper(cocktail)).toEqual(ingridients);
  });

  it('does not return empty object', () => {
    expect(ingridientsHelper(cocktail)).not.toEqual({});
  });
});
