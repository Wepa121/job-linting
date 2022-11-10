import {useState} from "react"
import {fetchApi} from "../../services/api";
import {queryJobs, insertJobsOne} from "../../data/query";
import { deleteJobsOne } from "../../data/query";
import { updateJobsOne } from "../../data/query";

function useJobsState() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async(filter) => {
    const data = await fetchApi(queryJobs(filter))
    setJobs(data.Jobs)
  }

  const insertJob = async(payload) => {
    const data = await fetchApi(insertJobsOne(payload))
    setJobs(jobs.concat([data.insert_Jobs_one]))
  }

  const deleteJob = async(id) => {
    const data = await fetchApi(deleteJobsOne(id))
    setJobs(jobs.filter(item => item.id !== data.delete_Jobs_by_pk.id ))
  }

  const updateJob = async(id, payload) => {
    const data = await fetchApi(updateJobsOne(id, payload))
    setJobs(jobs.map(item => id === item.id ? data.update_Jobs_by_pk : item ))
  }

  return {
    jobs,
    fetchJobs,
    insertJob,
    deleteJob,
    updateJob
  }
}

export default useJobsState