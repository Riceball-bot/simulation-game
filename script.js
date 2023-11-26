let scaleXofcharacter = 1
let test = null
let maincharacter = document.querySelector("#move")

setInterval(() => {
    maincharacter.style.transform = `scaleX(${scaleXofcharacter})`
}, );

function movementvisual(mouse){
let movementInterval = setInterval(() => {
    if(i>5){
        i = 0
    }
    i += 1
    if(keyEvent.key == "ArrowRight" && keyEvent.down){
        scaleXofcharacter = 1
        // maincharacter.style.transform = `scaleX(${scaleXofcharacter})`
        maincharacter.src = `./Image/move_${i}.png`
        clearInterval(movementInterval)
    }else if(keyEvent.key == "ArrowLeft" && keyEvent.down){
        scaleXofcharacter = -1
        // maincharacter.style.transform = `scaleX(${scaleXofcharacter})`
        maincharacter.src = `./Image/move_${i}.png`
        clearInterval(movementInterval)
    }else if(mousedown === 1){
        scaleXofcharacter = 1
        // maincharacter.style.transform = `scaleX(${scaleXofcharacter})`
        maincharacter.src = `./Image/move_${i}.png`
        clearInterval(movementInterval)
    }else if(mousedown === 2){
        scaleXofcharacter = -1
        // maincharacter.style.transform = `scaleX(${scaleXofcharacter})` 
        maincharacter.src = `./Image/move_${i}.png`
        clearInterval(movementInterval)
    }
}, );
}

function overlap(firstObject,secondObject){
    const firstObjectDims = firstObject.getBoundingClientRect();
    const secondObjectDims = secondObject.getBoundingClientRect();
      return !(firstObjectDims.right < secondObjectDims.left || 
          firstObjectDims.left > secondObjectDims.right || 
          firstObjectDims.bottom < secondObjectDims.top || 
          firstObjectDims.top > secondObjectDims.bottom)
}

let windowIHcenter = 0
let windowIWcenter = 0
let backgroundleft2 = 0
let backgroundleft3 = 0

windowIHcenter = window.innerHeight / 2

windowIWcenter = window.innerWidth / 2

//move of character keyboard//
let keyEvent = {
    key: '',
    down: false
};

let backgroundleft = 0;
let objectleft = 0;
let popupleft = 0;
let charVelocity = 0;
let objectVelocity = 0;
let popupVelocity = 0;
let slipperiness = 35;//Used to set the time of loop for the charVelocity
let object = document.querySelector(".object");
let background = document.querySelector("#background")
let popup = document.querySelector("#pop-up")
let conestatusright = false
let conestatusleft = false

setInterval(() => {
    if(overlap(maincharacter,coneleft)){
        conestatusleft = true
    }else if(overlap(maincharacter,coneright)){
        conestatusright = true
    }else{
        conestatusright = false
        conestatusleft = false
    }
}, );

document.addEventListener('keydown', e => {
    keyEvent.key = e.key
    keyEvent.down = true;
})

document.addEventListener('keyup', e => {
    keyEvent.down = false;
})

setInterval(() => {
    if(keyEvent.key == "ArrowRight" && keyEvent.down && conestatusright === false){
        charVelocity = -3
        objectVelocity = -3
        popupVelocity = -3
        movementvisual()
    }else if(keyEvent.key == "ArrowLeft" && keyEvent.down && conestatusleft === false){
        charVelocity = 3
        objectVelocity = 3
        popupVelocity = 3
        movementvisual()
    }
    backgroundleft += charVelocity
    objectleft += objectVelocity
    popupleft += popupVelocity

    background.style.left = backgroundleft + "px"
    object.style.left = objectleft + "px"
    popup.style.left = popupleft + "px"
}, );


let pressInterval;
let mousedown = 0

document.onmouseup= (event) => {
    clearInterval(pressInterval);
};

document.querySelector("#right").onmousedown = (event) => {
    if(conestatusright === false){
        mousedown = 1
        pressInterval = setInterval(() => {
        charVelocity = -3
        objectVelocity = -3
        popupVelocity = -3
        movementvisual()
    })
    }
};

document.querySelector("#left").onmousedown = (event) => {
    if(conestatuseleft === false){
        mousedown = 2
        pressInterval = setInterval(() => {
            charVelocity = 3
            objectVelocity = 3
            popupVelocity = 3
            movementvisual()
        })
    } 
};

setInterval(() => {
    if(charVelocity < 0 ){
        charVelocity++;
    }else if(charVelocity > 0){
        charVelocity--;
    }
    if(objectVelocity < 0){
        objectVelocity++;
    }else if(objectVelocity > 0){
        objectVelocity--;
    }

    if(popupVelocity < 0){
        popupVelocity++;
    }else if(popupVelocity > 0){
        popupVelocity--;
    }
}, slipperiness);

let i=0;

//move of character keyboard/

// phone setting and computer setting

document.querySelector("#selectdevice2").onclick = (event) => {
    document.querySelector("#rule2-2").style.display = "block"
    document.querySelector("#rule").style.display = "none"
};

document.querySelector("#ok-2").onclick = (event) => {
    document.querySelector("#rule2-2").style.display = "none"
    document.querySelector(".object").style.display = "block"
    maincharacter.style.display = "block"
    document.querySelector("#inventory").style.display = "block"
    document.querySelector("#pop-up").style.display = "block"
    explanation.style.display = "block"
    setTimeout(() => {
        explanation.style.display = "none"
    }, 8000);
};



document.querySelector("#leftimg").style.top += windowIHcenter + "px"
document.querySelector("#rightimg").style.top += windowIHcenter + "px"

// phone setting and computer setting

//text

//text
let question1 = document.querySelector("#question1")
let caution = document.querySelector("#caution")

question1.style.fontSize = window.innerHeight / 15 + "px"
caution.style.fontSize = window.innerHeight / 15 + "px"

//object
let inventory = document.querySelector("#inventory")
let can = document.querySelector("#can")
let burnable = document.querySelector("#burnable")
let nonburnable = document.querySelector("#non-burnable")
let papers = document.querySelector("#papers")
let tissue = document.querySelector("#tissue")
let bag = document.querySelector("#bag")
let handwarmer = document.querySelector("#handwarmer")
let glass = document.querySelector("#glass")
let ruler = document.querySelector("#ruler")
let leftover = document.querySelector("#leftover")
let explanation = document.querySelector("#explanation")
let explanationimg = document.querySelector("#explanation-img")
let coneleft = document.querySelector("#cone-left")
let coneright = document.querySelector("#cone-right")


coneleft.style.bottom = window.innerHeight / 12 + "px"
coneleft.style.width = window.innerWidth / 7 + "px"

coneright.style.bottom = window.innerHeight / 12 + "px"
coneright.style.width = window.innerWidth / 7 + "px"

inventory.style.width = window.innerWidth / 10 + "px"
inventory.style.height = window.innerWidth / 10 + "px"

can.style.bottom = window.innerHeight / 12 + "px"
can.style.width = window.innerWidth / 15 + "px"

burnable.style.bottom = window.innerHeight / 12 + "px"
burnable.style.width = window.innerWidth / 10 + "px"

nonburnable.style.bottom = window.innerHeight / 12 + "px"
nonburnable.style.width = window.innerWidth / 9 + "px"

papers.style.bottom = window.innerHeight / 12 + "px"
papers.style.width = window.innerWidth / 9 + "px"

tissue.style.bottom = window.innerHeight / 12 + "px"
tissue.style.width = window.innerWidth / 17 + "px"

bag.style.bottom = window.innerHeight / 12 + "px"
bag.style.width = window.innerWidth / 10 + "px"

handwarmer.style.bottom = window.innerHeight / 12 + "px"
handwarmer.style.width = window.innerWidth / 17 + "px"

glass.style.bottom = window.innerHeight / 12 + "px"
glass.style.width = window.innerWidth / 17 + "px"

ruler.style.bottom = window.innerHeight / 12 + "px"
ruler.style.width = window.innerWidth / 17 + "px"

leftover.style.bottom = window.innerHeight / 12 + "px"
leftover.style.width = window.innerWidth / 10 + "px"

explanation.style.bottom = window.innerHeight / 12 + "px"
explanation.style.left = window.innerWidth / 12 * 9 + "px"
explanationimg.style.width = window.innerWidth / 6 + "px"

//object

//pop-up


document.querySelectorAll(".pop-up-bottom").forEach(element => {
    element.style.bottom = window.innerHeight / 4 + "px"
});

//pop-up

//interaction
let inventorystatus = false
let correctamount = 0

setInterval(() => {
    //can
   if(overlap(maincharacter,can)){
    document.querySelector("#can-pop-up").style.display = "block"
   }else{
    document.querySelector("#can-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,can) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-can").style.display = "block"
    can.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,can) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }

   document.querySelector("#alert-button").onclick = (event) => {
    document.querySelector("#alert").style.display = "none"
   };
   //can

   //paper
   if(overlap(maincharacter,papers)){
    document.querySelector("#paper-pop-up").style.display = "block"
   }else{
    document.querySelector("#paper-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,papers) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-paper").style.display = "block"
    papers.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,papers) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }
   //paper

   //tissue
   if(overlap(maincharacter,tissue)){
    document.querySelector("#tissue-pop-up").style.display = "block"
   }else{
    document.querySelector("#tissue-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,tissue) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-tissue").style.display = "block"
    tissue.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,tissue) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }
   //tissue

   //bag
   if(overlap(maincharacter,bag)){
    document.querySelector("#bag-pop-up").style.display = "block"
   }else{
    document.querySelector("#bag-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,bag) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-bag").style.display = "block"
    bag.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,bag) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }
   //bag

   //hand-warmer
   if(overlap(maincharacter,handwarmer)){
    document.querySelector("#handwarmer-pop-up").style.display = "block"
   }else{
    document.querySelector("#handwarmer-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,handwarmer) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-handwarmer").style.display = "block"
    handwarmer.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,handwarmer) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }
   //hand-warmer

   //glass
   if(overlap(maincharacter,glass)){
    document.querySelector("#glass-pop-up").style.display = "block"
   }else{
    document.querySelector("#glass-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,glass) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-glass").style.display = "block"
    glass.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,glass) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }
   //glass

   //ruler
   if(overlap(maincharacter,ruler)){
    document.querySelector("#ruler-pop-up").style.display = "block"
   }else{
    document.querySelector("#ruler-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,ruler) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-ruler").style.display = "block"
    ruler.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,ruler) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }
   //ruler

   //leftover
   if(overlap(maincharacter,leftover)){
    document.querySelector("#leftover-pop-up").style.display = "block"
   }else{
    document.querySelector("#leftover-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,leftover) && keyEvent.key == "f" && keyEvent.down && inventorystatus === false){
    document.querySelector("#inventory-leftover").style.display = "block"
    leftover.style.display = "none"
    inventorystatus = true
   }else if(overlap(maincharacter,leftover) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    document.querySelector("#alert").style.display = "block"
   }
   //leftover

   //burnable-pop-up
   if(overlap(maincharacter,burnable)){
    document.querySelector("#burnable-pop-up").style.display = "block"
   }else{
    document.querySelector("#burnable-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-can").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-can").style.display = "none"
        can.style.display = "block"
        inventorystatus = false
    }
   }
   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-paper").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-paper").style.display = "none"
        inventorystatus = false
        correctamount += 1
        }
   }
   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-tissue").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-tissue").style.display = "none"
        inventorystatus = false
        correctamount += 1
        }
   }
   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-bag").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-bag").style.display = "none"
        inventorystatus = false
        correctamount += 1
        }
   }
   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-handwarmer").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-handwarmer").style.display = "none"
        handwarmer.style.display = "block"
        inventorystatus = false
        }
   }
   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-glass").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-glass").style.display = "none"
        glass.style.display = "block"
        inventorystatus = false
        }
   }
   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-ruler").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-ruler").style.display = "none"
        ruler.style.display = "block"
        inventorystatus = false
        }
   }
   if(overlap(maincharacter,burnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-leftover").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-leftover").style.display = "none"
        inventorystatus = false
        correctamount += 1
        }
   }
   //burnable-pop-up

   //non burnable-pop-up
   if(overlap(maincharacter,nonburnable)){
    document.querySelector("#non-burnable-pop-up").style.display = "block"
   }else{
    document.querySelector("#non-burnable-pop-up").style.display = "none"
   }

   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-can").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-can").style.display = "none"
        inventorystatus = false
        correctamount += 1
    }
   }
   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-paper").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-paper").style.display = "none"
        papers.style.display = "block"
        inventorystatus = false
    }
   }
   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-tissue").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-tissue").style.display = "none"
        tissue.style.display = "block"
        inventorystatus = false
        }
   }
   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-bag").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-bag").style.display = "none"
        bag.style.display = "block"
        inventorystatus = false
        }
   }
   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-handwarmer").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-handwarmer").style.display = "none"
        inventorystatus = false
        correctamount += 1
        }
   }
   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-glass").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-glass").style.display = "none"
        inventorystatus = false
        correctamount += 1
        }
   }
   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-ruler").style.display === "block"){
        document.querySelector("#correct").style.display = "block"
        setTimeout(() => {
            document.querySelector("#correct").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-ruler").style.display = "none"
        inventorystatus = false
        correctamount += 1
        }
   }
   if(overlap(maincharacter,nonburnable) && keyEvent.key == "f" && keyEvent.down && inventorystatus === true){
    if(document.querySelector("#inventory-leftover").style.display === "block"){
        document.querySelector("#incorrect").style.display = "block"
        setTimeout(() => {
            document.querySelector("#incorrect").style.display = "none"
        }, 2000);
        document.querySelector("#inventory-leftover").style.display = "none"
        leftover.style.display = "block"
        inventorystatus = false
        }
   }
   //non burnable-pop-up

   //game end status
   if(can.style.display === "none" && papers.style.display === "none" && tissue.style.display === "none" && bag.style.display === "none" && handwarmer.style.display === "none" && glass.style.display === "none" && ruler.style.display === "none" && leftover.style.display === "none" && correctamount === 8){
    document.querySelector("#game-clear").style.display = "block"
   }
   //game end status
}, );


document.querySelector("#alert").style.fontSize = window.innerHeight / 5 + "px"
document.querySelector("#correct-text").style.fontSize = window.innerHeight / 7 + "px"
document.querySelector("#incorrect-text").style.fontSize = window.innerHeight / 7 + "px"

//interaction