const express = require("express")

const router = express.Router();

const queries = require("../db/queries")

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next()
    next(new Error('Invalid ID'))
}

function validSticker(sticker){
    const hasTitle = typeof sticker.title == 'string' && sticker.title.trim() != '';
    //const hasUrl = typeof sticker.url == 'string' && sticker.url.trim() != '';
    return hasTitle
}

router.get('/test', (req,res) => {
    queries.getAll().then(stickers =>{
        res.json(stickers)
    })
})

router.get('/:id', isValidId, (req, res, next) =>{
   queries.getOne(req.params.id).then(sticker =>{
       if(sticker){
        res.json(sticker)
       } else {
           next()
       }
    })
})

router.post('/add',  (req, res, next) =>{
  if(validSticker(req.body)){
      queries.create(req.body).then(stickers => {
          res.json(stickers[0])
      })
  } else {
     // next(new Error('Invalid sticker'))
  }
})

router.put('/edit/:id', isValidId, (req, res, next) => {
    if(validSticker(req.body)){
        queries.update(req.params.id, req.body).then(stickers => {
            res.json(stickers[0])
        })
    } else {
        next(new Error('Invalid sticker'))
    }
})

router.delete('/del/:id', isValidId, (req, res, next) => {
    queries.delete(req.params.id).then(() => {
      res.json({
          delete: true
      })  
    })
})


module.exports = router