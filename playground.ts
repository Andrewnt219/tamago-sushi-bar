type a = {
  duplicate: 'a' | 'b' | 'd';
  age: number;
};

type b = {
  duplicate: 'a' | 'b' | 'c';
  bProps: string;
};

// Must have all props in a AND b implemented
// duplicate is the intersect (i.e. a, b)
const c: b & a = {
  age: 2,
  duplicate: 'a',
  bProps: 'bProps',
};

// Must have at least ALL props in a OR b implemented
// duplicate is the intersect (i.e. a, b)
const d: b | a = {
  bProps: 'string',
  duplicate: 'c',
};

// Error because different duplicate set (a,b,c vs a,b,d)
interface c extends a, b {}

const { age }: c = c;
