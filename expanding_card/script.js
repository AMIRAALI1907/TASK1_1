const cards=document.querySelectorAll(".card");
cards.forEach(card =>{
    card.addEventListener('click',()=>{
        removeactivelist();
        card.classList.add('active');
      
    })
})


function removeactivelist(){
    cards.forEach(card =>{
        card.classList.remove('active');
    })
}

