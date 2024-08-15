import { cn } from './utils';

describe('utils', () => {
  it('cn should work', () => {
    expect(cn('a', 'b')).toEqual('a b');
  });
});
