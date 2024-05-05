
function printPrimaryData(profileDataDetails){

  const photo = document.getElementById('photo')
  photo.innerHTML = `<img src=${profileDataDetails} alt=${profileDataDetails.name}`

}

(async () => {
  const profileDataDetails = await fetchData()
  printPrimaryData(profileDataDetails)


})()