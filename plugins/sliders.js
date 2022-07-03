var headerSearchWr = document.getElementById('header__search-result');
function liveSearch(value,isFocus) {

    headerSearchWr.style.cssText='display:block;';
    if (value == '' || !isFocus){
        headerSearchWr.style.cssText='display:none;';
        isFocus = true;
    }
    else if((value !== '' || isFocus)){
        
        fetchMovies(value)

        headerSearchWr.style.cssText='display:block;';
    }
}
// async function fetchMovies(value) {
//     const resp = await fetch('https://kodikapi.com/search?token=b366fa83b760db1dc05b3c7d5f70331e&with_material_data=true&types=anime-serial&limit=6&title='+value)
    
//     // waits until the request completes...
//     .then(response => response.json())
//     .then(json => json.results)
//     let searchTitle = document.getElementById('header__search-result')
//     searchTitle.innerHTML = ""

//     resp.forEach(element => {
//         let header__search_result_title = document.createElement('div')
//         header__search_result_title.className = 'header__search-result-title'

//         let img = document.createElement('img')

//         let header__about_title = document.createElement('div')

//         let header__title_name = document.createElement('h1')
//         header__title_name.className = 'header__title-name'
//         try{
//             img.src = element.material_data.poster_url
//             header__title_name.innerHTML = element.material_data.title
//         }
//         catch (err) {
//         }
//         // kinopoisk_rating
        


//         let header__title_rate = document.createElement('span')
//         header__title_rate.className = 'header__title-rate'

//         let header__title_other_name = document.createElement('span')
//         header__title_other_name.className = 'header__title-other-name'
        
//         let header__title_year = document.createElement('span')
//         header__title_year.className = 'header__title-year'



//         header__about_title.append(header__title_name,header__title_rate,header__title_other_name,header__title_year)
//         header__search_result_title.append(img,header__about_title)
//         searchTitle.append(header__search_result_title)
//     });
//   }


// change theme

let page = document.querySelector('.content');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('dark-theme');
};
