const {response, request} = require('express');
const {RoleService} = require('../services/role.service');


class RoleController {
  constructor() {
    console.log("instancia del controlador de roles");
    this.role_service = new RoleService();
  }

  getAll = (req = request, res = response) => {
    const roles = this.role_service.getAll();
    if (!roles || roles.length === 0) {
      return res.status(404).json({
        message: "Registro no encontrado"
      });
    } else {
return res.status(200).json({
        message: "Registros encontrados"
      });
    }

  }

  getOne = (req = request, res = response) => {
    const { id } = req.params;
    const role = this.role_service.getOne(Number(id));
    if(!role){
      return res.status(200).json({
        msj: "registros encontrados"
      })
    }else{
     return res.status(200).json({
        msj: "Registro encontrado",
        role
      })
    }
  }


    create=(req=request, res=response) => {
        const {name} = req.body;
        const data={
          name
        }
        const role = this.role_service.created(data)
        return res.status(201).json({
          msj: "Registrado Existosamente",
          role
        })
        }
    

    updated=(req=request, res=response) => {
        const {id} = req.params;
        const {name} = req.body;
        const data={
          name
        }
        const role = this.role_service.updated(Number(id), data)
        return res.status(201).json({
          msj: "Actualizado Exitosamente",
          role
        })
       }

    deleted=(req = request, resd)

    
}

module.exports = {
  RoleController
}