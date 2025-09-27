const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]
let order = []
const totalPriceElement = document.querySelector(".total-price");
const menus = document.querySelector(".menu")
const orderSection = document.querySelector(".order-section");
 const orderItems = document.querySelector(".order-items");
  const paymentForm = document.getElementById("payment-form");
  const paymentModal = document.querySelector(".payment-modal");
const thankYouMessage = document.querySelector(".thank-you-message");
function menuData(menuArray){
    return menuArray.map(item =>{
        return `
        <div class="menu-item"> 
         <span class="emoji">${item.emoji}</span>
          <div class="information-menu">
                <p>${item.name}</p>
                <span>${item.ingredients.join(", ")}</span>
                <p>$${item.price}</p>
            </div>
        <button class="btn1" data-id="${item.id}">
            <i data-feather="plus" class="icon"></i>
        </button>
        </div>
        `
    }).join("")
}



function renderMenu(){
    menus.innerHTML = menuData(menuArray)
    feather.replace();
}


function renderOrder(){
    if(order.length === 0){
        orderSection.style.display = "none";
        return
    }
     orderSection.style.display = "block";
              const orderHTML = order.map(item => {
                return `
                    <div class="order-item">
                        <span class="order-item-name">${item.name}</span>
                        <span class="order-item-price">$${item.price}</span>
                        <button class="remove-btn" data-id="${item.id}">
                            <i data-feather="trash-2" class="icon"></i> Remove
                        </button>
                    </div>
                `;
            }).join("");

            orderItems.innerHTML = orderHTML
            const totalPrice = order.reduce((total , item ) => total + item.price, 0)
            totalPriceElement.textContent = `$${totalPrice}`;
            feather.replace();

}

  function addToOrder(itemId) {
    const menuItem = menuArray.find(item => item.id === itemId)
    if(menuItem){
        order.push({...menuItem})
        renderOrder()
    }

  }

      function removeFromOrder(itemId) {
            const itemIndex = order.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                order.splice(itemIndex, 1);
                renderOrder();
            }
        }
    


        menus.addEventListener("click" , (e) =>{
            if(e.target.closest(".btn1")){

               const button = e.target.closest(".btn1");
                const itemId = parseInt(button.getAttribute("data-id"));
                addToOrder(itemId)


            }
        })

        orderItems.addEventListener("click", function(e) {
            if (e.target.closest(".remove-btn")) {
                const button = e.target.closest(".remove-btn");
                const itemId = parseInt(button.getAttribute("data-id"));
                removeFromOrder(itemId);
            }
        });

        function payment(){
            document.querySelector(".payment-modal").style.display = "flex"
        }

  
         function handlePayment(e) {
            e.preventDefault();
            paymentModal.style.display = "none";
            orderSection.style.display = "none";
            thankYouMessage.style.display = "block";
            order = [];
        }
        
        document.querySelector(".complete-order").addEventListener("click" , payment)
        paymentForm.addEventListener("submit", handlePayment);
        renderMenu()