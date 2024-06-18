// phone checker


const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/ 

phoneButton.onclik = () => {
    if(regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK";
        phoneResult.style.color = "green";
    }else{
        phoneResult.innerHTML = "NOT OK";
        phoneResult.style.color = "red";
    }
}


// TAB SLIDER

const tabContent = document.querySelectorAll(".tab_content_block")
const tabContentsItem = document.querySelectorAll(".tab_content_item")
const tabContentsParent = document.querySelector(".tab_content_items")

const hideContent = () => {
    tabContent.forEach((content)=> {
        content.style.display = "none"
    })
    tabContentsItem.forEach((tab) => {
        tab.classList.remove("tab_content_item_active")
    })
}
const showTabContent = (index=0) => {
    tabContent[index].style.display = "flex"
    tabContentsItem[index].classList.add("tab_content_item_active")
};


hideContent()
showTabContent()
tabContentsParent.onclick = (event) => {
    if(event.target.classList.contains("tab_content_item")) {
        tabContentsItem.forEach((tab,index )=> {
            if(event.target===tab){
                hideContent()
                showTabContent(index)
            }
        })
    }
};

let interval 

const autoTabContens = (i=0) => {
    interval= setInterval(() =>{
        i++
        if(i > tabContent.length-1){
            i=0
        }
        hideContent()
        showTabContent(i)
    },3000)
}
autoTabContens()
tabContentsItem.forEach((tab)=> {
    tab.onclick = (event) =>{
        clearInterval(interval)
        autoTabContens(Array.from(tabContentsItem).indexOf(event.target))
    }
})