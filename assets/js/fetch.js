async function fetchData(){
const baseUrl = `data/data.json`;
const profileDataDetails = await fetch(baseUrl)
const response = await response.json()

return profileDataDetails
}

