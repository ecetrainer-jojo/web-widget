//set some global numbers here
let buttonPrev
let buttonNext
let progressLine
let circles

const progressHandler = () =>{
    window.onload = ()=>{
        //get object of two buttons
        buttonPrev = document.getElementById("prev")
        buttonNext = document.getElementById("next")
        progressLine = document.getElementById("progress")
        circles = document.getElementsByClassName('circle')
        buttonNext.onclick = rollout
        buttonPrev.onclick = rollback
    }
}

const rollout = ()=>{
    const currentActive = getCurrentProgress()
    progressLine.style.width = `${((currentActive)/3*100)}%`
    //Using javascript to creat some extra effects
    setTimeout(function() {
        circles[currentActive].classList.add("active")
        checkButton()
    }, 300);
}

const rollback = ()=>{
    const currentActive = getCurrentProgress()
    circles[currentActive-1].classList.remove("active")
    //Using javascript to creat some extra effects
    setTimeout(function() {
        progressLine.style.width = `${((currentActive-2)/3*100)}%`
        checkButton()
    }, 300);
}

const getCurrentProgress = ()=>{
    return document.getElementsByClassName('active').length
}

const checkButton = ()=>{
    const currectActive = document.getElementsByClassName('active').length
    if(currectActive==1){
        buttonPrev.disabled = true
    }
    else if(currectActive==4){
        buttonNext.disabled = true
    }
    else{
        buttonPrev.disabled = false
        buttonNext.disabled = false
    }
}