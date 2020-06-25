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

type a = {
  duplicate: 'a' | 'b' | 'd';
  age: number;
};

type b = {
  duplicate: 'a' | 'b' | 'c';
  bProps: string;
};

// Must have all props in a AND b implemented
// duplicate is the intersect (i.e. a, b)
const c: b & a = {
  age: 2,
  duplicate: 'a',
  bProps: 'bProps',
};

// Must have at least ALL props in a OR b implemented
// duplicate is the union (i.e. a, b, c, d)
const d: b | a = {
  bProps: 'string',
  duplicate: 'c',
};

/* ----------------------------- UNION & STRING ----------------------------- */
type Fruits = 'Orange' | 'Apple' | 'Banana';

const myFruit: Fruits = 'Apple';

const myString: string = myFruit;
