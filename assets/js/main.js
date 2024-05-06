
function printPrimaryData(profileDataDetails){

  const photo = document.getElementById('photo')
  photo.innerHTML = `<img class="my-photo" src=${profileDataDetails.photo} alt=${profileDataDetails.name} />`

  const name = document.getElementById('name')
  name.innerHTML = `<h1 class="title">${profileDataDetails.name}</h1>`

  const primaryData = document.getElementById('primaryData')
  primaryData.innerHTML = `
  <li><span class="data-list">@</span>${profileDataDetails.age} anos.</li>
  <li><span class="data-list">&</span>${profileDataDetails.location}</li>
  <li><span class="data-list">#</span>${profileDataDetails.job}</li>
  <li><span class="data-list">*</span>${profileDataDetails.email}</li>
  <li><a href=${profileDataDetails.linkedin} target="_blank">Meu perfil no Linkedin</a></li>
  `
}

function printHardSkills(profileDataDetails){
     const hardSkills = document.getElementById('hardSkills')
     hardSkills.innerHTML = profileDataDetails.skills.hardSkills.map(skill => `<span class="li_img"><li><img class="hardSkillsImg" src=${skill.logo} alt=${skill.name} /></li></span>`).join('')
}

function printSoftSkills(profileDataDetails){
     const softSkills = document.getElementById('softSkills')
     softSkills.innerHTML = profileDataDetails.skills.softSkills.map(skill => `<li><span>${skill}</span></li>`).join('')

}

(async () => {
  const profileDataDetails = await fetchData()
  printPrimaryData(profileDataDetails)
  printHardSkills(profileDataDetails)
  printSoftSkills(profileDataDetails)

})()