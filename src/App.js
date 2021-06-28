import React from 'react';

const loading = (
  <div >
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <div>
      <React.Suspense fallback={loading}>

      </React.Suspense>
    </div>
  );
}

export default App;
