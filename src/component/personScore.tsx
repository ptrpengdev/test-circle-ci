import { getPerson } from './getPerson';
import { useEffect, useState } from 'react';

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // async function getThePerson() {
    //   const person = await getPerson();
    //   console.log(person);
    // }

    // getThePerson();
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
    });
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  } else
    return (
      <div>
        <h3>
          {name}, {score}
        </h3>
        <button>Add</button>
        <button>Subtract</button>
        <button>Reset</button>
      </div>
    );
}
