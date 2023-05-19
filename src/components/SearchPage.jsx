import React//,
//{ useState } 
from 'react';

import {getData} from '../functions/getData';

function SearchPage() {  
  return (
    <div>
        <button onClick={() => getData()}>Click Me!</button>
    </div>
  )
}

export default SearchPage;