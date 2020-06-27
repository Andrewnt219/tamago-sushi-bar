import React from 'react';

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

/* ----------------------------- RECORD ----------------------------- */
type e1 = Record<string, string>;

/* -------------------------------- TEMPLATE -------------------------------- */
function add<T>(a: T): string {
  return typeof a;
}

// function add<string>(a: string): string
const f1 = add('2');

/* ---------------------------------- UNION --------------------------------- */
type g1 = 'a' | 'b';
const g2: g1 = 'a';

/* -------------------------------- OVERWRITE ------------------------------- */
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type h1 = {
  overwrite: 'a';
  props1: '1';
  props2: '2';
};
type h2 = Exclude<h1, 'overwrite'>;
