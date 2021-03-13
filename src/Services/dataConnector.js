import React, {useState} from 'react'
import http from './http-common'

const getClients = async (clientID) => {
  
 return await http.get(`/rest/clients/${clientID}?metafields=true&fetchchildren=true`)
}

const getSites = async (clientID) => {
  
 return await http.get(`/rest/sites?q={"site_clientID": {"_id": {"${clientID}"}}}`)
}

const getAssets = async (clientID, siteID) => {
  
 return await http.get(`/rest/assets?q={"asset_site_ID": {"_id": {"${siteID}"}}&"asset_clientID": {"_id": "${clientID}"}}`)
}


export default {getClients, getSites, getAssets}