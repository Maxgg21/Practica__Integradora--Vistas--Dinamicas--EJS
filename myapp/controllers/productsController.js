const platos = require('../database');

module.exports = {

    index: (req, res) => {
        return res.render("detalleMenu", {
            platos
        });
    },
    buscar: (req, res) => {
        let platoBuscado = req.params.id;
        let platoEncontrado = platos.find(plato => plato.id == Number(platoBuscado))
        if(typeof platoEncontrado != 'undefined'){
            res.render('detalleMenu', {
                plato: platoEncontrado
            }) 
        } else {
            res.send('Plato tipoco')
        }
   
}
}