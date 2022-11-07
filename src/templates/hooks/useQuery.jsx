import {useState, useEffect} from "react"

function useQuery(query) {
  const [jobs, setJobs] = useState([])

  useEffect(()=>{
    const fetchJobs = async () => { 
      const res = await fetch("https://hasura-production-45b5.up.railway.app/v1/graphql",{
      method: "POST", 
      headers:{
        "content-type" : "application/json",
        "x-hasura-admin-secret" : "wepawepa121"
      },
      body: JSON.stringify({
        query
      })
    })
    const data = await res.json()
    setJobs(data.data)
    }
    fetchJobs()

  }, [query])

  return jobs
}

export default useQuery