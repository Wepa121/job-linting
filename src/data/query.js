export const queryJobs = `
  query{
    Jobs {
      id
      company
      tools
      languages
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
      tools
      languages
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
