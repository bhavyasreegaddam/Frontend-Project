import React from 'react'
const Mainbar = () => {
  return (
    <>
      <div id="main">
      <div className="main-1">
          <div className='Fashion'>
            <img src="./cat1.png"/>
            <span>Fashion</span>
          </div>
          <div className='Electronic'>
            <img src="./cat2.png"/>
            <span>Electronics</span>
          </div>
          <div className='Electronic'>
            <img src="./cat3.png"/>
            <span>Cars</span>
          </div>
          <div className='Electronic'>
            <img src="./cat4.png"/>
            <span>Home & Garden</span>
          </div>
          <div className='Electronic'>
            <img src="./cat5.png"/>
            <span>Gifts</span>
          </div>
          <div className='Electronic'>
            <img src="./cat6.png"/>
            <span>Music</span>
          </div>
          <div className='Electronic'>
            <img src="./cat7.png"/>
            <span>Health & Beauty</span>
          </div>
          <div className='Electronic'>
            <img src="./cat8.png"/>
            <span>Pets</span>
          </div>
          <div className='Electronic'>
            <img src="./cat9.png"/>
            <span>Baby Toys</span>
          </div>
          <div className='Electronic'>
            <img src="cat10.png"/>
            <span>Groceries</span>
          </div>
          <div className='Electronic'>
            <img src="cat11.png"/>
            <span>Books</span>
          </div>
         </div> 
    <div class="slider">
      <div class="slides">
        <div class="slide1">
        <div class="slide">
            <h2>50% Off For Your <br/>First Shopping</h2>
            <p>Get the latest Collection With an Exclusive Offer.<br/> Avail at your door step. Hurry up before the stock runs out!</p>
            <button>Visit Collections</button>
            </div>
            <div class="slide-img">
            <img src="https://m.media-amazon.com/images/I/51LdPqkM+5L.jpg" alt="Smart Watch"/>
            </div>
            </div>
          {/* <div class="slide2">
            <h2>Special Offer on New Collection</h2>
            <p>Get the latest collection with an exclusive discount. Don't miss out on this limited-time offer.</p>
            <button>Explore Now</button>
            <img src="watch2.png" alt="Smart Watch"/>
        </div>
        <div class="slide3">
            <h2>Exclusive Deals on All Accessories</h2>
            <p>Upgrade your style with our premium accessories. Avail the offer before it ends.</p>
            <button>Shop Accessories</button>
            <img src="watch3.png" alt="Smart Watch"/>
        </div>
        <div class="slide4">
            <h2>Limited Time Offer on Smartwatches</h2>
            <p>Buy the latest smartwatches with amazing discounts. Hurry up before the stock runs out!</p>
            <button>Buy Now</button>
            <img src="watch4.png" alt="Smart Watch"/>
      </div> */}
    </div>
  </div>
       <div class="navigation-dots">
        <span class="dot active" onclick="showSlide(0)"></span>
        <span class="dot" onclick="showSlide(1)"></span>
        <span class="dot" onclick="showSlide(2)"></span>
        <span class="dot" onclick="showSlide(3)"></span>
       </div>
    </div> 
    {/* Flash Deals*/}
    <h1 className="h1">⚡Flash Deals </h1>
    <div className='flash-con'>
         <div className='first'>
          <p>50% Off</p>
          <img src="https://t3.ftcdn.net/jpg/02/95/12/70/360_F_295127088_IEk7c55MpYFOVv8DCsY8HuPNKupeq1Cz.jpg"/>
          <h3>Watch</h3>
          <h3>⭐⭐⭐⭐⭐</h3>
          <h2>300.0</h2>
          <button>Add to Cart</button>
         </div>
         <div className='second'>
         <p>40% Off</p>
          <img src="./show.jpg"/>
          <h3>Shoes</h3>
          <h3>⭐⭐⭐⭐⭐</h3>
           <h2>500.0</h2>
           <button>Add to Cart</button>
         </div>
         <div className='third'>
         <p>30% Off</p>
          <img src="https://static.digit.in/default/apple-iphone-15-pro-max-1a178aef71.jpeg"/>
          <h3>Iphone</h3>
          <h3>⭐⭐⭐⭐⭐</h3>
          <h2>10000.0</h2>
          <button>Add to Cart</button>
         </div>
         <div className='forth'>
         <p>50% Off</p>
          <img src="https://4.imimg.com/data4/PM/KH/MY-34794816/lcd-500x500.png"/>
          <h3>Samsung Tv</h3>
          <h3>⭐⭐⭐⭐⭐</h3>
          <h2>3000.0</h2>
          <button>Add to Cart</button>
         </div>
    </div>
    {/* Another  */}
    <div className='flash-con'>
         <div className='first'>
          <p>50% Off</p>
          <img src="https://png.pngtree.com/png-clipart/20240312/original/pngtree-a-pair-of-sleek-bluetooth-headphones-delivering-premium-sound-quality-against-png-image_14577971.png"/>
          <h3>Head Phones</h3>
          <h3>⭐⭐⭐⭐⭐</h3>
          <h2>700.0</h2>
          <button>Add to Cart</button>
         </div>
         <div className='second'>
         <p>40% Off</p>
          <img src="https://m.media-amazon.com/images/I/819aSX3oIoL._AC_UF1000,1000_QL80_.jpg"/>
          <h3>Clock </h3>
          <h3>⭐⭐⭐⭐⭐</h3>
           <h2>520.0</h2>
           <button>Add to Cart</button>
         </div>
         <div className='third'>
         <p>20% Off</p>
          <img src="https://t4.ftcdn.net/jpg/03/56/59/45/360_F_356594554_IacngzMDDnWcBWQP6pb1EKohaiKB0vH9.jpg"/>
          <h3>Perfume</h3>
          <h3>⭐⭐⭐⭐⭐</h3>
          <h2>1000.0</h2>
          <button>Add to Cart</button>
         </div>
         <div className='forth'>
         <p>50% Off</p>
          <img src="https://www.glassesindia.com/cdn/shop/products/66007C1_0a3f2cf4-d7cc-4f94-8a7a-21b788029323.jpg?v=1685040537&width=1445"/>
          <h3>Computer Glasses</h3>
          <h3>⭐⭐⭐⭐⭐</h3>
          <h2>200.0</h2>
          <button>Add to Cart</button>
         </div>
    </div>
    {/* Top categories  */}
    <h1 className='top-h1'>🛒 Top Categories</h1>
    <div className='top'>
     <div className='first'>
        <img src="https://i.ebayimg.com/thumbs/images/g/xTsAAOSwrsNmrm0v/s-l1200.jpg"/>
        <h4>10 Orders in this Week</h4>
     </div>
     <div className='second'>
       <img src='https://anyasreviews.com/wp-content/uploads/2021/06/Fashion-but-make-it-barefoot-May-final.jpg'/>
      <h4>5 Orders in this Week</h4>
     </div>
     <div className='third'>
       <img src='https://i.redd.it/xkvjhejwrny71.jpg'/>
       <h4>7 Orders in this Week</h4>
     </div>
    </div>
    {/* New Arrivals  */}
    <h1 className='new-h1'>🌟 New Arrivals 🌟</h1>
    <div className='new'>
      <div className='first'>
       <img src='https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?cs=srgb&dl=pexels-nitin-creative-46710.jpg&fm=jpg'/>
       <h3>Sun Glasses</h3>
       <h3>⭐⭐⭐⭐⭐</h3>
       <button>Add to Cart</button>
      </div>
      <div className='second'>
        <img src='https://images.ctfassets.net/u4vv676b8z52/3OYeHyRL4qz1LzLjxW0bWC/2cdea093cb11c18f0960cee4fb2361e4/eye-makeup-678x446.gif?fm=jpg&q=80'/>
        <h3>Makeup Kit</h3>
        <h3>⭐⭐⭐⭐⭐</h3>
        <button>Add to Cart</button>
      </div>
     <div className='third'>
       <img src='https://imgeng.jagran.com/images/2023/dec/Best%20Smart%20Watch%20For%20Men%20In%20India1702885926543.jpg'/>
       <h3>Smart Watch</h3>
       <h3>⭐⭐⭐⭐⭐</h3>
       <button>Add to Cart</button>
     </div>
     <div className='forth'>
       <img src='https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_746/v1627304509/Coolest-Rainforest-Plants-Heliconia-1/Coolest-Rainforest-Plants-Heliconia-1.jpg'/>
       <h3>Plants</h3>
       <h3>⭐⭐⭐⭐⭐</h3>
       <button>Add to Cart</button>
     </div>
     <div className='fifth'>
      <img src='https://m.media-amazon.com/images/I/51XaVluwAUL._AC_UF1000,1000_QL80_.jpg'/>
      <h3>Bonsai Tree</h3>
      <h3>⭐⭐⭐⭐⭐</h3>
      <button>Add to Cart</button>
     </div>
    </div>
    {/* Big Discounts  */}
    <h1 className='big-content'><span>🎁</span> Big Discounts</h1>
    <div className='big-d'>
         <div className='big-img'>
          <div className='big-first'>
           <img src='https://hammeronline.in/cdn/shop/files/HammerBash2.0Headphones.webp?v=1690436990' alt='headphones'/>
           <h2>Head Phones</h2>
           <h3>300.00</h3>
           </div>
           <div className='big-second'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5y6-QqAR8vH_3uRlcw_h8nk6BMSPdflDdQ&s' alt='washing-machine'/>
           <h2>Washing Machine</h2>
           <h3>30000.00</h3>
           </div>
           <div className='big-third'>
           <img src='https://www.shutterstock.com/image-illustration/modern-opened-black-refrigerator-isolated-600nw-1390099064.jpg' alt='fridge'/>
           <h2>Fridge</h2>
           <h3>10000.00</h3>
           </div>
           <div className='big-forth'>
           <img src='https://www.lg.com/content/dam/channel/wcms/in/images/audio/sq75tr-aindllk-eail-in-c/gallery/SQ75TR--D-15.jpg/_jcr_content/renditions/thum-1600x1062.jpeg' alt='soundbar'/>
           <h2>Sound Bar</h2>
           <h3>5000.00</h3>
           </div>
           <div className='big-fifth'>
           <img src='https://img.freepik.com/premium-vector/realistic-inkjet-printer-isoalted-white-background_208593-72.jpg' alt='printer'/>
           <h2>Printer</h2>
           <h3>3000.00</h3>
           </div>
           <div className='big-sixth'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPdaIbb2sva4Hl4HaxwxkM4VgPsnYWtMDFA&s' alt='buds'/>
           <h2>Ear Buds</h2>
           <h3>1000.00</h3>
           </div>
           <div className='big-svnth'>
           <img src='https://www.gonoise.com/cdn/shop/files/StardustSilver_fb0f0017-1bc7-41b4-b371-c4b81daf3063.webp?v=1702963588' alt='ring'/>
           <h2>Sensor Ring</h2>
           <h3>2000.00</h3>
           </div>
         </div>
    </div>
    <div class="container">
        {/* <!-- Sidebar --> */}
        <aside class="sidebar">
            <h2>Brands</h2>
            <ul>
                <li><a href="#">Apple</a></li>
                <li><a href="#">Samsung</a></li>
                <li><a href="#">Oppo</a></li>
                <li><a href="#">Vivo</a></li>
                <li><a href="#">Redmi</a></li>
                <li><a href="#">Sony</a></li>
            </ul>
        </aside>

        {/* <!-- Main Content --> */}
        <main class="main-content">
            <h1>Mobile Phones</h1>
            <div class="products">
                {/* <!-- Row 1 --> */}
                <div class="product-card">
                    <span class="discount">10% Off</span>
                    <img src="https://www.imagineonline.store/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1692351320" alt="Iphone"/>
                    <h3>Iphone</h3>
                    <div class="rating">★★★★★</div>
                    <p class="price">999.00</p>
                    <button class="add-to-cart">+</button>
                </div>

                <div class="product-card">
                    <span class="discount">20% Off</span>
                    <img src="https://i.gadgets360cdn.com/products/headphones-and-headsets/small/beats-solo-2-wireless-headphone-240X180-1598516061.jpg" alt="Ceats wireless earphone" className='imgs'/>
                    <h3>Ceats wireless earphone</h3>
                    <div class="rating">★★★★★</div>
                    <p class="price">80.00</p>
                    <button class="add-to-cart">+</button>
                </div>

                <div class="product-card">
                    <span class="discount">20% Off</span>
                    <img src="https://i03.appmifile.com/676_item_in/05/12/2023/70a7d19fdf39eebbe9b0172387fb4353.jpg" alt="Redmi Phone"/>
                    <h3>Redmi Phone</h3>
                    <div class="rating">★★★★★</div>
                    <p class="price">400.00</p>
                    <button class="add-to-cart">+</button>
                </div>

                {/* <!-- Row 2 --> */}
                <div class="product-card">
                    <span class="discount">5% Off</span>
                    <img src="https://m.media-amazon.com/images/I/61iFeb5BqBL.jpg" alt="Wired Earphone"/>
                    <h3>Wired Earphone</h3>
                    <div class="rating">★★★★★</div>
                    <p class="price">50.00</p>
                    <button class="add-to-cart">+</button>
                </div>

                <div class="product-card">
                    <span class="discount">10% Off</span>
                    <img src="https://mobilezon.in/wp-content/uploads/2023/07/apple-airpods-pro-2-2022-bluettoth-earbuds.jpg" alt="White Earpods"/>
                    <h3>White Earpods</h3>
                    <div class="rating">★★★★★</div>
                    <p class="price">60.00</p>
                    <button class="add-to-cart">+</button>
                </div>

                <div class="product-card">
                    <span class="discount">2% Off</span>
                    <img src="https://mysportsjersey.in/wp-content/uploads/2020/06/India-Capi.jpg" alt="Cap"/>
                    <h3>Cap</h3>
                    <div class="rating">★★★★★</div>
                    <p class="price">20.00</p>
                    <button class="add-to-cart">+</button>
                </div>
            </div>
        </main>
    </div>
    {/* offer images  */}
    <img src='./off.png' className='high'/>
    <section class="features">
        <div class="feature-card">
            <div class="icon">
                <img src="https://ep-website-media.s3.ap-southeast-1.amazonaws.com/my/wp-content/uploads/2022/09/Webpage-15-International-Delivery-02.png" alt="Worldwide Delivery"/>
            </div>
            <h3>Worldwide Delivery</h3>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
        </div>

        <div class="feature-card">
            <div class="icon">
                <img src="https://img.freepik.com/premium-vector/secure-payment-credit-card-icon-with-shield-secure-transaction-vector-stock-illustration_100456-11325.jpg" alt="Safe Payment"/>
            </div>
            <h3>Safe Payment</h3>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
        </div>

        <div class="feature-card">
            <div class="icon">
                <img src="https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-supermarket-shopping-with-confidence-follow-this-chic-and-proud-girl-vector-png-image_31519378.png" alt="Shop With Confidence"/>
            </div>
            <h3>Shop With Confidence</h3>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
        </div>

        <div class="feature-card">
            <div class="icon">
                <img src="https://img.freepik.com/premium-vector/24-hour-service-iconheadphone-talk-support-phone-consult-customer-problems_68708-3344.jpg" alt="24/7 Support"/>
            </div>
            <h3>24/7 Support</h3>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
        </div>
    </section>
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h2 class="brand">Fashion</h2>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus.
                </p>
                <div class="app-buttons">
                    <a href="#" class="google-play">Google Play</a>
                    <a href="#" class="app-store">App Store</a>
                </div>
            </div>

            <div class="footer-section">
                <h3>About Us</h3>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Our Stores</a></li>
                    <li><a href="#">Our Cares</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Customer Care</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">How to Buy</a></li>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">Corporate & Bulk Purchasing</a></li>
                    <li><a href="#">Returns & Refunds</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Contact Us</h3>
                <ul>
                    <li>70 Washington Square South, New York, NY 10012, United States</li>
                    <li>Email: <a href="mailto:uilib.help@gmail.com">uilib.help@gmail.com</a></li>
                    <li>Phone: +1 1123 456 780</li>
                </ul>
            </div>
        </div>
    </footer>
  </>
  
  
  )
}


export default Mainbar