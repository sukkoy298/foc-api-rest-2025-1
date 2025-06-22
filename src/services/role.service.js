const {roles} = require('../models/role.model');

class RoleService {
    constructor() {
        this.roles = roles;
    }

    getAll() {
        return roles;
    }

    getOne=(id)=>{
        const role = this.roles.find((x)=>{
            if(x.id==id){
                return true
            }
        });
        return role;
    }

    getname=(name)=>{
        const role = this.roles.find((x)=>{
            if(x.name===name){
                return true
            }
        });
        return role;
    }

    getIndice=(id)=>{
        const role = this.roles.findIndex((x)=>{
            if(x.id==id){
                return true
            }
        });
        return role;
    }

    created=(role)
    

    getCountRoles() {
        return roles.length;
    }
}
    module.exports = {
        RoleService
    };

