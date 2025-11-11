import React, { useState, useEffect } from 'react';
import { ShoppingCart, Clock, MapPin, Search, Plus, X, Menu } from 'lucide-react';
import './Orderpage.css';

export default function OrderPage() {
  const [activeCategory, setActiveCategory] = useState('Pizzas');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('none');
  const [basket, setBasket] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileBasket, setShowMobileBasket] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    'Pizzas', 'Garlic Bread', 'Calzone', 'Kebabs', 'Salads',
    'Cold drinks', 'Happy Meal*', 'Desserts', 'Hot drinks', 'Sauces', 'Orbit*'
  ];

  const pizzas = [
    {
      id: 1,
      name: 'Farm House Xtreme Pizza',
      category: 'Pizzas',
      rating: 5,
      desc: '1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      prices: { Small: 23.90, Medium: 25.90, Large: 27.90 },
      xlPrice: 23.90
    },
    {
      id: 2,
      name: 'Deluxe Pizza',
      category: 'Pizzas',
      rating: 5,
      desc: '1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      prices: { Small: 23.90, Medium: 25.90, Large: 27.90 },
      xlPrice: 32.90
    },
    {
      id: 3,
      name: 'Tandoori Pizza',
      category: 'Pizzas',
      rating: 5,
      desc: '1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      prices: { Small: 23.90, Medium: 25.90, Large: 27.90 },
      xlPrice: 32.90
    },
    {
      id: 4,
      name: 'Cheesy Garlic Bread',
      category: 'Garlic Bread',
      rating: 4,
      desc: 'Fresh baked bread with melted cheese and garlic butter',
      prices: { Small: 5.90, Medium: 7.90, Large: 9.90 }
    },
    {
      id: 5,
      name: 'Herb Garlic Bread',
      category: 'Garlic Bread',
      rating: 4,
      desc: 'Crispy bread with Italian herbs and garlic',
      prices: { Small: 4.90, Medium: 6.90, Large: 8.90 }
    },
    {
      id: 6,
      name: 'Meat Calzone',
      category: 'Calzone',
      rating: 5,
      desc: 'Folded pizza filled with pepperoni, sausage, and mozzarella',
      prices: { Small: 12.90, Medium: 14.90, Large: 16.90 }
    },
    {
      id: 7,
      name: 'Veggie Calzone',
      category: 'Calzone',
      rating: 4,
      desc: 'Folded pizza with bell peppers, onions, and mushrooms',
      prices: { Small: 11.90, Medium: 13.90, Large: 15.90 }
    },
    {
      id: 8,
      name: 'Chicken Kebab',
      category: 'Kebabs',
      rating: 5,
      desc: 'Grilled chicken with fresh salad and sauce',
      prices: { Small: 8.90, Medium: 10.90, Large: 12.90 }
    },
    {
      id: 9,
      name: 'Lamb Kebab',
      category: 'Kebabs',
      rating: 5,
      desc: 'Tender lamb with vegetables and garlic sauce',
      prices: { Small: 9.90, Medium: 11.90, Large: 13.90 }
    },
    {
      id: 10,
      name: 'Caesar Salad',
      category: 'Salads',
      rating: 4,
      desc: 'Romaine lettuce, croutons, parmesan, Caesar dressing',
      prices: { Small: 6.90, Medium: 8.90, Large: 10.90 }
    },
    {
      id: 11,
      name: 'Greek Salad',
      category: 'Salads',
      rating: 4,
      desc: 'Tomatoes, cucumber, olives, feta cheese',
      prices: { Small: 7.90, Medium: 9.90, Large: 11.90 }
    },
    {
      id: 12,
      name: 'Coca Cola',
      category: 'Cold drinks',
      rating: 3,
      desc: 'Classic Coca Cola',
      prices: { '330ml': 2.50, '500ml': 3.50, '1.5L': 4.90 }
    },
    {
      id: 13,
      name: 'Fanta Orange',
      category: 'Cold drinks',
      rating: 3,
      desc: 'Refreshing orange soda',
      prices: { '330ml': 2.50, '500ml': 3.50, '1.5L': 4.90 }
    },
    {
      id: 14,
      name: 'Kids Pizza Meal',
      category: 'Happy Meal*',
      rating: 4,
      desc: 'Small pizza, fries, and a drink',
      prices: { Regular: 9.90 }
    },
    {
      id: 15,
      name: 'Chicken Nuggets Meal',
      category: 'Happy Meal*',
      rating: 4,
      desc: '6 chicken nuggets with fries and drink',
      prices: { Regular: 8.90 }
    },
    {
      id: 16,
      name: 'Chocolate Fudge Cake',
      category: 'Desserts',
      rating: 5,
      desc: 'Rich chocolate cake with fudge topping',
      prices: { Regular: 5.90 }
    },
    {
      id: 17,
      name: 'Tiramisu',
      category: 'Desserts',
      rating: 5,
      desc: 'Classic Italian dessert with coffee and mascarpone',
      prices: { Regular: 6.90 }
    },
    {
      id: 18,
      name: 'Hot Chocolate',
      category: 'Hot drinks',
      rating: 4,
      desc: 'Rich hot chocolate with whipped cream',
      prices: { Regular: 3.90, Large: 4.90 }
    },
    {
      id: 19,
      name: 'Cappuccino',
      category: 'Hot drinks',
      rating: 4,
      desc: 'Espresso with steamed milk and foam',
      prices: { Regular: 3.50, Large: 4.50 }
    },
    {
      id: 20,
      name: 'BBQ Sauce',
      category: 'Sauces',
      rating: 4,
      desc: 'Smoky barbecue sauce',
      prices: { Regular: 0.90 }
    },
    {
      id: 21,
      name: 'Garlic Mayo',
      category: 'Sauces',
      rating: 4,
      desc: 'Creamy garlic mayonnaise',
      prices: { Regular: 0.90 }
    },
    {
      id: 22,
      name: 'Mint Gum',
      category: 'Orbit*',
      rating: 3,
      desc: 'Fresh mint chewing gum',
      prices: { Pack: 1.50 }
    },
    {
      id: 23,
      name: 'Spearmint Gum',
      category: 'Orbit*',
      rating: 3,
      desc: 'Cool spearmint chewing gum',
      prices: { Pack: 1.50 }
    }
  ];

  const subtotal = basket.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountPercentage = subtotal > 50 ? 0.10 : 0;
  const discount = subtotal * discountPercentage;
  const deliveryFee = subtotal > 30 ? 0 : (subtotal > 0 ? 2.50 : 0);
  const total = subtotal - discount + deliveryFee;

  const addToBasket = (product, size, price) => {
    const newItem = {
      id: Date.now(),
      name: `${product.name} (${size})`,
      price: price,
      qty: 1
    };
    setBasket([...basket, newItem]);
  };

  const removeFromBasket = (itemId) => {
    setBasket(basket.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    setOrderSent(true);
    setShowMobileBasket(false);
    setTimeout(() => {
      setOrderSent(false);
      setShowCheckout(false);
      setBasket([]);
    }, 3000);
  };

  const filteredItems = pizzas.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === 'none') return 0;
    const aPrice = Math.min(...Object.values(a.prices));
    const bPrice = Math.min(...Object.values(b.prices));
    return sortOrder === 'asc' ? aPrice - bPrice : bPrice - aPrice;
  });

  const toggleSortOrder = () => {
    if (sortOrder === 'none') setSortOrder('asc');
    else if (sortOrder === 'asc') setSortOrder('desc');
    else setSortOrder('none');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className="order-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <h2 className="sidebar-title">Menu</h2>
          
          <ul className="category-list">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-item ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className="promo-card">
            <div className="promo-badge">-20%</div>
            <p className="promo-label">Special Offer</p>
            <p className="promo-title">First Order Discount</p>
            <button className="promo-button">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="header">
            <h1 className="page-title">Order from Tandoori Pizza London</h1>
            
            <div className="search-container">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search from menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="content-header">
            <h2 className="category-title">{activeCategory}</h2>
            <button onClick={toggleSortOrder} className={`sort-button ${sortOrder !== 'none' ? 'active' : ''}`}>
              Sort by Pricing {sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : ''}
            </button>
          </div>

          {sortedItems.length === 0 ? (
            <div className="no-results">
              <p>No items found matching "{searchQuery}"</p>
            </div>
          ) : (
            sortedItems.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    {'🌶️'.repeat(product.rating)}
                  </div>
                  <p className="product-desc">{product.desc}</p>
                </div>

                <div className="price-buttons">
                  {Object.entries(product.prices).map(([size, price]) => (
                    <button
                      key={size}
                      onClick={() => addToBasket(product, size, price)}
                      className="price-button"
                    >
                      {size}
                      <span>£{price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>

                {product.xlPrice && (
                  <button
                    onClick={() => addToBasket(product, 'XL Large', product.xlPrice)}
                    className="xl-button"
                  >
                    XL Large with sauces £{product.xlPrice.toFixed(2)}
                  </button>
                )}
              </div>
            ))
          )}
        </div>

        {/* Basket Sidebar - Desktop */}
        <div className="basket-sidebar">
          <div className="open-time-banner">
            <Clock size={20} />
            Open until 3:00 AM
          </div>

          <div className="basket-header">
            <h2 className="basket-title">
              <ShoppingCart size={24} />
              My Basket
            </h2>
          </div>

          <div className="basket-items">
            {basket.length === 0 ? (
              <div className="empty-basket">
                <ShoppingCart size={48} />
                <p className="empty-title">Your basket is empty</p>
                <p className="empty-subtitle">Add items to get started!</p>
              </div>
            ) : (
              basket.map((item) => (
                <div key={item.id} className="basket-item">
                  <div className="item-qty-badge">{item.qty}x</div>
                  <div className="item-details">
                    <div className="item-header">
                      <p className="item-name">{item.name}</p>
                      <p className="item-price">£{(item.price * item.qty).toFixed(2)}</p>
                    </div>
                    {item.extra && <p className="item-extra">{item.extra}</p>}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="basket-footer">
            {basket.length > 0 && (
              <>
                <div className="total-row">
                  <span className="total-label">Sub Total:</span>
                  <span className="total-value">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span className="total-label">
                    Discounts: {discount > 0 && <span className="discount-note">(10% off)</span>}
                  </span>
                  <span className={`total-value ${discount > 0 ? 'discount' : ''}`}>
                    {discount > 0 ? `-£${discount.toFixed(2)}` : '£0.00'}
                  </span>
                </div>
                <div className="total-row delivery-row">
                  <span className="total-label">
                    Delivery Fee: {deliveryFee === 0 && <span className="free-note">(Free)</span>}
                  </span>
                  <span className={`total-value ${deliveryFee === 0 ? 'free' : ''}`}>
                    {deliveryFee === 0 ? 'FREE' : `£${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
              </>
            )}

            <div className={`total-pay ${basket.length === 0 ? 'empty' : ''}`}>
              <div className="total-pay-label">Total to pay</div>
              <div className="total-pay-amount">£{total.toFixed(2)}</div>
            </div>

            {basket.length > 0 && subtotal < 50 && (
              <p className="promo-tip spend-more">
                💡 Spend £{(50 - subtotal).toFixed(2)} more to get 10% off!
              </p>
            )}

            {basket.length > 0 && subtotal < 30 && (
              <p className="promo-tip delivery-tip">
                🚚 Spend £{(30 - subtotal).toFixed(2)} more for free delivery!
              </p>
            )}

            {basket.length === 0 && (
              <p className="empty-message">Add items to see delivery options</p>
            )}

            {basket.length > 0 && (
              <p className="free-item-message">Choose your free item.</p>
            )}

            <input
              type="text"
              placeholder="Apply Coupon Code here"
              className="coupon-input"
            />

            <div className="delivery-options">
              <button className="delivery-option active">
                <MapPin size={20} />
                <span className="option-type">Delivery</span>
                <span className="option-time">Starts at 17:40</span>
              </button>
              <button className="delivery-option">
                <ShoppingCart size={20} />
                <span className="option-type">Collection</span>
                <span className="option-time">Starts at 16:50</span>
              </button>
            </div>

            <button 
              disabled={basket.length === 0}
              onClick={() => setShowCheckout(true)}
              className="checkout-button"
            >
              Checkout!
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          <div className="mobile-nav">
            <button className="mobile-nav-button" onClick={() => setShowMobileMenu(true)}>
              <Menu size={24} />
              <span>Menu</span>
            </button>
            <button className="mobile-nav-button" onClick={() => setShowMobileBasket(true)}>
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={24} />
                {basket.length > 0 && (
                  <span className="mobile-nav-badge">{basket.length}</span>
                )}
              </div>
              <span>Basket</span>
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          {showMobileMenu && (
            <>
              <div className="mobile-drawer-overlay" onClick={() => setShowMobileMenu(false)} />
              <div className="mobile-drawer">
                <div className="mobile-drawer-header">
                  <h2 className="mobile-drawer-title">Menu</h2>
                  <button onClick={() => setShowMobileMenu(false)} className="mobile-drawer-close">
                    <X size={24} />
                  </button>
                </div>
                <div className="mobile-drawer-content">
                  <ul className="category-list">
                    {categories.map((cat) => (
                      <li
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setShowMobileMenu(false);
                        }}
                        className={`category-item ${activeCategory === cat ? 'active' : ''}`}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                  <div className="promo-card">
                    <div className="promo-badge">-20%</div>
                    <p className="promo-label">Special Offer</p>
                    <p className="promo-title">First Order Discount</p>
                    <button className="promo-button">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Mobile Basket Drawer */}
          {showMobileBasket && (
            <>
              <div className="mobile-drawer-overlay" onClick={() => setShowMobileBasket(false)} />
              <div className="mobile-basket-drawer">
                <div className="mobile-basket-header">
                  <h2 className="basket-title">
                    <ShoppingCart size={24} />
                    My Basket
                  </h2>
                  <button onClick={() => setShowMobileBasket(false)} className="mobile-drawer-close">
                    <X size={24} />
                  </button>
                </div>
                <div className="mobile-basket-content">
                  {basket.length === 0 ? (
                    <div className="empty-basket">
                      <ShoppingCart size={48} />
                      <p className="empty-title">Your basket is empty</p>
                      <p className="empty-subtitle">Add items to get started!</p>
                    </div>
                  ) : (
                    <>
                      {basket.map((item) => (
                        <div key={item.id} className="basket-item">
                          <div className="item-qty-badge">{item.qty}x</div>
                          <div className="item-details">
                            <div className="item-header">
                              <p className="item-name">{item.name}</p>
                              <p className="item-price">£{(item.price * item.qty).toFixed(2)}</p>
                            </div>
                            {item.extra && <p className="item-extra">{item.extra}</p>}
                          </div>
                        </div>
                      ))}
                      
                      <div className="basket-footer">
                        <div className="total-row">
                          <span className="total-label">Sub Total:</span>
                          <span className="total-value">£{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-row">
                          <span className="total-label">
                            Discounts: {discount > 0 && <span className="discount-note">(10% off)</span>}
                          </span>
                          <span className={`total-value ${discount > 0 ? 'discount' : ''}`}>
                            {discount > 0 ? `-£${discount.toFixed(2)}` : '£0.00'}
                          </span>
                        </div>
                        <div className="total-row delivery-row">
                          <span className="total-label">
                            Delivery Fee: {deliveryFee === 0 && <span className="free-note">(Free)</span>}
                          </span>
                          <span className={`total-value ${deliveryFee === 0 ? 'free' : ''}`}>
                            {deliveryFee === 0 ? 'FREE' : `£${deliveryFee.toFixed(2)}`}
                          </span>
                        </div>

                        <div className="total-pay">
                          <div className="total-pay-label">Total to pay</div>
                          <div className="total-pay-amount">£{total.toFixed(2)}</div>
                        </div>

                        {subtotal < 50 && (
                          <p className="promo-tip spend-more">
                            💡 Spend £{(50 - subtotal).toFixed(2)} more to get 10% off!
                          </p>
                        )}

                        {subtotal < 30 && (
                          <p className="promo-tip delivery-tip">
                            🚚 Spend £{(30 - subtotal).toFixed(2)} more for free delivery!
                          </p>
                        )}

                        <button onClick={handleCheckout} className="checkout-button">
                          Checkout!
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* Checkout Modal */}
      {showCheckout && !orderSent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <ShoppingCart size={24} />
                <h2>My Basket</h2>
              </div>
              <button onClick={() => setShowCheckout(false)} className="modal-close">
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              {basket.map((item) => (
                <div key={item.id} className="modal-basket-item">
                  <div className="modal-item-qty">{item.qty}x</div>
                  <div className="modal-item-content">
                    <div className="modal-item-header">
                      <div>
                        <p className="modal-item-name">{item.name}</p>
                        {item.extra && <p className="modal-item-extra">{item.extra}</p>}
                      </div>
                      <div className="modal-item-actions">
                        <p className="modal-item-price">£{(item.price * item.qty).toFixed(2)}</p>
                        <button onClick={() => removeFromBasket(item.id)} className="remove-button">
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="modal-totals">
                <div className="modal-total-row">
                  <span className="modal-total-label">Sub Total:</span>
                  <span className="modal-total-value">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="modal-total-row">
                  <span className="modal-total-label">Discounts:</span>
                  <span className="modal-total-value discount">
                    {discount > 0 ? `-${discount.toFixed(2)}` : '-3.00'}
                  </span>
                </div>
                <div className="modal-total-row">
                  <span className="modal-total-label">Delivery Fee:</span>
                  <span className="modal-total-value">{deliveryFee.toFixed(2)}</span>
                </div>

                <div className="modal-total-pay">
                  <span className='fix'>Total to pay</span>
                  <span>£{total.toFixed(2)}</span>
                </div>

                <p className="modal-free-item">
                  Choose your free item.
                  <span className="info-icon">?</span>
                </p>

                <div className="modal-coupon-container">
                  <input type="text" placeholder="Apply Coupon Code here" className="modal-coupon-input" />
                  <button className="coupon-apply-button">✓</button>
                </div>

                <div className="modal-delivery-options">
                  <button className="modal-delivery-option active">
                    <MapPin size={24} />
                    <span className="modal-option-type">Delivery</span>
                    <span className="modal-option-time">Starts at 17:40</span>
                  </button>
                  <button className="modal-delivery-option">
                    <ShoppingCart size={24} />
                    <span className="modal-option-type">Collection</span>
                    <span className="modal-option-time">Starts at 16:50</span>
                  </button>
                </div>

                <button onClick={handleCheckout} className="modal-checkout-button">
                  Checkout!
                </button>

                <div className="modal-notice">
                  <div className="notice-icon">⚠️</div>
                  We are open now, but delivery starts at <strong>18:30</strong> however you may order and collect in store now
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Sent Modal */}
      {orderSent && (
        <div className="modal-overlay order-sent-overlay">
          <div className="order-sent-modal">
            <div className="order-sent-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            
            <h2 className="order-sent-title">Order Sent!</h2>
            
            <p className="order-sent-message">
              Your order has been successfully placed. We'll start preparing it shortly!
            </p>

            <div className="order-sent-processing">
              <div className="processing-spinner"></div>
              Processing...
            </div>
          </div>
        </div>
      )}
    </>
  );
}