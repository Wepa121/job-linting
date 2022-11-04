async function useMutation(query) {
  const res = await fetch("https://hasura-production-45b5.up.railway.app/v1/graphql",{
    method: "POST", 
    headers:{
      "content-type" : "application/json",
      "x-hasura-admin-secret" : "wepawepa121"
    },
    body: JSON.stringify({
      query: query
    })
  })
  const data = await res.json()
  return data
}

export default useMutation