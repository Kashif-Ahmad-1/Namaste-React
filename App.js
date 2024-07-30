import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// destrcuturing of the js
/**
 * const RestaurantCard = (resName, cusine)=>{
 * or
 * 
 * const {resName, cusine} = props
 * 
 */
const RestaurantCard = (props)=>{
  const {resData} = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return(
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

// const resObj = {

//   "info": {
//     id: "336078",
//     name: "Punjabi Angithi (Vegorama Group)",
//     cloudinaryImageId: "quydfmrjyubex07srlxo",
//     locality: "Nathupur",
//     areaName: "Dlf Phase 3",
//     costForTwo: "₹400 for two",
//     cuisines: [
//       "North Indian",
//       "Chinese",
//       "Tandoor"
//     ],
//     avgRating: 4.3,
//     veg: true,
//     parentId: "465050",
//     avgRatingString: "4.3",
//     totalRatingsString: "10K+",
//     sla: {
//       deliveryTime: 33,
//       lastMileTravel: 5.9,
//       serviceability: "SERVICEABLE",
//       slaString: "30-35 mins",
//       lastMileTravelString: "5.9 km",
//       iconType: "ICON_TYPE_EMPTY"
//     },
//     availability: {
//       nextCloseTime: "2024-07-31 00:00:00",
//       opened: true
//     },
//     badges: {
//       imageBadges: [
//         {
//           imageId: "v1695133679/badges/Pure_Veg111.png",
//           description: "pureveg"
//         }
//       ]
//     },
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {
//           badgeObject: [
//             {
//               attributes: {
//                 description: "pureveg",
//                 imageId: "v1695133679/badges/Pure_Veg111.png"
//               }
//             }
//           ]
//         },
//         textBased: {},
//         textExtendedBadges: {}
//       }
//     },
//     aggregatedDiscountInfoV3: {
//       header: "₹125 OFF",
//       subHeader: "ABOVE ₹249",
//       discountTag: "FLAT DEAL"
//     },
//     loyaltyDiscoverPresentationInfo: {
//       logoCtx: {
//         logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//       },
//       freedelMessage: "FREE DELIVERY",
//       badgeType: "BADGE_TYPE_ONE_LITE"
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {}
//       }
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--"
//       }
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   }
// };

const resList = [{
  "info": {
    "id": "5930",
    "name": "Burger King",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5930.JPG",
    "locality": "City Centre Mall",
    "areaName": "Sector 28",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Burgers",
      "American"
    ],
    "avgRating": 4.3,
    "parentId": "166",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 6.4,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "6.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 03:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-city-centre-mall-sector-28-gurgaon-5930",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "620931",
    "name": "The 99 cafe",
    "cloudinaryImageId": "jhjmrau3cfeb1vlg3x1a",
    "locality": "Cartarpuri Alias Daulatpur Nas",
    "areaName": "Sector 23",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "North Indian",
      "Street Food",
      "Chinese",
      "Tandoor",
      "Thalis",
      "Snacks",
      "Mughlai",
      "Biryani",
      "Beverages"
    ],
    "avgRating": 3.8,
    "veg": true,
    "parentId": "204582",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 4.3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "4.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 03:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/the-99-cafe-cartarpuri-alias-daulatpur-nas-sector-23-gurgaon-620931",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "304086",
    "name": "Rominus Pizza And Burger",
    "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
    "locality": "Dlf Phase - 3",
    "areaName": "DLF Phase - 3",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Italian-American",
      "Pizzas",
      "Continental",
      "Pastas",
      "Snacks",
      "Desserts",
      "American"
    ],
    "avgRating": 4.3,
    "parentId": "8387",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 37,
      "lastMileTravel": 5,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "5.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹115"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "100+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-dlf-phase-3-gurgaon-304086",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "19863",
    "name": "Subway",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/fb30ceca-7684-4007-8300-b6c128c06d13_19863.JPG",
    "locality": "Udyog Vihar Phase 1",
    "areaName": "Udyog Vihar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "American"
    ],
    "avgRating": 4.2,
    "parentId": "2",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 1.3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "1.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 05:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-phase-1-udyog-vihar-gurgaon-19863",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "643963",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    "locality": "Sector 21",
    "areaName": "Suncity Trade Tower",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "2456",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 1,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "1.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 00:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Pizza.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Pizza.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-sector-21-suncity-trade-tower-gurgaon-643963",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "696763",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
    "locality": "SECTOR-22",
    "areaName": "Huda Market",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "4961",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 2,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹199"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-sector-22-huda-market-gurgaon-696763",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "19412",
    "name": "Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b10c39d2-24ec-4768-81bb-5e7691a0a272_19412.jpg",
    "locality": "Major Sushil Aima Marg",
    "areaName": "Sector 23",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas"
    ],
    "avgRating": 4.3,
    "parentId": "721",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 3.5,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 05:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-major-sushil-aima-marg-sector-23-gurgaon-19412",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "562806",
    "name": "Taste Of Tadka",
    "cloudinaryImageId": "ngugbohy9caanhgogn66",
    "locality": "Dundahera",
    "areaName": "Sector 21",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Biryani"
    ],
    "avgRating": 2.9,
    "parentId": "11119",
    "avgRatingString": "2.9",
    "totalRatingsString": "10+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 0.4,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "0.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-a8858034-3b2a-4348-ac5f-7c9ca6c62216"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/taste-of-tadka-dundahera-sector-21-gurgaon-562806",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}]
const Body = () =>{
  return(
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resObj[0]}/>
        <RestaurantCard resData={resObj[1]}/>
        <RestaurantCard resData={resObj[2]}/> */}


        {
          resList.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
       



        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
         */}
      </div>
    </div>
  )
}

const AppLayout = ()=>{
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
