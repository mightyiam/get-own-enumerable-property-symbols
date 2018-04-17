export default (object: object): symbol[] => Object
  .getOwnPropertySymbols(object)
  .filter((keySymbol): boolean => object.propertyIsEnumerable(keySymbol))
