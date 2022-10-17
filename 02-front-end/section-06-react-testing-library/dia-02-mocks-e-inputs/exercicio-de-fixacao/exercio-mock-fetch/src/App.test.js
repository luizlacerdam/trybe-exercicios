// App.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: '7h3oGtrOfzl',
    joke: 'Hello, world?!',
    status: 200,
  };


  // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(joke),
      });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  const button = await screen.findByText('New Joke');
  
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke2),
  });
  
  userEvent.click(button);
  const newjoke = await screen.findByText('Hello, world?!');
  expect(newjoke).toBeInTheDocument();
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument(); //?
  expect(newjoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });


});
