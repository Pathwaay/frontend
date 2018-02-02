const buildJobs = jobs => {
  const jobsObj = {}

  jobs.forEach(job => {
    jobsObj[job.id] = job
  })

  return jobsObj
}

export {
  buildJobs
}
