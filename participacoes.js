const getFeaturings = () => {
  const featuringArrays = []
    fetch('https://gpgc-api.fly.dev/api/v1/featurings/')
    .then((response) => response.json())
    .then((data) =>
      data.forEach(release =>{
        featuringArrays.push(release)
        featuringArrays.sort((p1, p2) => (p1.release_date < p2.release_date) ? 1 : (p1.release_date > p2.release_date) ? -1 : 0);
      } )
    );
    return featuringArrays;
}

const featuringListTag = document.querySelector('.featurings-list')
let featuringArrays = getFeaturings();



const createFeaturings = () => {
  featuringArrays.forEach(feat => {
  const newItem = document.createElement('li')


  if (feat.release_date > '2022-01-01') {
    const year2022Tag = document.querySelector('.year-2022 ul')
    newItem.innerHTML = `<a href="${feat.url}"><p class="featuring-name">${feat.featuring_name}</p> <p class="artist-name">${feat.artist}</p><p class="credit-info">${feat.credit}</p></a>`;
    year2022Tag.appendChild(newItem)
  } else if (feat.release_date > '2021-01-01') {
      const year2021Tag = document.querySelector('.year-2021 ul')
      newItem.innerHTML = `<a href="${feat.url}"><p class="featuring-name">${feat.featuring_name}</p> <p class="artist-name">${feat.artist}</p><p class="credit-info">${feat.credit}</p></a>`;
      year2021Tag.appendChild(newItem)
  } else if (feat.release_date > '2020-01-01') {
      const year2020Tag = document.querySelector('.year-2020 ul')
      newItem.innerHTML = `<a href="${feat.url}"><p class="featuring-name">${feat.featuring_name}</p> <p class="artist-name">${feat.artist}</p><p class="credit-info">${feat.credit}</p></a>`;
      year2020Tag.appendChild(newItem)
  } else if (feat.release_date > '2019-01-01') {
      const year2019Tag = document.querySelector('.year-2019 ul')
      newItem.innerHTML = `<a href="${feat.url}"><p class="featuring-name">${feat.featuring_name}</p> <p class="artist-name">${feat.artist}</p><p class="credit-info">${feat.credit}</p></a>`;
      year2019Tag.appendChild(newItem)
  } else if (feat.release_date > '2018-01-01') {
      const year2018Tag = document.querySelector('.year-2018 ul')
      newItem.innerHTML = `<a href="${feat.url}"><p class="featuring-name">${feat.featuring_name}</p> <p class="artist-name">${feat.artist}</p><p class="credit-info">${feat.credit}</p></a>`;
      year2018Tag.appendChild(newItem)
  } else if (feat.release_date > '2012-01-01') {
      const year2012Tag = document.querySelector('.year-2012 ul')
      newItem.innerHTML = `<a href="${feat.url}"><p class="featuring-name">${feat.featuring_name}</p> <p class="artist-name">${feat.artist}</p><p class="credit-info">${feat.credit}</p></a>`;
      year2012Tag.appendChild(newItem)
  }  else if (feat.release_date > '2011-01-01') {
      const year2011Tag = document.querySelector('.year-2011 ul')
      newItem.innerHTML = `<a href="${feat.url}"><p class="featuring-name">${feat.featuring_name}</p> <p class="artist-name">${feat.artist}</p><p class="credit-info">${feat.credit}</p></a>`;
      year2011Tag.appendChild(newItem)
  }
  });
}



window.addEventListener('load', () => {
    setTimeout(() => {
        createFeaturings();
    }, 1000);
})
