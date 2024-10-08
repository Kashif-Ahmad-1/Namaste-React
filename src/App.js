import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";




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






const AppLayout = ()=>{
  return(
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const approunter = createBrowserRouter(
  [
    {
      path:'/',
      element: <AppLayout />,
      children : [
        {
          path:'/',
          element: <Body />,
          
        },
        {
          path:'/about',
          element: <About />,
        },
      ],
      errorElement: <Error />,
    },
   
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {approunter}/>);
