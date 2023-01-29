const platos = require('../database');


module.exports = {

    index: (req, res) => {
        return res.render("detalleMenu", {
            platos
        });
    },
    buscar: (req, res) => {
        let platoBuscado = req.params.id;
        let platoEncontrado = platos.filter(plato => plato.id == Number(platoBuscado))
        if(typeof platoEncontrado == 'undefined'){
            res.render('Plato tipoco')
        } else {
            res.render('detalleMenu', {
                platos: platoEncontrado
        }) 
    }
   
}
}