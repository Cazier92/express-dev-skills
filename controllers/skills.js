import { skills } from '../data/skills.js'

function index(req, res) {
  res.render('skills/index', {
    skills
  })
}

export {
  index
}