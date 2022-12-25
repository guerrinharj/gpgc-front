function makeMarquee () {

  const title = '<h1>Gabriel Pessoa Guerra Cavalcanti</h>'

  const marqueeText = new Array(500).fill(title).join('&nbsp')

  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText

}

function makeFooterMarquee () {

  const title = document.querySelector('.footer-text')

  const marqueeText = new Array(500).fill(title.innerHTML).join('&nbsp')

  const marquee = document.querySelector('.footermarquee span')
  marquee.innerHTML = marqueeText

}

makeMarquee()
makeFooterMarquee()