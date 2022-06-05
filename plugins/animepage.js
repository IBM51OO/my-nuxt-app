

// dropdown btn
let rateValue = 0;
function titleRateDropDown() {
    document.getElementById("title__rate-dropdown-content").classList.toggle("rate-show");
    document.querySelectorAll('.title__rate-point').forEach(button => {
        button.addEventListener('click', () => {
            rateValue = button.value;
            
        },{once:true});
    });
    // Close the dropdown menu if the user clicks outside of it
}
window.onclick = function(event) {
    if (!event.target.matches('.title__rate-like')) {
  
      var dropdowns = document.getElementsByClassName("title__rate-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('rate-show')) {
          openDropdown.classList.remove('rate-show');
        }
      }
      if(rateValue != 0){
        document.getElementById("title__rate-your-like-wrp").style.display = 'flex';
        document.getElementById("title__rate-like-dropdown").style.display = 'none';
        document.getElementById("title__rate-your-like").innerHTML = rateValue; 
      }
    }
  }
function addToList() {
    document.getElementById("title-header__add").classList.toggle("active");
}

function runTrailer() {
  document.getElementById("title-content__trailers-wrapper").classList.toggle("trailer-show");
  
}
function closeTrailer(element){
  var iframe = element.querySelector('iframe');
  console.log(iframe);
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
  document.getElementById("title-content__trailers-wrapper").classList.toggle("trailer-show");
}