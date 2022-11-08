import photosnap from "assets/photosnap.svg"
import manage from "assets/manage.svg"
import account from "assets/account.svg"
import myhome from "assets/myhome.svg"
import studios from "assets/loop-studios.svg"
import faceit from "assets/faceit.svg"
import shortly from "assets/shortly.svg"
import insure from "assets/insure.svg"
import eyecam from "assets/eyecam-co.svg"
import company from "assets/the-air-filter-company.svg"

import React from 'react'

function Image({logo}) {
  let photo = ""
  if(logo === './images/photosnap.svg') photo = photosnap
  if(logo === './images/manage.svg') photo = manage
  if(logo === './images/account.svg') photo = account
  if(logo === './images/myhome.svg') photo = myhome
  if(logo === './images/loop-studios.svg') photo = studios
  if(logo === './images/faceit.svg') photo = faceit
  if(logo === './images/shortly.svg') photo = shortly
  if(logo === './images/insure.svg') photo = insure
  if(logo === './images/eyecam-co.svg') photo = eyecam
  if(logo === './images/the-air-filter-company.svg') photo = company

  return (
    <img src = {photo} alt= "photos" className = "card-info-image"/>
  )
}

export default Image