
var v=prompt("Enter a number");
var n=v;

function check(v){
    return !isNaN(v) && !isNaN(parseFloat(v));
}

check(v);



while (!check(v)){
    v=prompt("Please enter another number");
}

var v=parseInt(v);

document.getElementById("ye").innerHTML="Number inputted " + v;

var r= "";

if(v%2==0){
    for(let i=v;i>=1;i--){
        for(let j=1;j<=i;j++){
            r+= i + " ";
        }
    r += "<br>";
    }
}
else{
    for(let i=v;i>=1;i--){
            for(let j=1;j<=v;j++){
                r+= i + " ";
        }
        r += "<br>";
    }
}

document.getElementById("shape").innerHTML=r;

function add(){
    var cn=document.getElementById("input").value;

    if(cn==""){
        alert("Enter a name.");
        return;
    }

    if(contacts.length<7){
        contacts.push(cn);
        update();
        document.getElementById("input").value = "";    
    }
    else {
        contacts.shift();
        update();
        contacts.push(cn);
        update();
        document.getElementById("input").value = "";
    }
}

const contacts=[];
function update(){
    document.getElementById("list").innerHTML = contacts.join(" " + "<br>" );
}
function remove(){
    if(contacts.length>0){
        contacts.pop();
        update();
    }
    else{
        alert("No contacts.")
    }

}
