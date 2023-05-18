import React//,
//{ useState } 
from 'react';


function SearchPage() {
    async function getData() {
        const url = `https://api.petfinder.com/v2/animals?type=dog&location=68104&distance=50`;
    
        const userToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTG03NER0ZHozUlEwR0hjVzlmVm92RWY5R3RxSHBqeHdISWVOTVpVMlhXQXd1NkFFdyIsImp0aSI6IjJhY2U4ZjhhMzc2ODcyZGNhOTkxZTQ5YzAyMDRmN2M5ZmI4MDI0NjZjMzEwMDBhZTEwNzNhYzdlMzY1YmI5YmJjZjRjMGRhMjQwMzAzYzY3IiwiaWF0IjoxNjg0NDUyMzExLCJuYmYiOjE2ODQ0NTIzMTEsImV4cCI6MTY4NDQ1NTkxMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.XKKXDB97Is_sIVj08ZcnfjTS-D3MYg02IId5Tbl6ozXOJV9hCXQGjS3fHhHA4twyqg81xUcyicecxsCW9Chv6VTOGH0vA-jj1Y7LC2zUNvQuI6FbSNVsAGSZvwsThe0ApX5grqS1sN_2RU5D2wAzX35tnizt7I6rgQ6V7G2F0wgx0x1GyswWkQpl_D1RulEcVVc00ExZ-VzNoCYaqsX3QPfByg9-HldFcYDY2Cme8_HketYOSDM9XQFBTKOb9Tm2fv00uYpQHzDHbkJOxEHNmlX0cO-IW8UFFvDPwg-dODraDSmFuckq6QMf4Q88WlgP_6iiw81Lq9WKsHVbl0WxqA`
    
        const response = await fetch(url, 
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                    'Access-Control-Allow-Origin':'http://localhost:3000',
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding'
                }
            }
        );
        const data = await response.json();
        console.log(data);
    }
    

  return (
    <div>
        <button onClick={() => getData()}>Click Me!</button>
    </div>
  )
}

export default SearchPage;