const button_side = document.querySelector('#sidebar_button');
const sidebar_hidden = document.querySelector('.layout_sidebar_hidden')
const back = document.querySelector('#back_button')
const extra_info = document.querySelector('.layout_extra_info'); 
const altura = document.querySelectorAll('.altura')
const desempenho = document.querySelector('.layout_desempenho');
const extra = document.querySelector('#extra');
const modal = document.querySelector('.layout_modal')
const visible = document.querySelector('.layout_sidebar_visible');
const X = document.querySelector('#x');
const Done = document.querySelector('#done');


this.addEventListener('load', () => {
  let height = desempenho.clientHeight;
  altura.forEach((item) => {
    item.style.height = `${height}px`
  })
})
this.addEventListener('load', () => {
  let height = extra_info.clientHeight;
  altura.forEach((item) => {
    item.style.height = `${height}px`
  })
})


button_side.addEventListener('click', () => {
  sidebar_hidden.style.left = '0'
  extra_info.style.filter = 'blur(3px)'
  document.body.style.overflowY = 'hidden'
  desempenho.style.transition = '1.5s'
})

back.addEventListener('click', (elemento) => {
  elemento.stopPropagation()
  sidebar_hidden.style.left = '-100%'
  extra_info.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})

extra_info.addEventListener('click', () => {
  sidebar_hidden.style.left = '-100%'
  extra_info.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})
extra_info.addEventListener('click', () => {
  modal.style.display = 'none'
  extra_info.style.filter = 'blur(0px)'
  visible.style.filter = 'blur(0px)'
})
X.addEventListener('click', () => {
  modal.style.display = 'none'
  extra_info.style.filter = 'blur(0px)'
  visible.style.filter = 'blur(0px)'
})
Done.addEventListener('click', () => {
  modal.style.display = 'none'
  extra_info.style.filter = 'blur(0px)'
  visible.style.filter = 'blur(0px)'
})
extra.addEventListener('click', (evento) => {
  evento.stopPropagation()
  modal.style.display = 'flex'
  extra_info.style.filter = 'blur(4px)'
  visible.style.filter = 'blur(4px)'
})