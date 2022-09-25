import React from 'react';
import endPoints from '../endPoints';

export default function Home() {
  //   const [movies, setMovies] = useState();
  const { trending } = endPoints;
  trending().then((res) => {
    console.log(res);
  });

  return (
    <div>
      <h1 className="text-white">Sonet</h1>
    </div>
  );
}
