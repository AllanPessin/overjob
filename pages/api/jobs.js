import jobs from '../../src/docs/jobs.json'

export default (req, res) => {
  const { id } = req.body

  // if (req.query.secret === 'over') {
  if (req.method === 'GET') {
    if (id) {
      const [job = {}] = jobs.filter(job => job.id == id)
      res.status(200).json({
        error: false,
        jobs: job
      })
    } else {
      res.status(200).json({
        error: false,
        jobs
      })
    }
  } else {
    res.status(400).josn({
      error: true,
      message: "Método não suportado"
    })
  }
}
// }