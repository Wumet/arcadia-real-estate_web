import { formatNaira } from "../components/utils/formatNaira";

// src/data/properties.js
const properties = [
  {
    id: "1",
    propertyName: "The Azure Residence",
    location: "Old GRA, PH",
    startingPrice: formatNaira(450000),
    tag: "Hot Listing",
    images: {
      hero: "https://res.cloudinary.com/do36hdyrf/image/upload/point3d-commercial-imaging-ltd-swXXVeluuNM-unsplash_ntycsv.jpg",
      gallery: ["/images/azure/1.jpg","/images/azure/2.jpg","/images/azure/3.jpg"],
      thumbnails: ["/images/azure/thumb1.jpg","/images/azure/thumb2.jpg"]
    },
    description: "This property is located within one of Lagos’ fastest-growing investment corridors, positioned near major infrastructure and industrial developments",
    about: {
      description: "A luxurious residence combining comfort, style, and convenience.",
      highlights: [
        "Spacious 3 bedrooms with en-suite bathrooms",
        "Open-plan living and dining area",
        "Modern kitchen with high-end appliances",
        "Secure parking for 2 cars",
        "24/7 security and CCTV surveillance"
      ]
    },
    specifications: { bedrooms: 3, bathrooms: 2, size: "180 sqm", parking: 2 },
    paymentStructure: {
      outright: { price: formatNaira(4000000), cta: "BUY NOW" },
      monthly: [
        { duration: "3 Months", deposit: formatNaira(500000), totalPrice: 4250000, cta: "SUBSCRIBE" }
      ],
      weekly: [
        { duration: "13 Weeks", weeklyPayment:formatNaira(330000), cta: "SUBSCRIBE" }
      ]
    },
    map: { embedLink: "https://maps.google.com/?q=Old+GRA+PH", address: "Old GRA, Port Harcourt" }
  },
  {
    id: "2",
    propertyName: "The Azure Residence",
    location: "Old GRA, PH",
    startingPrice: formatNaira(450000),
    tag: "Hot Listing",
    images: {
      hero: "https://res.cloudinary.com/do36hdyrf/image/upload/point3d-commercial-imaging-ltd-swXXVeluuNM-unsplash_ntycsv.jpg",
      gallery: ["/images/azure/1.jpg","/images/azure/2.jpg","/images/azure/3.jpg"],
      thumbnails: ["/images/azure/thumb1.jpg","/images/azure/thumb2.jpg"]
    },
    description: "This property is located within one of Lagos’ fastest-growing investment corridors, positioned near major infrastructure and industrial developments.",
    about: {
      description: "A luxurious residence combining comfort, style, and convenience.",
      highlights: [
        "Spacious 3 bedrooms with en-suite bathrooms",
        "Open-plan living and dining area",
        "Modern kitchen with high-end appliances",
        "Secure parking for 2 cars",
        "24/7 security and CCTV surveillance"
      ]
    },
    specifications: { bedrooms: 3, bathrooms: 2, size: "180 sqm", parking: 2 },
    paymentStructure: {
      outright: { price: formatNaira(4000000), cta: "BUY NOW" },
      monthly: [
        { duration: "3 Months", deposit: formatNaira(500000), totalPrice: 4250000, cta: "SUBSCRIBE" }
      ],
      weekly: [
        { duration: "13 Weeks", weeklyPayment:formatNaira(330000), cta: "SUBSCRIBE" }
      ]
    },
    map: { embedLink: "https://maps.google.com/?q=Old+GRA+PH", address: "Old GRA, Port Harcourt" }
  },

  {
    id: "3",
    propertyName: "The Azure Residence",
    location: "Old GRA, PH",
    startingPrice: formatNaira(450000),
    tag: "Hot Listing",
    images: {
      hero: "https://res.cloudinary.com/do36hdyrf/image/upload/land3_gmfwwu.jpg",
      gallery: ["/images/azure/1.jpg","/images/azure/2.jpg","/images/azure/3.jpg"],
      thumbnails: ["/images/azure/thumb1.jpg","/images/azure/thumb2.jpg"]
    },
    description: "Modern 3-bedroom residence in a serene environment with lush gardens and secure parking.",
    about: {
      description: "A luxurious residence combining comfort, style, and convenience.",
      highlights: [
        "Spacious 3 bedrooms with en-suite bathrooms",
        "Open-plan living and dining area",
        "Modern kitchen with high-end appliances",
        "Secure parking for 2 cars",
        "24/7 security and CCTV surveillance"
      ]
    },
    specifications: { bedrooms: 3, bathrooms: 2, size: "180 sqm", parking: 2 },
    paymentStructure: {
      outright: { price: formatNaira(4000000), cta: "BUY NOW" },
      monthly: [
        { duration: "3 Months", deposit: 500000, totalPrice: 4250000, cta: "SUBSCRIBE" }
      ],
      weekly: [
        { duration: "13 Weeks", weeklyPayment: 330000, cta: "SUBSCRIBE" }
      ]
    },
    map: { embedLink: "https://maps.google.com/?q=Old+GRA+PH", address: "Old GRA, Port Harcourt" }
  },
];

export default properties;