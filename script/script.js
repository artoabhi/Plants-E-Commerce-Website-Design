// Get the modal and the deliver button
var modal = document.getElementById("modalContainer");
var btn = document.querySelector(".deliver");
var span = document.querySelector(".close");
var pincodeInput = document.getElementById("pincodeInput");
var suggestionsContainer = document.getElementById("suggestions");
var trackOrder = document.getElementById("order-container");
var trackOrderBtn = document.querySelector(".trackOrder");
var trackOrderClose = document.querySelector(".order-close");
var giftFinder = document.querySelector(".giftFinder");
var giftContainer = document.getElementById("gift-container");
var cartBtn = document.querySelector(".cart");
var cartContainer = document.getElementById("cart-container");
var signIn = document.querySelector(".signin");
var signInContainer = document.getElementById("signIn");
var signInClose = document.querySelector(".close-signin");
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", ()=>{
    searchInput.value ="";
});
searchInput.addEventListener("keydown",(event)=>{
    if(event.key ==='Enter'){
        event.preventDefault();
        searchInput.value ="";
    }
});
if (btn) {
    btn.addEventListener("click", function() {
        modal.style.display = "flex";
        // document.header.classList.add("blur-bg");
    });
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
        // document.header.classList.remove("blur-bg");
    };
}

if (cartBtn) {
    cartBtn.addEventListener('click', function() {
        cartContainer.style.display = "flex";
    });
}

if (signIn) {
    signIn.addEventListener('click', function() {
        signInContainer.style.display = "flex";
    });
}

if (signInClose) {
    signInClose.onclick = function() {
        signInContainer.style.display = "none";
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // document.header.classList.remove("blur-bg");
    } else if (event.target == trackOrder) {
        trackOrder.style.display = "none";
    } else if (event.target == giftContainer) {
        giftContainer.style.display = "none";
    } else if (event.target == cartContainer) {
        cartContainer.style.display = "none";
    } else if (event.target == signInContainer) {
        signInContainer.style.display = "none";
    }
};

// Order section
if (trackOrderBtn) {
    trackOrderBtn.addEventListener('click', () => {
        trackOrder.style.display = "flex";
    });
}

if (trackOrderClose) {
    trackOrderClose.onclick = () => {
        trackOrder.style.display = "none";
    };
}

if (giftFinder) {
    giftFinder.addEventListener('click', () => {
        giftContainer.style.display = 'flex';
    });
}

// Form submission
const trackOrderButton = document.querySelector('.order-f button[type="submit"]');
if (trackOrderButton) {
    trackOrderButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.alert("Your order is tracked!!");
        console.log('Form submitted!');
    });
}

// Pincodes suggestion
fetch('/json/pincodes.json')
    .then(response => response.json())
    .then(data => {
        window.statesData = data.states; // Store data globally
    })
    .catch(error => console.error('Error fetching pincodes:', error));

// Input event listener for suggestions
if (pincodeInput) {
    pincodeInput.addEventListener("input", function() {
        const query = pincodeInput.value.toLowerCase();
        suggestionsContainer.innerHTML = '';

        if (query.length > 0) {
            const suggestions = window.statesData.flatMap(state => {
                return state.pincodes
                    .filter(pincode => pincode.includes(query))
                    .map(pincode => ({
                        state: state.name,
                        pincode: pincode
                    }));
            });

            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('p');
                suggestionElement.textContent = `${suggestion.state} - ${suggestion.pincode}`;
                suggestionElement.addEventListener('click', function() {
                    pincodeInput.value = suggestion.pincode;
                    suggestionsContainer.innerHTML = '';
                });
                suggestionsContainer.appendChild(suggestionElement);
            });
        }
    });
}

// Gift finder date setting
document.addEventListener("DOMContentLoaded", function() {
    // Get today's date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // Format date to display as "dd MMM yyyy"
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const todayDate = today.toLocaleDateString('en-GB', options);
    const tomorrowDate = tomorrow.toLocaleDateString('en-GB', options);

    // Set the text content for Today and Tomorrow
    document.getElementById('today-date').textContent = todayDate;
    document.getElementById('tomorrow-date').textContent = tomorrowDate;
});
document.addEventListener("DOMContentLoaded", function () {
  const moreToggle = document.getElementById("more-toggle");
  const moreModal = document.getElementById("more-modal");

  moreToggle.addEventListener("click", function (e) {
      e.preventDefault();
      moreModal.classList.toggle("active");
  });

  window.addEventListener("click", function (e) {
      if (!moreModal.contains(e.target) && !moreToggle.contains(e.target)) {
          moreModal.classList.remove("active");
      }
  });
  window.addEventListener("click", function (e) {
    if (!navPlantList.contains(e.target) && !navPlant.contains(e.target)) {
        navPlantList.classList.remove("navPlantShow");
    }
});
window.addEventListener("click", function (e) {
    if (!navSeedItems.contains(e.target) && !navSeed.contains(e.target)) {
        navSeedItems.classList.remove("navSeedShow");
    }
});
window.addEventListener("click", function (e) {
    if (!navPotsItems.contains(e.target) && !navPots.contains(e.target)) {
        navPotsItems.classList.remove("navPotsShow");
    }
});
window.addEventListener("click", function (e) {
    if (!navPlantCareList.contains(e.target) && !navPlantCare.contains(e.target)) {
        navPlantCareList.classList.remove("navPlantCareShow");
    }  
});
window.addEventListener("click", function (e) {
    if (!navGiftItem.contains(e.target) && !navGift.contains(e.target)) {
        navGiftItem.classList.remove("navGiftShow");
    }  
});
});
let navPlant = document.getElementById("navPlant");
let navPlantList = document.getElementById("navPlantList");
navPlant.addEventListener("click",(e)=>{
    e.preventDefault();
    navPlantList.classList.toggle("navPlantShow");
});
let navPlantLocation = document.getElementById("navPlantLocation");
let navPlantLoactionToggle =document.getElementById("navPlantLoactionToggle");
navPlantLocation.addEventListener("click", (e)=>{
    e.preventDefault();
    navPlantLoactionToggle.classList.toggle("navPlantLoactionShow");
});
let shopByName = document.getElementById("shopByName");
let navPlantShopByNameToggle =document.getElementById("navPlantShopByNameToggle");
shopByName.addEventListener("click", (e)=>{
    e.preventDefault();
    navPlantShopByNameToggle.classList.toggle("nav-plants-shop-by-name-Show");
});

let navSeed = document.getElementById("navSeed");
let navSeedItems = document.getElementById("navSeedItems");

navSeed.addEventListener("click", (e)=>{
    e.preventDefault();
    navSeedItems.classList.toggle("navSeedShow");
    
});
let navPots = document.getElementById("navPots");
let navPotsItems = document.getElementById("navPotsItems");

navPots.addEventListener("click", (e)=>{
    e.preventDefault();
    navPotsItems.classList.toggle("navPotsShow");
    
});
let navPlantCare =document.getElementById("navPlantCare");
let navPlantCareList = document.getElementById("navPlantCareList");
let navPlantCareDecor =document.getElementById("navPlantCareDecor");
let navPlantCareToggle =document.getElementById("navPlantCareToggle");
navPlantCare.addEventListener("click", (e)=>{
    e.preventDefault();
    navPlantCareList.classList.toggle("navPlantCareShow");
});
navPlantCareDecor.addEventListener("click",(e)=>{
    e.preventDefault();
    navPlantCareToggle.classList.toggle("navPlantCareShow")
} );
let navGift = document.getElementById("navGift");
let navGiftItem = document.getElementById("navGiftSection");
navGift.addEventListener("click", (e)=>{
    navGiftItem.classList.toggle("navGiftShow");
});
// Optional: Preload images to ensure smooth transition
document.addEventListener('DOMContentLoaded', function() {
    const footerEmailContainer = document.getElementById("footer-email-container");
    const footerEmailClose =document.getElementById("footerEmailClose"); 
    const footerEmail = document.getElementById('footerEmail');

    footerEmail.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or any default action

            const value = footerEmail.value;
            footerEmail.value = ''; // Clear the input value
            footerEmailContainer.style.display ="flex";
        }
    });
    footerEmailClose.addEventListener('click',()=>{
        footerEmailContainer.style.display ="none";
    } );
});

