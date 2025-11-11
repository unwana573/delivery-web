// import React, { useRef } from 'react';
// import "./review.css";
// /**
//  * Renders the star rating display.
//  * @param {number} rating - The rating value (e.g., 4.5)
//  */
// const Review = () => {
//     // --- Data and State ---
//     const reviewsGridRef = useRef(null);
    
//     const overallRating = 3.4;
//     const totalReviews = 1360;

//     const DUMMY_REVIEWS = [
//       {
//         id: 1,
//         name: 'St Glx',
//         location: 'South London',
//         rating: 5,
//         date: '24th September, 2023',
//         text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
//         avatarUrl: 'https://placehold.co/150x150/007bff/ffffff?text=SG'
//       },
//       {
//         id: 2,
//         name: 'St Glx',
//         location: 'South London',
//         rating: 4,
//         date: '24th September, 2023',
//         text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
//         avatarUrl: 'https://placehold.co/150x150/28a745/ffffff?text=SG'
//       },
//       {
//         id: 3,
//         name: 'St Glx',
//         location: 'South London',
//         rating: 5,
//         date: '24th September, 2023',
//         text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
//         avatarUrl: 'https://placehold.co/150x150/dc3545/ffffff?text=SG'
//       },
//       {
//         id: 4,
//         name: 'Lola M.',
//         location: 'West London',
//         rating: 4.5,
//         date: '25th September, 2023',
//         text: 'Quick service, but the drink order was slightly wrong. The burger was perfectly hot, though! Great for a fast lunch stop.',
//         avatarUrl: 'https://placehold.co/150x150/ffc107/343a40?text=LM'
//       },
//       {
//         id: 5,
//         name: 'Raj K.',
//         location: 'Central London',
//         rating: 3,
//         date: '26th September, 2434',
//         text: 'The atmosphere was busy, and it took a while to get the food, but the staff handled the rush well. Standard quality food.',
//         avatarUrl: 'https://placehold.co/150x150/17a2b8/ffffff?text=RK'
//       },
//     ];

//     // --- Logic ---
//     const handleScroll = (direction) => {
//         if (reviewsGridRef.current) {
//             const scrollContainer = reviewsGridRef.current;
//             const firstCard = scrollContainer.firstChild;
            
//             // Calculate scroll amount: card width (offsetWidth) + gap (24px)
//             const scrollAmount = firstCard 
//                 ? firstCard.offsetWidth + 24 
//                 : 350; 
            
//             if (direction === 'prev') {
//                 scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//             } else {
//                 scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//             }
//         }
//     };
    
//     // --- Nested Components/Render Functions (defined within the App const) ---
    
//     /** Renders the star rating display. */
//     const StarRating = ({ rating }) => {
//       const fullStars = Math.floor(rating);
//       const hasHalfStar = rating % 1 !== 0;
//       const emptyStars = 5 - Math.ceil(rating);
    
//       const starIcon = (fill) => (
//         <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 24 24" 
//             fill={fill} 
//             stroke="currentColor" 
//             strokeWidth="1.5" 
//             className="star-icon"
//         >
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.27 3.25L6.9 14.14 2 9.27l6.91-1.01L12 2z" />
//         </svg>
//       );
    
//       const halfStarIcon = () => (
//         <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 24 24" 
//             fill="none"
//             stroke="currentColor" 
//             strokeWidth="1.5" 
//             className="star-icon"
//         >
//             <defs>
//                 <linearGradient id="half">
//                     <stop offset="50%" stopColor="#fbbf24" />
//                     <stop offset="50%" stopColor="transparent" />
//                 </linearGradient>
//             </defs>
//             <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.27 3.25L6.9 14.14 2 9.27l6.91-1.01L12 2z" />
//         </svg>
//       );
    
//       return (
//         <div className="star-container">
//           {[...Array(fullStars)].map((_, i) => starIcon("currentColor"))}
//           {hasHalfStar && halfStarIcon()}
//           {[...Array(emptyStars)].map((_, i) => starIcon("transparent"))}
//         </div>
//       );
//     };

//     /** Component for a single customer review card. */
//     const ReviewCard = ({ review }) => {
//       return (
//         <div className="review-card">
//           <div className="review-header">
//             <div className="user-info">
//               <div className="avatar-placeholder">
//                  <img 
//                     src={review.avatarUrl} 
//                     alt={`${review.name}'s avatar`}
//                     className="w-full h-full object-cover"
//                     onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/150x150/000000/ffffff?text=${review.name.substring(0, 1)}` }}
//                 />
//               </div>
//               <div>
//                 <p className="user-name">{review.name}</p>
//                 <p className="user-location">{review.location}</p>
//               </div>
//             </div>
//             <div className="rating-details">
//               <StarRating rating={review.rating} />
//               <p className="review-date">{review.date}</p>
//             </div>
//           </div>
//           <p className="review-text">
//             {review.text}
//           </p>
//         </div>
//       );
//     };

//     /** Navigation Arrow Button */
//     const NavArrow = ({ direction, onClick }) => (
//         <button 
//             onClick={onClick}
//             className="nav-arrow-button"
//             aria-label={direction === 'left' ? "Previous Review" : "Next Review"}
//         >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="nav-arrow-icon">
//                 {direction === 'left' ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                 ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                 )}
//             </svg>
//         </button>
//     );

//     // --- Single Return Statement ---
//     return (
//         <div className="app-container">
//             <style>{styles}</style> {/* Injecting Vanilla CSS */}
            
//             <div className="main-content">
                
//                 {/* Reviews Header and Navigation */}
//                 <div className="header-section">
//                     <h2 className="header-title">
//                         Customer Reviews
//                     </h2>
//                     <div className="nav-buttons">
//                         <NavArrow direction="left" onClick={() => handleScroll('prev')} />
//                         <NavArrow direction="right" onClick={() => handleScroll('next')} />
//                     </div>
//                 </div>

//                 {/* Reviews Grid/Slider - Ref attached for scrolling */}
//                 <div className="reviews-grid" ref={reviewsGridRef}>
//                     {DUMMY_REVIEWS.map(review => (
//                         <ReviewCard key={review.id} review={review} />
//                     ))}
//                 </div>

//                 {/* Overall Rating Summary at the Bottom */}
//                 <div className="overall-summary">
//                     <div className="summary-content">
//                         <p className="overall-rating-value">
//                             {overallRating.toFixed(1)}
//                         </p>
//                         <div className="rating-stars-row">
//                             <StarRating rating={overallRating} />
//                         </div>
//                         <p className="total-reviews">
//                             {totalReviews.toLocaleString()} reviews
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Review;




import React, { useRef } from 'react';
import man from "../../assets/man.jpg"
import man_1 from "../../assets/man_1.jpg"
import woman from "../../assets/woman.jpg"
import woman_1 from "../../assets/woman_1.jpg"
// --- Global CSS Styles (Remains outside as a style string) ---
const styles = `
.app-container {
    min-height: 70vh;
    padding: 20px 10px;
    margin: 90px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Inter', sans-serif;
    background-color: #f3f4f6;
}

.main-content {
    width: 100%;
    max-width: 1280px;
}

/* --- Header and Navigation --- */
.header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 16px;
}

.header-title {
    font-size: 2rem;
    font-weight: 800;
    color: #1f2937;
}

.nav-buttons {
    display: flex;
    gap: 16px;
}

.nav-arrow-button {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    background-color: #f97316;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.nav-arrow-button:hover {
    background-color: #ea580c;
}

.nav-arrow-button:active {
    transform: scale(0.95);
}

.nav-arrow-icon {
    width: 24px;
    height: 24px;
}

/* --- Reviews Grid (Modified for Sliding) --- */
.reviews-grid {
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    justify-content: flex-start;
    overflow-x: scroll;
    scroll-behavior: smooth;
    
    /* Hide scrollbar for a cleaner look */
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.reviews-grid::-webkit-scrollbar {
    display: none;
}


.review-card {
    background-color: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    width: 100%;
}

/* Responsiveness (Breakpoints) */
@media (min-width: 640px) {
    .app-container {
        padding: 32px;
    }
    .review-card {
        width: calc(50% - 12px); 
    }
}

@media (min-width: 1024px) {
    .header-section {
        padding: 0;
    }
    .reviews-grid {
        /* This container is responsible for horizontal scrolling */
    }
    .review-card {
        width: calc(33.333% - 16px); 
    }
}

/* --- Review Card Details --- */
.review-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.avatar-placeholder {
    height: 40px;
    width: 40px;
    border-radius: 9999px;
    background-color: #e5e7eb;
    overflow: hidden;
}

.user-name {
    font-weight: 600;
    color: #1f2937;
}

.user-location {
    font-size: 0.875rem;
    color: #6b7280;
}

.rating-details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
}

.review-date {
    font-size: 0.75rem;
    color: #6b7280;
}

.review-text {
    color: #4b5563;
    line-height: 1.625;
    font-size: 0.875rem;
}

/* --- Star Rating and Overall Summary --- */
.star-container {
    display: flex;
    gap: 2px;
}

.star-icon {
    width: 16px;
    height: 16px;
    color: #fbbf24;
}

.overall-summary {
    margin-top: 64px;
    display: flex;
    justify-content: center;
}

.summary-content {
    text-align: center;
}

.overall-rating-value {
    font-size: 4.5rem;
    font-weight: 700;
    color: #1f2937;
}

.rating-stars-row {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 4px;
}

.total-reviews {
    font-size: 0.875rem;
    color: #6b7280;
}
`;

// --- Main Application Component (Everything in one const) ---
const Review = () => {
    // --- Data and State ---
    const reviewsGridRef = useRef(null);
    
    const overallRating = 3.4;
    const totalReviews = 1360;

    const DUMMY_REVIEWS = [
      {
        id: 1,
        name: 'Alex J.',
        location: 'South London',
        rating: 5,
        date: '24th September, 2023',
        text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
        // Using a public image URL for an avatar
        avatarUrl: man
      },
      {
        id: 2,
        name: 'Sarah K.',
        location: 'North London',
        rating: 4,
        date: '24th September, 2023',
        text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
        // Using a public image URL for an avatar
        avatarUrl: man_1
      },
      {
        id: 3,
        name: 'Michael B.',
        location: 'West London',
        rating: 5,
        date: '24th September, 2023',
        text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
        // Using a public image URL for an avatar
        avatarUrl: woman
      },
      {
        id: 4,
        name: 'Lola M.',
        location: 'East London',
        rating: 4.5,
        date: '25th September, 2023',
        text: 'Quick service, but the drink order was slightly wrong. The burger was perfectly hot, though! Great for a fast lunch stop.',
        // Using a public image URL for an avatar
        avatarUrl: woman_1
      },
      {
        id: 5,
        name: 'Raj K.',
        location: 'Central London',
        rating: 3,
        date: '26th September, 2434',
        text: 'The atmosphere was busy, and it took a while to get the food, but the staff handled the rush well. Standard quality food.',
        // Using a public image URL for an avatar
        avatarUrl: man
      },
    ];

    // --- Logic ---
    const handleScroll = (direction) => {
        if (reviewsGridRef.current) {
            const scrollContainer = reviewsGridRef.current;
            const firstCard = scrollContainer.firstChild;
            
            // Calculate scroll amount: card width (offsetWidth) + gap (24px)
            const scrollAmount = firstCard 
                ? firstCard.offsetWidth + 24 
                : 350; 
            
            if (direction === 'prev') {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };
    
    // --- Nested Components/Render Functions (defined within the App const) ---
    
    /** Renders the star rating display. */
    const StarRating = ({ rating }) => {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
      const emptyStars = 5 - Math.ceil(rating);
    
      const starIcon = (fill) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={fill} 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="star-icon"
        >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.27 3.25L6.9 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    
      const halfStarIcon = () => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="star-icon"
        >
            <defs>
                <linearGradient id="half">
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="transparent" />
                </linearGradient>
            </defs>
            <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.27 3.25L6.9 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    
      return (
        <div className="star-container">
          {[...Array(fullStars)].map((_, i) => starIcon("currentColor"))}
          {hasHalfStar && halfStarIcon()}
          {[...Array(emptyStars)].map((_, i) => starIcon("transparent"))}
        </div>
      );
    };

    /** Component for a single customer review card. */
    const ReviewCard = ({ review }) => {
      return (
        <div className="review-card">
          <div className="review-header">
            <div className="user-info">
              <div className="avatar-placeholder">
                 <img 
                    src={review.avatarUrl} 
                    alt={`${review.name}'s avatar`}
                    className="w-full h-full object-cover"
                    // If the image fails to load, fall back to a text placeholder
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/150x150/000000/ffffff?text=${review.name.substring(0, 1)}` }}
                />
              </div>
              <div>
                <p className="user-name">{review.name}</p>
                <p className="user-location">{review.location}</p>
              </div>
            </div>
            <div className="rating-details">
              <StarRating rating={review.rating} />
              <p className="review-date">{review.date}</p>
            </div>
          </div>
          <p className="review-text">
            {review.text}
          </p>
        </div>
      );
    };

    /** Navigation Arrow Button */
    const NavArrow = ({ direction, onClick }) => (
        <button 
            onClick={onClick}
            className="nav-arrow-button"
            aria-label={direction === 'left' ? "Previous Review" : "Next Review"}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="nav-arrow-icon">
                {direction === 'left' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                )}
            </svg>
        </button>
    );

    // --- Single Return Statement ---
    return (
        <div className="app-container">
            <style>{styles}</style> {/* Injecting Vanilla CSS */}
            
            <div className="main-content">
                
                {/* Reviews Header and Navigation */}
                <div className="header-section">
                    <h2 className="header-title">
                        Customer Reviews
                    </h2>
                    <div className="nav-buttons">
                        <NavArrow direction="left" onClick={() => handleScroll('prev')} />
                        <NavArrow direction="right" onClick={() => handleScroll('next')} />
                    </div>
                </div>

                {/* Reviews Grid/Slider - Ref attached for scrolling */}
                <div className="reviews-grid" ref={reviewsGridRef}>
                    {DUMMY_REVIEWS.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Overall Rating Summary at the Bottom */}
                <div className="overall-summary">
                    <div className="summary-content">
                        <p className="overall-rating-value">
                            {overallRating.toFixed(1)}
                        </p>
                        <div className="rating-stars-row">
                            <StarRating rating={overallRating} />
                        </div>
                        <p className="total-reviews">
                            {totalReviews.toLocaleString()} reviews
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;
