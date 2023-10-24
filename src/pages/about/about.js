import * as React from 'react';

export default function Component() {
  const [c, setC] = React.useState(0)
  return (<div>
    <h2>About</h2>
    <p>this page render page and loader data in same time!</p>
    <p>{c}</p>
    <p onClick={() => { setC(c + 1) }}>c++</p>
  </div>

  );
}

Component.displayName = 'AboutPage';
