const getTrilhas = () => {
  const trilhasArray = []
    fetch('https://gpgc-api.fly.dev/api/v1/soundtracks/')
    .then((response) => response.json())
    .then((data) =>
      data.forEach(release =>{
        trilhasArray.push(release)
        trilhasArray.sort((p1, p2) => (p1.release_date < p2.release_date) ? 1 : (p1.release_date > p2.release_date) ? -1 : 0);
      } )
    );
    return trilhasArray;
}

const trilhasListTag = document.querySelector('.trilhas-list')
let trilhasArray = getTrilhas();



const createTrilhas = () => {
  trilhasArray.forEach(trilha => {
  const newItem = document.createElement('li')


  if (trilha.year == '2022') {
    const year2022Tag = document.querySelector('.year-2022 ul')
    newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
    year2022Tag.appendChild(newItem)
  } else if (trilha.year == '2021') {
      const year2021Tag = document.querySelector('.year-2021 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2021Tag.appendChild(newItem)
  } else if (trilha.year == '2020') {
      const year2020Tag = document.querySelector('.year-2020 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2020Tag.appendChild(newItem)
  } else if (trilha.year == '2019') {
      const year2019Tag = document.querySelector('.year-2019 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2019Tag.appendChild(newItem)
  } else if (trilha.year == '2018') {
      const year2018Tag = document.querySelector('.year-2018 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2018Tag.appendChild(newItem)
  } else if (trilha.year == '2017') {
      const year2017Tag = document.querySelector('.year-2017 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2017Tag.appendChild(newItem)
  } else if (trilha.year == '2015') {
      const year2015Tag = document.querySelector('.year-2015 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2015Tag.appendChild(newItem)
  } else if (trilha.year == '2014') {
      const year2014Tag = document.querySelector('.year-2014 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2014Tag.appendChild(newItem)
  } else if (trilha.year == '2013') {
      const year2013Tag = document.querySelector('.year-2013 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2013Tag.appendChild(newItem)
  } else if (trilha.year == '2012') {
      const year2012Tag = document.querySelector('.year-2012 ul')
      newItem.innerHTML = `<a href="${trilha.url}"><p class="trilha-name">${trilha.name}</p> <p class="artist-name">${trilha.company}</p><p class="trilha-info">${trilha.info}</p></a>`;
      year2012Tag.appendChild(newItem)
  }
  });
}



window.addEventListener('load', () => {
    setTimeout(() => {
        createTrilhas();
    }, 1000);
})
