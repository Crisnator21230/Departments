const express = require('express');
const routes = express.Router();
const departaments = require('../json/departaments.json')

routes.get('/', (req,res)=> {
    res.json(departaments);
});

routes.get('./departmentId', (req, res)=> {
    const { departmentId} = req.params;
    const municipalities = departaments.filter((departament)=>
            departament['c_digo_dane_del_departamento']=== departmentId
        );
    res.json(municipalities);
});

module.exports = routes;