import { data } from './abbreviation.json';
import { fake, FakeOptions } from './core/core';

/**
 * Generate a random abbreviation.
 *
 * @category text
 *
 * @example
 *
 * randAbbreviation()
 *
 * @example
 *
 * randAbbreviation({ length: 10 })
 *
 */
export function randAbbreviation<O extends FakeOptions = never>(options?: O) {
  console.log('coucou');
  return fake(data, options);
}
