type c = { key: string };
type implicitFunctionSignature = (obj: c) => c;

const implicitReturnFunction: implicitFunctionSignature = (obj) => {
  // valid EXCESS key(s)
  return { ...obj, unknownKey: 'value' };
};
const explicitReturnFunction1 = (obj: c): c => {
  // Error
  return { ...obj, unknownKey: 'value' };
};

function explicitReturnFunction2(obj: c): c {
  // Error
  return { ...obj, unknownKey: 'value' };
}
