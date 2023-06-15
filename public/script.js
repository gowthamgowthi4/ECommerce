var addButton = document.getElementById("addButton");

function displayMessage(button) {
  console.log('First function called');
  const message = document.createElement('p');
  message.textContent = 'Added to Cart!';
  message.classList.add('message');
  button.parentNode.insertBefore(message, button.nextSibling);
}

function scrollToSection(sectionId) {
  if (sectionId) {
    const section = document.querySelector("." + sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

$('.addButton').on('click', function() {
  const productname = $(this).data('product');

  $.get(`/add-to-cart/${productname}`, function(data) {
    const availableElement = $(`#available${productname.charAt(productname.length - 1)}`);
    const available = parseInt(availableElement.text());
    availableElement.text(available - 1);
  });
});

document.getElementById('cancelbtn').addEventListener('click', function() {
  window.location.href = "../views/main.html";
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("Okay!");
  var loginForm = document.getElementById("loginUser");
  loginForm.addEventListener("submit", handleLogin);
});

function handleLogin(event) {
  event.preventDefault();
  console.log("Done!");
  var username = document.getElementById("username1").value;
  var password = document.getElementById("password1").value;

  if (username && password) {
      var redirectUrl = "/?username=" + encodeURIComponent(username);
      window.location.href = redirectUrl;
  }

  document.getElementById("username1").value = "";
  document.getElementById("password1").value = "";
}


// const currentUser = JSON.parse(localStorage.getItem("username1"));
// console.log(currentUser);

// const logout = () => {
//   localStorage.clear();
// };


function addToCart(item) {
  console.log('Second function called');
  var item = getElementById("description");
  var cartItems = localStorage.getItem("cartItems");

  if (cartItems) {
      cartItems = JSON.parse(cartItems);
  } else {
      cartItems = [];
  }

  cartItems.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

document.addEventListener("DOMContentLoaded", function() {
  var cartItems = localStorage.getItem("cartItems");

  if (cartItems) {
      cartItems = JSON.parse(cartItems);
      var cartItemsList = document.getElementById("cart-items");

      for (var i = 0; i < cartItems.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = cartItems[i];
          cartItemsList.appendChild(listItem);
      }
  }
});


addButton.addEventListener("click", displayMessage);
addButton.addEventListener("click", addToCart);

























