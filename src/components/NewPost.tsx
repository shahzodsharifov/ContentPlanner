import React, { Dispatch, SetStateAction, useState } from "react";
import { NewPostWrap } from "../styles/NewPostWrap";
import { gql, useMutation, useQuery } from '@apollo/client';
import e from "express";
import { FormEvent } from "react";





interface NewPostProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
   
}



const CREATE_PRODUCT = gql`
mutation CreateProduct($deadline: String!, $platform: String!, $description: String!, $title: String!) {
  createPlan(deadline: $deadline, platform: $platform, description: $description, title: $title)
}

`

export const NewPost: React.FC<NewPostProps> = ({setOpen,}) => {

  const [createPlan] = useMutation(CREATE_PRODUCT)

  const [planTitle, setPlanTitle] = useState("")
  const [planDesc, setPlanDesc] = useState("")
  const [planPlatform, setPlanPlatform] = useState("")
  const [planDeadline, setPlanDeadline] = useState("")

    
  const submitForm = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(planPlatform == ""){
      setPlanPlatform("Instagram")
    }
    console.log(planPlatform)
    console.log(planTitle, planDesc, planPlatform, planDeadline);
    createPlan({variables: {deadline: planDeadline, platform: planPlatform,
    title: planTitle, description : planDesc}})

    setPlanTitle("")
    setPlanDesc("")
    setPlanDeadline("")
    setOpen(false)  

  }
    return (
        <NewPostWrap>
          <div className="newPostContent">
            <form onSubmit={ (event)=> { submitForm(event)}}>
            <h1>Yangi Kontent Plan</h1>
          <input type="text" value={planTitle} className="postTitleInput" placeholder="Sarlavha..."
           onChange={(e) => {
            setPlanTitle(e.target.value)
           }} />
          <textarea className="postDescInput" value={planDesc} placeholder="Fikrlaringizni Yo'zing"
            onChange={(e) => {
              setPlanDesc(e.target.value)
            }}
          />
          
          <div className="choices">

          <div>
            <p>Qaysi platformaga</p>
          <select defaultValue={"Instagram"} className="postTypeSelect" onChange={(e) => {
            setPlanPlatform(e.target.value)
          }}>
           <option value="Instagram">Instagram</option>
           <option value="Telegram">Telegram</option>
           <option value="YouTube">YouTube</option>
           <option value="Twitch">Twitch</option>
           <option value="VK">Vkontakte</option>
           </select>
          </div>

          <div>
            <p>Deadline</p>
            <input type="date" value={planDeadline} className="newPostDate" onChange={(e) => {
              setPlanDeadline(e.target.value)
            }}/>
          </div>

          </div>

          <div className="btnActs" >
            <button className="subBtn" type="submit">
                Yaratish
            </button>

            <button type="button" className="cancelBtn" onClick={() => {setOpen(false)}}>
            Bekor Qilish
            </button>
          </div>
            </form>
          </div>
        </NewPostWrap>
    )
}