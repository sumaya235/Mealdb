const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

}
loadCountries();

const displayCountries = (countries) => {
//     console.log(countries);
 const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-style');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.coatOfArms.png}</p>
            <h5>${country.capital}</h5>
            <button onclick= loadCountriesByName('${country.name.common}')> Details </button>
        `

        // const h3 =document.createElement('h3');
        // h3.innerText= country.name.common;
        // div.appendChild(h3);
        // const p =document.createElement('p');
        // p.innerText= country.coatOfArms.png;
        // div.appendChild(p);
        // const h5 =document.createElement('h5');
        // h5.innerText= country.capital;
        // div.appendChild(h5);

        countriesDiv.appendChild(div)
    });
}

const loadCountriesByName = (name) => {
    // console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) =>{
    console.log(country);

    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML=`
    <h4> Country Name : ${country.name.common}</h4>
    <p> Population : ${country.population}</p>
    <img width = "200px" src="${country.flags.png}">
    `
}