const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeClassList();
        panel.classList.add('active')
    })
})

function removeClassList(){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}






























































//  const panels = document.querySelectorAll('.panel')

//  panels.forEach(panel => {
//      panel.addEventListener('click', () =>{
//          removeActiveClass()
//          panel.classList.add('active')
//      })
//  })

//  function removeActiveClass(){
//      panels.forEach(panel =>{
//          panel.classList.remove('active')
//      })
//  }