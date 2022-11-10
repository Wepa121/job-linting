export const queryJobs = `
  query{
    Jobs (order_by: {
      company: asc
    }) {
      id
      company
      logo
      new
      featured
      position
      role
      level
      created_at
      contract
      location
      languages
      tools
    }
  }
  `

export const insertJobsOne = (obj) => {
  const {company, logo, newX, featured, position, role, level, contract, location, languages, tools} = obj
  
  return `
  mutation{
    insert_Jobs_one(object:{
      company: "${company}",
      logo: "${logo}",
      new: "${newX}",
      featured: "${featured}",
      position: "${position}",
      role: "${role}",
      level: "${level}",
      contract: "${contract}",
      location: "${location}",
      languages: "${languages}",
      tools: "${tools}"
    }){
      id
      company
      logo
      new
      featured
      position
      role
      level
      created_at
      contract
      location
      languages
      tools
    }
  }
  `
}

export const deleteJobsOne = (id) => `
  mutation{
    delete_Jobs_by_pk(id: ${id}) {
      id
    }
  }
  `
export const updateJobsOne = (id, obj) => {
  const {company, logo, newX, featured, position, role, level, contract, location, languages, tools} = obj

  return `
  mutation{
    update_Jobs_by_pk(pk_columns: {id: ${id}}, _set: {
      company: "${company}",
      logo: "${logo}",
      new: "${newX}",
      featured: "${featured}",
      position: "${position}",
      role: "${role}",
      level: "${level}",
      contract: "${contract}",
      location: "${location}",
      languages: "${languages}",
      tools: "${tools}"
    }) {
      id
      company
      logo
      new
      featured
      position
      role
      level
      created_at
      contract
      location
      languages
      tools
    }
  }
  `
}