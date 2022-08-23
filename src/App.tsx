import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Card } from "./components/Card"
import { NewPost } from './components/NewPost';
import { BodydWrap } from './styles/bodyWrap';
import { CardGridWrap } from './styles/CardGridWrap';
import { Link } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { AppWrap } from './styles/AppWrap';


export interface Plan {
  id: number;
  title: string;
  description: string;
  platform: string;
  deadline: string;
  createdAt: Date;

}

export interface Plans {
  products: [Plan]
}

const GET_PLANS = gql`
query GetPlans {
  plans {
   id
   title
   description
   platform
   deadline
   createdAt 
  }
}

`


function App() {
  const {loading, data} = useQuery(GET_PLANS, {
    pollInterval: 500,
  })

  const [isOpen, setOpen] = useState(false)
  console.log(data)



  return (
    <AppWrap>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" onChange={(e) =>{
          setProductName(e.target.value)
        }}/>
        <input type="number" placeholder="Quantity"  onChange={(e) =>{
          setProductQuantity(parseInt(e.target.value))
        }}/>
        <button type='submit'>Save</button>
        <div className='table'>
         {loading ? <h1>Loading</h1> : data.products.map((product:Product) => 
          <h1 key={product.id}>{product.name}</h1>)}
        </div>
   
      </form> */}
      {/*  */}

      <Navigation/>
      <BodydWrap>
        <div className='bodyHeader'>
        <h1 className='bodyStatus'>Content Planlar</h1>
        <button className='newPlanBtn' onClick={()=> {setOpen(true)}}>Yangi Plan</button>
        </div>

        

        <CardGridWrap>
        
        {loading ? <h1>Loading...</h1> : data.plans.map((plan: Plan) => 
           <Card id={plan.id}  key={plan.id} title={plan.title} description={plan.description} platform={plan.platform} deadline={plan.deadline}/>
          )}
        </CardGridWrap>
       <div style={{display : isOpen ? "block" : "none"}}>
       <NewPost setOpen={setOpen} />
       </div>
      </BodydWrap>
    </AppWrap>
  );
}

export default App;
