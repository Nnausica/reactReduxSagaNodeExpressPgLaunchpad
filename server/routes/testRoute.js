const router = require( 'express' ).Router();

router.get( '/', ( req, res )=>{
    console.log( 'test GET:', req.body );
    res.send( 'meow' )
})

router.post( '/', ( req, res )=>{
    console.log( 'test POST:', req.body );
    res.send( 'woof' )
})

module.exports = router;