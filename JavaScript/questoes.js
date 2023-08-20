const button = document.querySelector('.component_button'); 
const inputs = document.querySelectorAll('.input_text');

// questões 

const button_confirm = document.querySelector('.button_confirm');
const alternativas = document.querySelectorAll('.container_alternativa');
const button_verifed = document.querySelector('#button_verifed');
const text_verifed = document.querySelector('#text_comple');
const img_verifed = document.querySelector('#img_verifed');
const button_hidden_questions = document.querySelector('.button_hidden_questions');
const layout_container_questions_prova = document.querySelector('.layout_container_questions_prova');
const container_alternativas_questions = document.querySelector('.container_alternativas_questions');
const svg_hidden_questions = document.querySelector('.svg_hidden_questions'); 
const layout_questoes = document.querySelector('.layout_questoes');
const button_extras = document.querySelectorAll('.button_new_components');
let idx = 0;


button_extras.forEach((item, index) => {
  item.addEventListener('click', () => {
    button_extras.forEach((elementos, buttonIdx) => {
      if(buttonIdx !== index) {
        button_extras[buttonIdx].style.backgroundColor = 'white'
        button_extras[buttonIdx].style.color = 'black'
      }
    })
    button_extras[index].style.backgroundColor = 'black'
    button_extras[index].style.color = 'white'
  })
})

button_hidden_questions.addEventListener('click', () => {
  if(idx === 0) {
    layout_container_questions_prova.style.display = 'block'
    // container_alternativas_questions.style.display = 'flex'
    svg_hidden_questions.src = '../Assets/svg/minus.png';
    heightQuestions()
    idx++
  } else {
    layout_container_questions_prova.style.display = 'none'
    // container_alternativas_questions.style.display = 'none'
    svg_hidden_questions.src = '../Assets/svg/pusle.svg';
    heightQuestions()
    idx--
  }
})

this.addEventListener('load', () => {
  heightQuestions()
})

function heightQuestions() {
  let height = layout_questoes.clientHeight;
  altura.forEach((item) => {
    item.style.height = `${height}px`
    // console.log('tudo OK!')
  })
}


alternativas.forEach((item, index) => {
  item.addEventListener('click', () => {
    alternativas.forEach((alternativa, indexAlternativa) => {
      if(indexAlternativa !== index) {
        alternativa.classList.remove('selected')
      }
    })
    alternativas[index].classList.add('selected')
  })
})
button_confirm.addEventListener('click', () => {
  let value = Array.from(alternativas).some((item) => item.classList.contains('selected'));
  if(alternativas[4].classList.contains('selected')) {
    button_verifed.style.display = 'flex'
    button_verifed.style.backgroundColor = '#CDFEE1'
    button_verifed.style.color = 'black'
    text_verifed.innerHTML = `Parabéns! Resposta correta.`
    img_verifed.src = '../Assets/svg/check.svg'
  } else if(
    alternativas[0].classList.contains('selected') || 
    alternativas[1].classList.contains('selected') ||
    alternativas[2].classList.contains('selected') ||
    alternativas[3].classList.contains('selected')){
    button_verifed.style.display = 'flex'
    button_verifed.style.backgroundColor = '#F89999'
    button_verifed.style.color = 'black'
    text_verifed.innerHTML = `Ops! A alternativa certa é a letra <b>E</b>.`
    img_verifed.src = '../Assets/img/X_2.png'
  } else {
    button_verifed.style.display = 'flex'
    button_verifed.style.backgroundColor = '#f8ed99'
    button_verifed.style.color = 'black'
    text_verifed.innerHTML = `Parece que você não selecionou nenhuma alternativa!`
    img_verifed.src = '../Assets/img/X_2.png'
  }
})


inputs.forEach((item, index) => {
  item.addEventListener('input', () => {
    let inputValue = Array.from(inputs).some((elemento) => elemento.value !== '')
    if(inputValue) {
      button.style.backgroundColor = 'black'
      button.style.cursor = 'pointer'
    } else {
      button.style.backgroundColor = '#D8DFE5'
      button.style.cursor = 'auto'
    }
  })
})