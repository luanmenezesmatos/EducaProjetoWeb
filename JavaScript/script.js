const button = document.querySelectorAll('.component_svg_duvidas');
const dropdow  = document.querySelectorAll('.layout_dropdown_container');
const container = document.querySelectorAll('.layout_container_hidden')
const layout_title = document.querySelectorAll('.layout_title_dropdown')
const button_main = document.querySelector('#button_main')
const sidebar = document.querySelector('.layout_sidebar');
const back_button = document.querySelector('.component_svg_side');
const main = document.querySelector('main')
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const about = document.querySelector('#about');
const sobre = document.querySelector('#sobre');
const sobre_1 = document.querySelector('#sobre_2');
const sobre_back = document.querySelector(".x_sobre_svg")

// modal 

const links = document.querySelectorAll('.componeont_text_description');
const title_modal = document.querySelector('.component_title_modal ');
const modal_container = document.querySelectorAll('.layout_modal');
const back_button_modal = document.querySelectorAll('.component_x');
const button_modal = document.querySelectorAll('.layout_bottom_modal')


button_modal.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(index === 0){
      modal_container[0].style.display = 'none'
      main.style.transition = ''
    } else {
      modal_container[1].style.display = 'none'
      main.style.transition = ''
    }
  })
})
links.forEach((item, index) => {
  item.addEventListener('click', (evento) => {
    evento.stopPropagation()
    if(index === 0) {
      modal_container[0].style.display = 'flex'
      main.style.transition = '0.8s'
    } else if(index === 1) {
      modal_container[1].style.display = 'flex'
      main.style.transition = '0.8s'
    }
  })
})
back_button_modal.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(index === 0) {
      modal_container[0].style.display = 'none';
      main.style.transition = ''
    } else if(index === 1) {
      modal_container[1].style.display = 'none'
      main.style.transition = ''
    }
  })
})

sobre.addEventListener('mouseenter', (evento) => {
  evento.stopPropagation()
  about.style.display = 'flex'
})

about.addEventListener('mouseleave', (evento) => {
  evento.stopPropagation()
  about.style.display = 'none'
})

sobre_1.addEventListener('click', () => {
  about.style.display = 'flex'
}) 

sobre_back.addEventListener('click', () => {
  about.style.display = 'none'
})

button_main.addEventListener('click', () => {
  sidebar.style.left = '0px'
  main.style.filter = 'blur(4px)'
  header.style.filter = 'blur(4px)'
  main.style.transition = '1s'
  header.style.transition = '1s'
  nav.style.width = '100%'
  document.body.style.overflowY = 'hidden'
})

main.addEventListener('click', () => {
  sidebar.style.left = '-100%'
  main.style.filter = 'blur(0px)'
  header.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})

back_button.addEventListener('click', () => {
  sidebar.style.left = '-100%'
  main.style.filter = 'blur(0px)'
  header.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})


layout_title.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(index === 0) {
      dropdow[index].classList.toggle('toggle_class');
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else if(index === 1) {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    }
  })
})

button.forEach((item, index) => {
  item.addEventListener('click', (evento) => {
    evento.stopPropagation()
    if(index === 0) {
      dropdow[index].classList.toggle('toggle_class');
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else if(index === 1) {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    }  
  })  
})  

