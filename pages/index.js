import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`Hello functions are coming...`);

   let fe = fetch("/.netlify/functions/date")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return json
      })
  });
console.log(fe)
  return <div>Welcome fe</div>;
}

export default Home;
