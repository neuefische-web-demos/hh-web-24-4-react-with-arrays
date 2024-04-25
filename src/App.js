import { nanoid } from "nanoid";

const jokes = [
  {
    joke: "Thanks for explaining the word “many” to me, it means a lot.",
  },
  {
    joke: "Why did Adele cross the road? To say hello from the other side.",
  },
  {
    joke: "What kind of concert only costs 45 cents? A 50 Cent concert featuring Nickelback.",
  },
  {
    joke: "To the person who invented zero, thanks for nothing.",
  },
];

const jokesWithId = jokes.map((joke) => {
  return { ...joke, id: nanoid(5) };
});

export default function App() {
  return (
    <>
      <h1>React Arrays</h1>
      <ul>
        {jokesWithId.map((joke) => {
          console.log(joke);
          return (
            <li key={joke.id}>
              id: {joke.id} - {joke.joke}
            </li>
          );
        })}
      </ul>
    </>
  );
}
