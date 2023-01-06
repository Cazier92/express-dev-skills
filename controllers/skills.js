// import { skills } from '../data/skills.js'
import { Skill } from "../models/skills.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
  }

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.bryceKnows = true
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newSkill as new,
  create,
}