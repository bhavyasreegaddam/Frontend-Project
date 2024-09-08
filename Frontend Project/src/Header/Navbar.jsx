import React from 'react'

const Navbar = () => {
  return (
    <>
   <div id='navbar'>
      <div className='logo'>
        <h2>Fashion</h2>
      </div>
      <div className='search-bar'>
       <input type='text' placeholder='Search and hit enter...'/>
       
       <button>Search<span class="material-symbols-outlined">
        search
       </span></button>
      </div>
      <div className='logos'>
      <span class="material-symbols-outlined">
      account_circle
      </span> 
      <span class="material-symbols-outlined">
      shopping_bag
      </span>
      </div>
    </div>
    {/* Categories  */}
    <div className='category'>
      <span class="material-symbols-outlined">
       category_search
      </span>
      <span className='name'>Categories</span>
      <span class="material-symbols-outlined">
      arrow_drop_down
      </span>
      {/* Navbar anchor tags  */}
      <nav>
      <a href="#">Home</a>
      <a href="../products.html">Products</a>
      <a href="../user.html">User Account</a>
      <a href="#">Vendor Account</a>
      <a href="#">Track My Order</a>
      <a href="#">Contact</a>
      </nav>
      </div>
    </>
  )
}

export default Navbar