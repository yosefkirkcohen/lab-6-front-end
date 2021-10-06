import { render, screen } from '@testing-library/react';
import { getPlayer } from './fetch-utils.js'

test('get a player', async () => {

  const expected = {
    category: expect.any(String),
    category_id: expect.any(Number),
    worldchampion: expect.any(Boolean),
    name: expect.any(String),
    image: expect.any(String),
    rating: expect.any(Number),
    country: expect.any(String),
    id: expect.any(Number)
  }

  const response = await getPlayer(1)

  expect(response[0]).toEqual(expected)
});
