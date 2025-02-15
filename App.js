import React from 'react'; 
import Greeting from'./Greeting'
function App(){
const isLoggedIn =false;
return(
<div className="App">
<Greeting isLoggedIn={isLoggedIn}/>
</div>
)
}
export default App;
