const router = require('express').Router()
const pendudukController = require('../controller/penduduk')

router.post('/insert', (req, res) => {
    pendudukController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    pendudukController.showALLData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/getbyid/:id', (req, res) => {
    pendudukController.showALLDataById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    pendudukController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    pendudukController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router