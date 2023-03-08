class User {
    constructor(name, email, avatar, role, login){
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.role = role;
        this.login = login;

    }
    Role(){
        return this.role == 'admin' ? 'ადმინი' : 'მომხმარებელი';
    }
    Login(){
        return this.login
    }
    
}

import { myUserObject } from "./modules/UserConfig.js";

User.myUserObject = myUserObject;

let user = new User('Anna', 'berishvili@gmail.com', 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', User.myUserObject.role, User.myUserObject.login );


document.querySelector('.name').innerHTML = user.name
document.querySelector('.email').innerHTML = user.email
let userRole = document.querySelector('.role');
userRole.innerHTML = user.Role();

if(user.Login()){
    userRole.style.border = "medium solid green"
}else{
    userRole.style.border = "medium solid red"
}