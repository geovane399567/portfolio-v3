async function fetchData(){
const baseUrl = "https://raw.githubusercontent.com/geovane399567/portfolio-v3/main/data/data.json";
const response = await fetch(baseUrl)
const profileDataDetails = await response.json()

return profileDataDetails
}

