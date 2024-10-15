import ChildA from './ChildA';
import React, { createContext } from 'react';

const DataContext = createContext();
const Data1Context = createContext();

function Main() {
  const name = "Ehtisham Shoukat Ali";
  const bachelor = "BS IT";

  return (
    <div>
      <DataContext.Provider value={name}>
        <Data1Context.Provider value={bachelor}>
          <ChildA />
        </Data1Context.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default Main;
export { DataContext, Data1Context };
