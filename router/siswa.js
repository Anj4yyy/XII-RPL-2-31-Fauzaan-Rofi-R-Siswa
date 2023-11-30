const express = require('express')
const router = express.Router()

const siswacontroller = require('../controller/Siswa')

  router.get('/siswa', siswacontroller.index)

  router.post('/siswas', siswacontroller.store)
  
  router.put('/siswa/:id', siswacontroller.update)

  router.delete('/siswa/:id', siswacontroller.delete)

  module.exports = router