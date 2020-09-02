import * as tools from '../src/tools';

describe('Character', () => {
  test('should make an instance of new character', () => {
    const initialState = {brawn: 2, brains: 4, beauty:3}
    const myCharacter = tools.storeState(initialState);
    expect(myCharacter()).toMatchObject({brawn: 2, brains: 4, beauty:3});
  });
});

