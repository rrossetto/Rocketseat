/********************************************************************************/
var element_btT = document.querySelector("button#btT");
var element_btM = document.querySelector("button#btM");
var element_btF = document.querySelector("button#btF");

var element_ul  = document.querySelector("ul.list-group");

/*Definitions*/
var users = [
    {
        nome: 'Diego',
        idade: 23,
        sexo: 'M',
    },
    {
        nome: 'Gabriela',
        idade: 18,
        sexo: 'F',
    },
    {
        nome: 'José',
        idade: 30,
        sexo: 'M',
    },
    {
        nome: 'Maria',
        idade: 27,
        sexo: 'F',
    }
];

/********************************************************************************/
function renderUsers(users)
{
    element_ul.innerHTML = '';

    //Percorre lista
    for(user of users)
    {
        var pos = users.indexOf(user);
        
        var element_user_li = document.createElement("li");
        var node_user_text  = document.createTextNode(user.nome + " " + "(" + user.sexo + ")" + " ");

        var element_link = document.createElement("a");
        var node_link = document.createTextNode("Excluir");                
        
        //setAttribute
        element_user_li.setAttribute("class","list-group-item");
        element_link.setAttribute("href","#");
        element_link.setAttribute("onclick","deleteUser(" + pos + ")");

        //Append
        element_link.appendChild(node_link);
        element_user_li.appendChild(node_user_text);

        element_user_li.appendChild(element_link);
        element_ul.appendChild(element_user_li);
    }
}

function deleteUser(pos) {
    users.splice(pos, 1);
    renderUsers(users);
}

/********************************************************************************/
function isMasculino(obj) {
    if (obj.sexo == 'M') {
        return 1;
    }
    else 
    {
        return 0;
    }                
}

function isFeminino(obj) {
    if (obj.sexo == 'F') {
        return true;
    }
    else
    {
        return false;
    }                
}

/********************************************************************************/
btM.onclick = function() {
    var filtered = users.filter(isMasculino);
    renderUsers(filtered);
}       

btF.onclick = function() {
    var filtered = users.filter(isFeminino);
    renderUsers(filtered);    
}      

btT.onclick = function() {    
    renderUsers(users);    
}
