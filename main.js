let phrases = ['Comece onde você está, use o que você tem e faça o que você pode.  Arthur Ashe', 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.  Roberto Shinyashiki', 'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.  Frank Tibolt', 'Não importa que você vá devagar, contanto que você não pare.  Confúcio', 'A inspiração existe, porém temos que encontrá-la trabalhando.  Pablo Picasso', 'Coragem é saber o que não temer. Platão', 'Conhecer a si mesmo é o começo de toda sabedoria.  Aristóteles', 'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá. Ellen Degeneres', 'Acredite em milagres, mas não dependa deles.  Immanuel Kant', 'Não é a carga que o derruba, mas a maneira como você a carrega. Lou Holtz', 'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia. Paulo Coelho', 'A vida é 10% que acontece a você e 90% como você reage a isso.   Charles Swindoll', 'O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.  Helen Keller', 'Um livro, uma caneta, uma criança e um professor podem mudar o mundo.  Malala Yousafzai', 'A felicidade não é algo pronto. Ela é feita das suas próprias ações.  Dalai Lama', 'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.  Thomas Edison', 'Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.  Wayne Dyer', 'Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros. Ayn Rand', 'Cada segundo é tempo para mudar tudo para sempre.  Charles Chaplin', 'Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.  Aldous Huxley', 'Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida. Basta que lute e aguarde um novo amanhecer.  Margaret Thatcher', 'A paz vem de dentro de você mesmo. Não a procure à sua volta.  Buda', 'Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.  Clarice Lispector', 'Aprenda com o ontem. Viva o hoje. tenha esperança para o amanhã.  Albert Einstein', 'Não há atalhos para nenhum destino onde se vale a pena chegar.  Beverly Sills'];
let home = document.querySelector('.home button')
let luck = document.querySelector('.luck button')
let phrase = document.querySelector('.luck p')

home.addEventListener('click',function() {
  document.querySelector('.home')
  .classList.add('hide')

  document.querySelector('.luck')
  .classList.remove('hide')

  let random = Math.round(Math.random() * phrases.length);

  phrase.innerText = phrases[random]


})

luck.addEventListener('click',function() {
  document.querySelector('.home')
  .classList.remove('hide')

  document.querySelector('.luck')
  .classList.add('hide')
})
