const proyectos = Array.from(document.querySelectorAll(".project"));

function compareFnName(a, b){
    return a.dataset.name.localeCompare(b.dataset.name)
};

function compareFnClass(a, b){
    return a.dataset.class.localeCompare(b.dataset.class)
};

function compareFnNum(a, b){
    return Number(a.dataset.num) - Number(b.dataset.num)
};

function order(element){
    document.querySelector(".projects_page").appendChild(element);
};


function finde(SortBy){
    if (SortBy == "Class"){
        proyectos.sort(compareFnClass)
        proyectos.forEach(order);
    }

        else if(SortBy == "Number"){
            proyectos.sort(compareFnNum)
            proyectos.forEach(order);
        }

            else if(SortBy == "Name_(A-Z)"){
                proyectos.sort(compareFnName)
                proyectos.forEach(order);
            }

            else {
                document.getElementById("show").textContent = "Sorry, we could find something with this tag, try again ;)";
            }
};


document.getElementById("class").onclick = function(){    
    finde("Class");
};

document.getElementById("num").onclick = function(){    
    finde("Number");
};

document.getElementById("name").onclick = function(){    
    finde("Name_(A-Z)");
};

