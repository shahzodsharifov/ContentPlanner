import React from "react";
import { DetailWrap } from "./styles/DetailWrap";
import { useLocation } from 'react-router-dom'
import { gql, useMutation, useQuery } from '@apollo/client';
import { Navigation } from "./components/Navigation";


const GET_PLAN = gql`
query GetPlan($id: Int!) {
    plan(id: $id) {
      id
      title
      description
      platform
    }
 }
`

export const ComponentDetails = () => {
  

    const location = useLocation()
    const planID:any = location.state;
    console.log(planID)

    const {loading,data} = useQuery(GET_PLAN,{
        variables: {id: planID},
        pollInterval: 500
    })
    if(loading) {
        return <h1>Loading</h1>
    } else {
        return (
            <DetailWrap>
            <Navigation/>
           <div className="details">
           <h1 className="planTitle">{data.plan.title}</h1>
            <p className="planDesc">{data.plan.description}</p>
           </div>
            </DetailWrap>
        )
    }
}