import React, { createContext } from 'react';




const fName = createContext();
const lName = createContext();

const App = () => {
  return (
<>
<fName.Provider value={"ayesha usman engr kesi hu"} >



<lName.Provider value = {"pagal ho tum haha"} >

<ComponentA />
</lName.Provider >




</fName.Provider >

</>

  );
}

export default App;
export { fName , lName };
