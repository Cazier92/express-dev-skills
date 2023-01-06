import { Router } from 'express'
import { skills } from '../data/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('/skills/index', {
    skills
  }) 
})

export {
  router
}
