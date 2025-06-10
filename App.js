import react, { createElement } from "react";
import { createRoot } from "react-dom/client";
("C:UsersMunavar_ahmedDesktoplearn Reactimg\rating-image.ico");
/**
 * Header
 *  -Logo
 *  -Nav Items
 *      -Home
 *      -about
 *      -ContactUs
 *      -Cart
 * body
 *  -Search Bar
 *  -Card-container
 *    -cards
 *        -name
 *        -dish,cosine, rating
 * footer
 *  -copyright
 *  -links
 */
const restaurant = [
  {
    info: {
      id: "71488",
      name: "The Vellore Kitchen",
      cloudinaryImageId: "luzcvnuyjmiglgykdtk6",
      locality: "Green Circle",
      areaName: "Near Green Circle",
      costForTwo: "₹450 for two",
      cuisines: ["Biryani", "South Indian", "Chinese", "Pastas", "Ice Cream"],
      avgRating: 4.5,
      parentId: "16937",
      avgRatingString: "4.5",
      totalRatingsString: "34K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹649",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/the-vellore-kitchen-green-circle-near-green-circle-rest71488",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "71762",
      name: "Darling Aradhana",
      cloudinaryImageId: "o03a8ksdeo5xaqpbwqjw",
      locality: "Darling Residency",
      areaName: "Kosapet",
      costForTwo: "₹350 for two",
      cuisines: ["South Indian", "Chinese", "Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "17689",
      avgRatingString: "4.6",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/darling-aradhana-darling-residency-kosapet-rest71762",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "774023",
      name: "Hotel Alankar",
      cloudinaryImageId: "f1bc9ddf53de574cdc35ab2f717df234",
      locality: "Katpadi Road",
      areaName: "OPP Chelliamman Kovil",
      costForTwo: "₹250 for two",
      cuisines: [
        "South Indian",
        "Biryani",
        "Chinese",
        "Juices",
        "Sweets",
        "Beverages",
      ],
      avgRating: 4.7,
      parentId: "17682",
      avgRatingString: "4.7",
      totalRatingsString: "5.1K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/hotel-alankar-katpadi-road-opp-chelliamman-kovil-rest774023",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "294058",
      name: "Darling Namma Veedu",
      cloudinaryImageId: "kdmr08lrvpa9ysgus2cn",
      locality: "Green Circle",
      areaName: "Green Circle",
      costForTwo: "₹550 for two",
      cuisines: [
        "Biryani",
        "South Indian",
        "Chinese",
        "North Indian",
        "Desserts",
        "Ice Cream",
      ],
      avgRating: 4.5,
      parentId: "7090",
      avgRatingString: "4.5",
      totalRatingsString: "5.7K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/darling-namma-veedu-green-circle-rest294058",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "71485",
      name: "The Vellore Kitchen Take Away",
      cloudinaryImageId: "mxocfkxucltxeulpenze",
      locality: "Rathina Singh Kulam Street",
      areaName: "Near Eye Hospital",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "South Indian", "Chinese", "Desserts"],
      avgRating: 4.4,
      parentId: "215156",
      avgRatingString: "4.4",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "35% OFF",
        subHeader: "UPTO ₹175",
        discountTag: "SAVE BIG",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/the-vellore-kitchen-take-away-rathina-singh-kulam-street-near-eye-hospital-rest71485",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "72934",
      name: "Alakar Restaurant Veg",
      cloudinaryImageId: "ti29qttelzyr9x3ihxyr",
      locality: "Chittoor Main Road",
      areaName: "Katpadi",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "South Indian", "Chinese", "Juices", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "17668",
      avgRatingString: "4.3",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/alakar-restaurant-veg-chittoor-main-road-katpadi-rest72934",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "72051",
      name: "Hotel Aryaas",
      cloudinaryImageId: "fakoo1vz7e8uanxtmgbu",
      locality: "Green Circle",
      areaName: "Green Circle",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Biryani", "Chinese", "Ice Cream", "Desserts"],
      avgRating: 4.4,
      veg: true,
      parentId: "16963",
      avgRatingString: "4.4",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 12,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/hotel-aryaas-green-circle-rest72051",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "73816",
      name: "Hotel Saravana Bhavan",
      cloudinaryImageId: "lnerz8pitzfeg28nblx1",
      locality: "Katpadi Road",
      areaName: "Thottapalayam",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "101987",
      avgRatingString: "4.4",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/hotel-saravana-bhavan-katpadi-road-thottapalayam-rest73816",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "73430",
      name: "Hotel Susil Classic",
      cloudinaryImageId: "ieazilzvix33ikarpzxb",
      locality: "Arcot Road",
      areaName: "Near CMC Hospital",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Biryani", "Chinese"],
      avgRating: 4.6,
      veg: true,
      parentId: "17660",
      avgRatingString: "4.6",
      totalRatingsString: "4.3K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 21:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/hotel-susil-classic-arcot-road-near-cmc-hospital-rest73430",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "484118",
      name: "Hotel Sri Ganapathy Bhavan",
      cloudinaryImageId: "tg3tonf6akjzcrpspaly",
      locality: "Arcot Road",
      areaName: "Near Collectrate",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Ice Cream", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "470945",
      avgRatingString: "4.5",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/hotel-sri-ganapathy-bhavan-arcot-road-near-collectrate-rest484118",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "73432",
      name: "Khanna Veg Restaurant",
      cloudinaryImageId: "ys5t2zoyisj9ycnltd42",
      locality: "Anna Salai",
      areaName: "Kanna Feasta, Anna Salai",
      costForTwo: "₹350 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Biryani",
        "Beverages",
        "Desserts",
        "Juices",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "17658",
      avgRatingString: "4.5",
      totalRatingsString: "4.9K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹1399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/khanna-veg-restaurant-anna-salai-kanna-feasta-anna-salai-rest73432",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "107773",
      name: "Hotel Sri Lakshmi Bhavan",
      cloudinaryImageId: "yvvnijfllievtcrjoz4q",
      locality: "New Thiruvalam Road",
      areaName: "Chittoor Bus Stand",
      costForTwo: "₹200 for two",
      cuisines: [
        "South Indian",
        "Chinese",
        "North Eastern",
        "Fast Food",
        "Indian",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "14008",
      avgRatingString: "4.4",
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/hotel-sri-lakshmi-bhavan-new-thiruvalam-road-chittoor-bus-stand-rest107773",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "84080",
      name: "FORTUNE PARK VELLORE",
      cloudinaryImageId: "dh0dfo4xbjndu5ikr0kn",
      locality: "No-31/32 A,-7th EAST MAIN ROAD",
      areaName: "GANDHI NAGAR",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Indian", "Continental", "Healthy Food"],
      avgRating: 4.3,
      parentId: "595664",
      avgRatingString: "4.3",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/fortune-park-vellore-no-31-32-a-7th-east-main-road-gandhi-nagar-rest84080",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "73431",
      name: "Sri Arya Bhavan",
      cloudinaryImageId: "d6pq5qfw2c8t5alxtlct",
      locality: "Anni Salai",
      areaName: "Kosapet",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
      avgRating: 4.5,
      parentId: "17659",
      avgRatingString: "4.5",
      totalRatingsString: "3.2K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/sri-arya-bhavan-anni-salai-kosapet-rest73431",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "362465",
      name: "Hotel Benzz Park",
      cloudinaryImageId: "ce9h5yfhlzpvuaclhp03",
      locality: "Katpadi Road",
      areaName: "Thottapalayam",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "South Indian",
        "Tandoor",
        "Continental",
      ],
      avgRating: 3.9,
      parentId: "98325",
      avgRatingString: "3.9",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 10:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/hotel-benzz-park-katpadi-road-thottapalayam-rest362465",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "72320",
      name: "Baby Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/25/18403b44-9761-4649-a8c5-b4c870de9d81_72320 (1).jpg",
      locality: "Anna Salai",
      areaName: "Baby Residency",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Biryani", "Chinese"],
      avgRating: 4.5,
      parentId: "17678",
      avgRatingString: "4.5",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-cee1f7ec-5566-425c-957d-aad6ccfbbbe2",
    },
    cta: {
      link: "https://www.swiggy.com/city/vellore/baby-restaurant-anna-salai-baby-residency-rest72320",
      type: "WEBLINK",
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">Odoms.</div>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>ContactUs</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    resData.info;

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo"
      ></img>
      <h4 className="title">{name} </h4>
      <p className="cousines">{cuisines.join(",")}</p>
      <div className="rating-time">
        <span>Rating:{avgRating} </span>
        <span>{sla.slaString}</span>
      </div>
      <div className="price">{costForTwo}</div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {restaurant.map((res) => {
          return <RestaurantCard resData={res} />;
        })}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
