let projects = [
    {pro_num: "001", pro_name: "project 1", pro_class: "Mechanical Desing" },
    {pro_num: "002", pro_name: "project 2", pro_class: "Electrical"}, 
    {pro_num: "003", pro_name: "project 3", pro_class: "Code"}
];

document.getElementById("show").textContent = "class V";

function finde(SortBy){
    while (SortBy !== "Class" && SortBy !== "Number" && SortBy !== "Name (A-Z)"){
    }

    if (srch_data == "Class"){
        document.getElementById("show").textContent = "class V";
        document.getElementById("show").textContent = document.getElementById("class").textContent;
    }

        else if(srch_data == "Number"){
            document.getElementById("show").textContent = "num V";
            document.getElementById("show").textContent = document.getElementById("num").textContent;
        }

            else if(srch_data == "Name (A-Z)"){
            document.getElementById("show").textContent = 'Name V';
            document.getElementById("show").textContent = document.getElementById("name").textContent;
            }

            else {
                document.getElementById("show").textContent = "Sorry, we could find something with this tag, try again ;)";
            }
};


document.getElementsById("class").onclick = function(){    
    finde("Class");
};

document.getElementById("num").onclick = function(){    
    finde("Number");
};

document.getElementById("name").onclick = function(){    
    finde("Name (A-Z)");
};

console.log();