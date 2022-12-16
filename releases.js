const getReleases = () => {
  const releasesArray = []
    fetch('https://gpgc-api.fly.dev/api/v1/releases/')
    .then((response) => response.json())
    .then((data) =>
      data.forEach(release =>{
        releasesArray.push(release)
        releasesArray.sort((p1, p2) => (p1.release_date < p2.release_date) ? 1 : (p1.release_date > p2.release_date) ? -1 : 0);
      } )
    );
    return releasesArray;
}




const getArtists = () => {
  const artistsArray = []
  fetch('https://gpgc-api.fly.dev/api/v1/artists')
    .then((response) => response.json())
    .then((data) =>
      data.forEach(artist =>{
        artistsArray.push(
        {
          "name": artist.name,
          "id": artist.id
         })
      } )
    );
    return artistsArray;
}

const releasesListTag = document.querySelector('.releases-list')
const artistsListTag = document.querySelector('.artists-list')
let releasesArray = getReleases();
let artistsArray = getArtists();

const createReleases = () => {
  releasesArray.forEach(release => {
  const foundArtist = artistsArray.find(artist => artist.id === release.artist_id)
  const newItem = document.createElement('li')


  if (release.release_date > '2022-01-01') {
    const year2022Tag = document.querySelector('.year-2022 ul')
    newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
    year2022Tag.appendChild(newItem)
  } else if (release.release_date > '2021-01-01') {
      const year2021Tag = document.querySelector('.year-2021 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2021Tag.appendChild(newItem)
  } else if (release.release_date > '2020-01-01') {
      const year2020Tag = document.querySelector('.year-2020 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2020Tag.appendChild(newItem)
  } else if (release.release_date > '2019-01-01') {
      const year2019Tag = document.querySelector('.year-2019 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2019Tag.appendChild(newItem)
  } else if (release.release_date > '2018-01-01') {
      const year2018Tag = document.querySelector('.year-2018 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2018Tag.appendChild(newItem)
  } else if (release.release_date > '2017-01-01') {
      const year2017Tag = document.querySelector('.year-2017 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2017Tag.appendChild(newItem)
  } else if (release.release_date > '2016-01-01') {
      const year2016Tag = document.querySelector('.year-2016 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2016Tag.appendChild(newItem)
  } else if (release.release_date > '2015-01-01') {
      const year2015Tag = document.querySelector('.year-2015 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2015Tag.appendChild(newItem)
  } else if (release.release_date > '2014-01-01') {
      const year2014Tag = document.querySelector('.year-2014 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2014Tag.appendChild(newItem)
  } else if (release.release_date > '2013-01-01') {
      const year2013Tag = document.querySelector('.year-2013 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2013Tag.appendChild(newItem)
  } else if (release.release_date > '2012-01-01') {
      const year2012Tag = document.querySelector('.year-2012 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2012Tag.appendChild(newItem)
  } else if (release.release_date > '2011-01-01') {
      const year2011Tag = document.querySelector('.year-2011 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2011Tag.appendChild(newItem)
  } else if (release.release_date > '2010-01-01') {
      const year2010Tag = document.querySelector('.year-2010 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2010Tag.appendChild(newItem)
  } else if (release.release_date > '2008-01-01') {
      const year2008Tag = document.querySelector('.year-2008 ul')
      newItem.innerHTML = `<a href="${release.links['Bandcamp'] == null && release.links['Spotify'] == null ? "#" : release.links['Bandcamp']}"><p class="release-name">${release.name}</p> <p class="artist-name">${foundArtist.name}</p><p class="label-info">${release.label}</p></a>`;
      year2008Tag.appendChild(newItem)
  }

  });
}







window.addEventListener('load', () => {
    setTimeout(() => {
        createReleases();
    }, 1000);
})
