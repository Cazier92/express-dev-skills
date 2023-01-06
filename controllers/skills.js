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
  // console.log(req.body)
  // req.body.bryceKnows = false
  (req.body.bryceKnows === 'on') ? req.body.bryceKnows = true : req.body.bryceKnows = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill
    })
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
  show,
}