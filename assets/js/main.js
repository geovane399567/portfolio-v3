
function printPrimaryData(profileDataDetails) {

  const photo = document.getElementById('photo')
  photo.innerHTML = `<img class="my-photo" src=${profileDataDetails.photo} alt=${profileDataDetails.name} />`

  const name = document.getElementById('name')
  name.innerHTML = `<h1 class="title">${profileDataDetails.name}</h1>`

  const primaryData = document.getElementById('primaryData')
  primaryData.innerHTML = `
  <li><span class="material-symbols-outlined icon">cake</span> ${profileDataDetails.age} anos.</li>
  <li><span class="material-symbols-outlined icon">location_city</span> ${profileDataDetails.location} </li>
  <li><span class="material-symbols-outlined icon">work</span> ${profileDataDetails.job}</li>
  <li><span class="material-symbols-outlined icon">mail</span> ${profileDataDetails.email} </li>
  <li><span class="material-symbols-outlined icon">link</span>
  <a href=${profileDataDetails.linkedin} target="_blank">Meu perfil no Linkedin</a></li>
  `
}

function printSkills(profileDataDetails) {
  const hardSkills = document.getElementById('hardSkills')
  hardSkills.innerHTML = profileDataDetails.skills.hardSkills.map(skill => `<li><img class="hardSkillsImg" src=${skill.logo} alt=${skill.name} /></li>`).join('')

  const softSkills = document.getElementById('softSkills')
  softSkills.innerHTML = profileDataDetails.skills.softSkills.map(skill => `<li><span>${skill}</span></li>`).join(' ')

  const languages = document.getElementById('languages')
  languages.innerHTML = profileDataDetails.skills.idiomas.map(idioma => `<li><span class="material-symbols-outlined">
     done
     </span><span id="li_lang">${idioma}</span></li>`).join('')

  const education = document.getElementById('education')
  education.innerHTML = profileDataDetails.skills.cursos.map(cursos => {

    return `
      <li>
       <h2 class="school"><span class="material-symbols-outlined">
       done </span>${cursos.name}</h2>
                    <p> ${cursos.period}</p>
                    <p>${cursos.school}</p>
                    
                                      </li>
      
      `

  }).join('')


  const portfolio = document.getElementById('portfolio')
  portfolio.innerHTML = profileDataDetails.skills.portfolio.map(project =>
    `<li class="project">
       <h3 ${project.github ? 'class="github"' : ''}><a href=${project.url} target="_blank">${project.name}</a></h3>
       <span>${project.description}</span>
       </li>`).join('')

}

(async () => {
  const profileDataDetails = await fetchData()
  printPrimaryData(profileDataDetails)
  printSkills(profileDataDetails)
  //printSoftSkills(profileDataDetails)

})()