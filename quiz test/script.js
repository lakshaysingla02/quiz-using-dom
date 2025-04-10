function que2(){
    let div=document.querySelector("#que1");
     
    let que2 =document.querySelector("#que")
       
    div.after(que2)
    que2.style.display ="block"

    div.style.display="none"
   
 
}

function que3(){
    let qb3=document.querySelector("#qb3")
    que.style.display="none"
    qb3.style.display="block"
}

function submit() {
    let count = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1) {
        if (q1.value === "40") {
            count++;
        }
    } else {
        alert("You didn't answer Question 1");
    }

    if (q2) {
        if (q2.value === "27") {
            count++;
        }
    } else {
        alert("You didn't answer Question 2");
    }

    if (q3) {
        if (q3.value.toLowerCase() === "delhi") {
            count++;
        }
    } else {
        alert("You didn't answer Question 3");
    }

    document.body.innerHTML = `<h1>Your Score: ${count}/3</h1>`;

   
}


