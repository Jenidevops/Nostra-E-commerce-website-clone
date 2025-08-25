const offerBar = document.querySelector('.offer-bar');
const closeBtn = document.getElementById('offer-close');

closeBtn.addEventListener('click', () => {
  offerBar.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("side-navbar-activate");
  const sideNavbar = document.querySelector(".side-navbar");
  const navbar = document.querySelector(".navbar");
  const sideClose = document.getElementById("side-navbar-close");

  // Open
  menuToggle.addEventListener("click", () => {
    sideNavbar.style.marginLeft = "0%";
    navbar.classList.add("hide");
  });

  // Close
  sideClose.addEventListener("click", () => {
    sideNavbar.style.marginLeft = "-60%";
    navbar.classList.remove("hide");
  });
});
// Render liked products inside drawer (with remove option)
function renderCart() {
  const cartContent = document.getElementById("cart-content");
  if (likedItems.length === 0) {
    cartContent.innerHTML = "<p>No liked products yet.</p>";
    return;
  }
  cartContent.innerHTML = "";
  likedItems.forEach((item, index) => {
    cartContent.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="product">
        <p>${item.id}</p>
        <button class="remove-btn" data-id="${item.id}">❌</button>
      </div>
    `;
  });
// Toggle cart drawer
const cartToggle = document.getElementById("cart-toggle");
const cartToggleMobile = document.getElementById("cart-toggle-mobile");
const cartDrawer = document.getElementById("cart-drawer");
const cartClose = document.getElementById("cart-close");

if(cartToggle){
  cartToggle.addEventListener("click", () => {
    cartDrawer.classList.add("active");
  });
}
if(cartToggleMobile){
  cartToggleMobile.addEventListener("click", () => {
    cartDrawer.classList.add("active");
  });
}
if(cartClose){
  cartClose.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
  });
}

  // Attach remove button handlers
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      likedItems = likedItems.filter(item => item.id !== id);

      // Reset heart icon to black
      document.querySelectorAll(".like-button").forEach(b => {
        if (b.closest(".most-wanted-container")) {
          const productId = "product-" + [...document.querySelectorAll(".like-button")].indexOf(b);
          if (productId === id) {
            b.src = "img/icons/blackheart.png";
          }
        }
      });

      localStorage.setItem("likedItems", JSON.stringify(likedItems));
      updateCartCount();
      renderCart();
    });
  });
}



var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)
const leftArrow = document.querySelector('.brands-arrow.left');
const rightArrow = document.querySelector('.brands-arrow.right');
const slider = document.querySelector('.brands-slider');

const scrollAmount = 200; // pixels to scroll per click

rightArrow.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


document.querySelectorAll(".like-button").forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("liked")) {
      button.src = "img/icons/blackheart.png"; // back to black
      button.classList.remove("liked");
    } else {
      button.src = "img/icons/redheart.png"; // switch to red
      button.classList.add("liked");
    }
  });
});

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})


//Collections
