export const fetchApi = async (query) => { 
  const res = await fetch(process.env.REACT_APP_HASURA_URL,{
    method: "POST", 
    headers:{
      "content-type" : "application/json",
      "x-hasura-admin-secret" : process.env.REACT_APP_HASURA_ADMIN_SECRET
    },
    body: JSON.stringify({
      query
    })
  })
  const data = await res.json()
  return data.data
}
