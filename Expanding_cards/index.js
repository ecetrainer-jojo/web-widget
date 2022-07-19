
const expandHandler = () =>{
    window.onload = ()=>{
        //get all the pannels
        const myPanels = document.getElementsByClassName("panel")
        //binding the events
        Array.from(myPanels).forEach(element => {
            element.onclick = ()=>{
                expandCard(element)
            }
        });
    }
}


//manipulate by changing the class name
const expandCard = (expandingPanel) =>{
    const currentActive = document.getElementsByClassName("active")
    currentActive[0].classList.remove("active")
    expandingPanel.classList.add("active")
    //expandingPanel.classList.remove("actve")
}


const hello = (expandingPanel) =>{
    alert("gg")
}