const app = Vue.createApp({
    data() {
        return {
            selectedCategory: '',
            selectedPage:'',
            page_links: [
                { link: { text: 'Board Games', url: 'Listing.html', category: "Board Games" } },
                { link: { text: 'Card Games', url: 'Listing.html', category: "Card Games" } },
                { link: { text: 'Video Games', url: 'Listing.html', category: "Video Games" } },
                { link: { text: 'Books', url: 'Listing.html', category: "Books" } },
                {link: {text: 'About Us', url: 'About.html' }}
            ]
        };
    },
    methods: {
        updateCategory(newCategory) {
            this.selectedCategory = newCategory;
            localStorage.setItem('selectedCat', newCategory);
        },

    },
    mounted() {
        const savedCategory = localStorage.getItem('selectedCat');
        if (savedCategory) {
            this.selectedCategory = savedCategory;
        }
    }
});


// Header Component
const HeaderComponent = {
    template: `
    <div class="xl:sticky top-3 z-50">
      <div class="w-full mx-auto bg-white rounded-xl shadow-lg p-5 mt-3">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center mb-4 md:mb-0">
            <a href="MainPage.html" class="text-2xl font-bold text-dark">HappyHouse</a>
          </div>
          <div class="flex flex-col md:flex-row  items-center ">

                <nav class="">
                    <ul class="flex flex-wrap md:grid md:grid-cols-3 xl:flex xl:flex-wrap gap-2 flex-row ">
                        <li v-for="(page, index) in links" :key="index" @click="goToPage(page.link.url, page.link.text)" class="w-full min-w-32 md:max-w-32 text-center px-0 py-3 sm:px-4 cursor-pointer shadow hover:shadow-xl rounded-xl duration-[500ms]">
                            <span  class="">{{page.link.text}}</span>
                        </li>
                    </ul>
                </nav>

                <div class="flex md:w-[48px] md:flex-col xl:flex-row md:gap-3 w-full  md:w-auto m-3">
                <div class="w-1/2 md:w-full text-center px-0 py-3 sm:px-4 cursor-pointer shadow hover:shadow-xl rounded-xl duration-[500ms]">
                <a href="Cart.html" class="flex items-center justify-center w-full h-full" shadow bg-black>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.08416 2.7512C2.22155 2.36044 2.6497 2.15503 3.04047 2.29242L3.34187 2.39838C3.95839 2.61511 4.48203 2.79919 4.89411 3.00139C5.33474 3.21759 5.71259 3.48393 5.99677 3.89979C6.27875 4.31243 6.39517 4.76515 6.4489 5.26153C6.47295 5.48373 6.48564 5.72967 6.49233 6H17.1305C18.8155 6 20.3323 6 20.7762 6.57708C21.2202 7.15417 21.0466 8.02369 20.6995 9.76275L20.1997 12.1875C19.8846 13.7164 19.727 14.4808 19.1753 14.9304C18.6236 15.38 17.8431 15.38 16.2821 15.38H10.9792C8.19028 15.38 6.79583 15.38 5.92943 14.4662C5.06302 13.5523 4.99979 12.5816 4.99979 9.64L4.99979 7.03832C4.99979 6.29837 4.99877 5.80316 4.95761 5.42295C4.91828 5.0596 4.84858 4.87818 4.75832 4.74609C4.67026 4.61723 4.53659 4.4968 4.23336 4.34802C3.91052 4.18961 3.47177 4.03406 2.80416 3.79934L2.54295 3.7075C2.15218 3.57012 1.94678 3.14197 2.08416 2.7512Z" fill="#000000"/>
      <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#000000"/>
      <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#000000"/>
    </svg>

              </a>
              </div>
              <div class="w-1/2 md:w-full text-center px-0 py-3 sm:px-4 cursor-pointer shadow hover:shadow-xl rounded-xl duration-[500ms]">
                <a href="WishList.html" class="flex items-center justify-center w-full h-full" shadow bg-black>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              </div>
          </div>
          </div>  
          
        </div>
      </div>
    </div>
    `,

    props: ['selectedCategory','links'],
    methods: {
        saveSelectedCat(catText) {
            this.$emit('update-category', catText);
        },
        goToPage(url, text) {
          this.saveSelectedCat(text)
          window.location.href = url;
      },
    },
};


// Category Tabs Component
const CategoryTabs = {
    props: ['selectedCategory'],
    data() {
        return {
            tabs: [
                { link: { text: 'Board Games', url: 'Listing.html', category: "Board Games" } },
                { link: { text: 'Card Games', url: 'Listing.html', category: "Card Games" } },
                { link: { text: 'Video Games', url: 'Listing.html', category: "Video Games" } },
            ]
            
        };
    },
    methods: {
        saveSelectedCat(catText) {
            this.$emit('update-category', catText);
        }
    },
    template: `
    <div class="w-full mx-auto bg-white rounded-xl shadow-lg py-5 px-4 mt-3">
    <ul class="flex justify-around w-full gap-2">
        <li v-for="tab in tabs" :key="tab" 
            class="w-full text-center px-0 py-3 sm:px-4 cursor-pointer shadow hover:shadow-xl rounded-xl duration-[500ms]"
            @click="saveSelectedCat(tab.link.category)"
            :class="{'bg-slate-100 shadow-xl': selectedCategory === tab.link.category}">
            <span class="text-xs sm:text-sm md:text-base lg:text-lg ">{{tab.link.text}}</span>
        </li>
    </ul>
</div>
    `
};

// Display Products Component
const DisplayProducts = {
    props: ['selectedCategory', 'numProducts'],
    data() {
        return {
            products,
            filteredProducts: [], 
            priceRange: { min: 0, max: 60 }, 
            manufacturerFilter: '',
        };
    },
    computed: {
        filteredProductsByCategory() {
                return this.products.filter(product => product.category === this.selectedCategory);

        },
        filteredProductsByPriceRange() {
            return this.filteredProductsByCategory.filter(product => {
                return product.price >= this.priceRange.min && product.price <= this.priceRange.max;
            });
        },
        filteredProductsByManufacturer() {
          if (this.manufacturerFilter === '') {
              return this.filteredProductsByPriceRange;
          } else {
              return this.filteredProductsByPriceRange.filter(product => product.name.toLowerCase().includes(this.manufacturerFilter.toLowerCase()));
          }
      },


    },
    methods: {
        updatePriceRange(min, max) {
            this.priceRange.min = min;
            this.priceRange.max = max;
        },
        toggleStockFilter() {
            this.inStockOnly = !this.inStockOnly;
        },
        toggleSortOrder() {
            this.sortAscending = !this.sortAscending;
        },
        saveProductID(productID) {
            localStorage.setItem('ProductID', productID);
        },
        goToProductPage() {
            window.location.href = 'ProductPage.html';
        }
    },
    template: `
        <div>
            <!-- Filtering controls -->
            <div>
                <!-- Price range filter -->
                <div class="flex flex-row">
                <div class="flex flex-col w-50">
                <div class="flex flex-row"><input type="range" min="0" max="100" v-model="priceRange.min"> <span>Min: {{ priceRange.min }}</span> </div>
                <div class="flex flex-row"><input type="range" min="0" max="100" v-model="priceRange.max"> <span>Max: {{ priceRange.max }}</span> </div>
                </div>
                
                <!-- Manufacturer filter -->
                <input type="text" v-model="manufacturerFilter" placeholder="Name">
                <!-- In stock only filter -->
                </div>
            </div>

            <!-- Product display -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div v-for="(item, index) in filteredProductsByManufacturer.slice(0, numProducts)" :key="index" 
                    @mouseover="saveProductID(item.id)" 
                    @click="goToProductPage"
                    class="min-h-32 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white text-gray-900 border-0 mx-auto relative rounded-xl shadow hover:shadow-xl cursor-pointer duration-[500ms]">
                    <div class="overflow-hidden p-2 rounded-md">
                        <img :alt="item.name" loading="lazy" class="w-full h-auto" :src="item.image" style="color: transparent;">
                    </div>
                    <div class="px-2 py-3">
                        <h5 class="text-base font-semibold text-center">{{ item.name }}</h5>
                        <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2">
                            <span>{{ item.price }}$</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
};

const productPage = {
    data() {
      return {
        products,
        selectedProductId: '',
        selectedProduct: '',
        cartItems: []
      };
    },
    methods: {
      retrieveSelectedProductId() {
        const productId = localStorage.getItem('ProductID');
        if (productId) {
          this.selectedProductId = parseInt(productId);
          this.searchProductById();
        }
      },
      searchProductById() {
        this.selectedProduct = this.products.find(product => product.id === this.selectedProductId);
      },
      addTOcartItems() {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
          this.cartItems = JSON.parse(storedCartItems);
        }
  
        const existingProduct = this.cartItems.find(item => item.id === this.selectedProduct.id);
  
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          this.selectedProduct.quantity = 1;
          this.cartItems.push(this.selectedProduct);
        }
  
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        console.log(this.cartItems);
      },
      addToWishlist() {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!wishlist.some(item => item.id === this.selectedProduct.id)) {
            wishlist.push(this.selectedProduct);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
        console.log(wishlist);
    }
    },
    mounted() {
      this.retrieveSelectedProductId();
    },
    template: `
      <div class="w-full mx-auto bg-white rounded-xl shadow-lg p-5 mt-3 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="overflow-hidden p-2 rounded-md">
              <img class="w-auto h-auto max-h-96 object-cover mx-auto" :src="selectedProduct.image" :alt="selectedProduct.name">
            </div>
            <div class="flex flex-col -mx-2 mb-4">
              <div class="full px-2">
                <button @click='addTOcartItems()' class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
              </div>
              <div class="full px-2">
                <button  @click='addToWishlist()' class="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ selectedProduct.name }}</h2>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700">Price:</span>
                <span class="text-gray-600">{{ selectedProduct.price }}</span>
              </div>
            </div>
            <div>
              <span class="font-bold text-gray-700">Product Description:</span>
              <p class="text-gray-600 text-sm mt-2">
                {{ selectedProduct.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  };
  

  const CartItemCard = {
    data() {
      return {
        Shipping: 4.99,
        cartItems: []
      };
    },
    computed: {
      cartTotal() {
        return this.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      }
    },
    methods: {
      getItemArray() {
        const myJason = localStorage.getItem('cartItems');
        if (myJason) {
          this.cartItems = JSON.parse(myJason);
          console.log(this.cartItems);
        }
      },
      removeFromCart(index) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      },
      updateQuantity(index, quantity) {
        quantity = parseInt(quantity);
        if (quantity < 1) {
          this.removeFromCart(index);
        } else {
          this.cartItems[index].quantity = quantity;
          localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); 
        }
      },
      goToProductPage() {
        window.location.href = 'Checkout.html';
    }
    },
    mounted() {
      this.getItemArray();
    },
    template: `
      <div class="w-full mx-auto bg-white rounded-xl shadow-lg p-5 mt-3">
        <div v-if="cartItems.length === 0" class="text-center text-gray-500">
          <p>Your cart is empty</p>
        </div>
        <div v-else>
          <div v-for="(item, index) in cartItems" :key="item.id" class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img :src="item.image" alt="item.name" class="w-full rounded-lg sm:w-40" />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">{{item.name}}</h2>
              </div>
              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span @click="updateQuantity(index, item.quantity - 1)" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                  <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" :value="item.quantity" @input="updateQuantity(index, $event.target.value)">
                  <span @click="updateQuantity(index, item.quantity + 1)" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">{{(item.price * item.quantity).toFixed(2)}}$</p>
                  <svg @click="removeFromCart(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 h-full rounded-lg  bg-white p-6 shadow-md md:mt-0 ">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">{{cartTotal.toFixed(2)}}$</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">{{Shipping}}$</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">{{(cartTotal+Shipping).toFixed(2)}}$</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button @click="goToProductPage()" class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
          </div>
        </div>
      </div>
    `
  };
  
  const CheckoutComponent = {
    data() {
        return {
            Shipping: 4.99,
            cartItems: [],
            userInfo: {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                cardNumber: '',
                expiration: '',
                cvv: ''
            },
            orderPlaced: false
        };
    },
    computed: {
        cartTotal() {
            return this.cartItems.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
        },
        totalWithShipping() {
            return this.cartTotal + this.Shipping;
        }
    },
    methods: {
        getItemArray() {
            const myJson = localStorage.getItem('cartItems');
            if (myJson) {
                this.cartItems = JSON.parse(myJson);
            }
        },
        placeOrder() {
          if (!this.userInfo.name || !this.userInfo.address || !this.userInfo.city || !this.userInfo.state || !this.userInfo.zip || !this.userInfo.cardNumber || !this.userInfo.expiration || !this.userInfo.cvv) {
              alert("Please fill in all fields.");
              return;
          }
          console.log("Order placed:", this.userInfo, this.cartItems);
          this.orderPlaced = true;
          localStorage.setItem('orderItems', JSON.stringify(this.cartItems));
          localStorage.removeItem('cartItems');
          this.cartItems = [];
      }
    },
    mounted() {
        this.getItemArray();
    },
    template: `
    <div class="w-full mx-auto bg-white rounded-xl shadow-lg p-5 mt-3">
    <div v-if="orderPlaced" class="text-center text-gray-500">
        <p>Thank you for your order!</p>
    </div>
    <div v-else>
    <h2 class="text-2xl font-bold mb-4">Checkout</h2>
    <form @submit.prevent="placeOrder">
      <div v-for="(item, index) in cartItems" :key="item.id" class="mb-4">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img :src="item.image" :alt="item.name" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0 flex gap-3">
              <h2 class="text-lg font-bold text-gray-900">{{item.name}}</h2>
              <span class="text-lg">{{item.price}}$</span>
              <span class="bg-white text-center text-lg outline-none">x {{item.quantity}}</span>
              <span class="text-lg">{{(item.price * item.quantity).toFixed(2)}}$</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div class="flex justify-between">
          <div>Subtotal:</div>
          <div>{{ cartTotal.toFixed(2) }}$</div>
        </div>
        <div class="flex justify-between">
          <div>Shipping:</div>
          <div>{{ Shipping }}$</div>
        </div>
        <div class="flex justify-between font-bold">
          <div>Total:</div>
          <div>{{ totalWithShipping.toFixed(2) }}$</div>
        </div>
      </div>
      <h3 class="text-xl font-bold mb-4">Shipping Information</h3>
      <div class="mb-4">
        <label class="block mb-2">Name</label>
        <input required v-model="userInfo.name" type="text" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Address</label>
        <input required v-model="userInfo.address" type="text" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">City</label>
        <input required v-model="userInfo.city" type="text" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">State</label>
        <input required v-model="userInfo.state" type="text" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Zip Code</label>
        <input required v-model="userInfo.zip" type="text" class="w-full p-2 border rounded" />
      </div>
      <h3 class="text-xl font-bold mb-4">Payment Information</h3>
      <div class="mb-4">
        <label class="block mb-2">Card Number</label>
        <input required v-model="userInfo.cardNumber" type="text" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Expiration Date</label>
        <input required v-model="userInfo.expiration" type="text" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">CVV</label>
        <input required v-model="userInfo.cvv" type="text" class="w-full p-2 border rounded" />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded font-bold hover:bg-blue-600">Place Order</button>
    </form>
  </div>
</div>
    `
};

const WishlistComponent = {
  data() {
      return {
          wishlist: []
      };
  },
  methods: {
      getWishlist() {
          const storedWishlist = localStorage.getItem('wishlist');
          if (storedWishlist) {
              this.wishlist = JSON.parse(storedWishlist);
          }
      },

      getItemArray() {
        const myJason = localStorage.getItem('cartItems');
        if (myJason) {
          this.cartItems = JSON.parse(myJason);
          console.log(this.cartItems);
        }
      },

      removeFromWishlist(index) {
          this.wishlist.splice(index, 1);
          localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
      },
      
      addTOcartItems(item, index) {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
          this.cartItems = JSON.parse(storedCartItems);
        }
  
        const existingProduct = this.cartItems.find(cartitem => cartitem.id === item.id);
  
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          item.quantity = 1;
          this.cartItems.push(item);
        }
  
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.removeFromWishlist(index);
        console.log(this.cartItems);
      },

  },
  mounted() {
      this.getWishlist();
  },
  template: `
  <div class="w-full mx-auto bg-white rounded-xl shadow-lg p-5 mt-3">
      <div v-if="wishlist.length === 0" class="text-center text-gray-500">
          <p>Your wishlist is empty</p>
      </div>
      <div v-else>
          <div v-for="(item, index) in wishlist" :key="item.id" class="flex justify-between mb-4 p-4 rounded-lg shadow-md bg-white">
              <img :src="item.image" class="w-20 h-20 rounded-lg object-cover" />
              <div class="flex flex-col justify-center">
                  <h5 class="text-lg font-semibold">{{ item.name }}</h5>
                  <p class="text-gray-500">{{ item.price }}$</p>
              </div>
              <div class="flex gap-4">
              <button @click="removeFromWishlist(index)" class="text-red-500 hover:text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
              <button @click="addTOcartItems(item, index)" class="text-lime-500 hover:text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
              </button>
              </div>
          </div>
      </div>
  </div>
  `
};
  
  
  
  
  
  

// Footer Component
const FooterComponent = {
    props:['links'],
    template: `
        <section class="bg-white py-5 px-4 mt-5 w-full mx-auto bg-white rounded-xl shadow-lg">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div v-for="page in links" :key="page.link.text" class="px-5 py-2">
                <a :href="page.link.href" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    {{ page.link.text }}
                </a>
            </div>
        </nav>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 DOLGHIERUMAXIM, Inc. All rights reserved.
        </p>
    </div>
        </section>
    `
};

// Mounting Components
app.component('header-component', HeaderComponent);
app.component('categorytabs-component', CategoryTabs);
app.component('product-component', productPage);
app.component('display-products', DisplayProducts);
app.component('cart-items-card', CartItemCard);
app.component('checkout-component', CheckoutComponent);
app.component('wishlist-component', WishlistComponent);
app.component('footer-component', FooterComponent);

// Mounting Vue App
app.mount('#app');
