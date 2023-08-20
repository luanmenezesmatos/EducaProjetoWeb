const banner_mini = document.querySelector('#banner_mini_1');
const img_banner = document.querySelector('#img_banner');
const tilte_banner = document.querySelector('#title_banner');
const text_banner = document.querySelector('#text_banner');
const button_destaque = document.querySelector("#destaque");
const button_dica = document.querySelector('#dica');
const img_more = document.querySelector('.img_more');
const title_main = document.querySelector('#title_banner_main');
const text_main = document.querySelector('#text_banner_main');
const banner_mini_2 = document.querySelector('#mini_2')

button_dica.addEventListener('click', () => {
  img_more.src = '../Assets/img/banner_more_2.png'
  title_main.innerHTML = `Eu questiono, tu questionas, eles questionam: como estudar com nossas mais de 70.000 questões?`
  text_main.innerHTML = `A prática de questões é fundamental para os seus estudos. Mas, afinal, como estudar corretamente por questões? Venha conferir como e também aprenda a utilizar nossos filtros`
  img_banner.src = '../Assets/img/portugues.png'
  banner_mini_2.style.display = 'none'
  banner_mini.style.justifyContent = 'flex-start'
  button_destaque.style.backgroundColor = 'rgb(60, 60, 60)'
  button_dica.style.backgroundColor = 'black'
})

button_destaque.addEventListener('click', () => {
  img_more.src = '../Assets/img/banner_more_1.png'
  title_main.innerHTML = `Lei da Termodinâmica: Entropia, ciclo de Carnot e máquinas térmicas`
  text_main.innerHTML = `Uma das primeiras coisas que o estudante precisa compreender é que as questões cobradas em sua prova do ENEM sobre a 2ª Lei da Termodinâmica sempre têm abordagem com aplicações no cotidiano, como o funcionamento de máquinas e refrigeradores`
  img_banner.src = '../Assets/img/banner_mini_more_1.png'
  banner_mini_2.style.display = 'block'
  banner_mini.style.justifyContent = 'space-around'
  button_dica.style.backgroundColor = 'rgb(60, 60, 60)'
  button_destaque.style.backgroundColor = 'black'
})