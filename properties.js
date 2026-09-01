const categories = [
  { name: "Luxury Apartments", count: 48 },
  { name: "Villas", count: 32 },
  { name: "Commercial", count: 26 },
  { name: "Waterfront", count: 22 },
  { name: "Sky Residences", count: 18 },
  { name: "Plots", count: 15 },
  { name: "Retail Spaces", count: 12 },
  { name: "Farmhouses", count: 10 },
  { name: "Smart Homes", count: 14 },
  { name: "Penthouses", count: 8 },
  { name: "Affordable Luxury", count: 20 },
  { name: "Upcoming Projects", count: 6 }
];

const locations = ["Dubai", "Islamabad", "Hyderabad", "Noida", "Abu Dhabi", "Karachi", "Lahore Pakistan", "Ahmedabad", "Peshawar", "Faisalabad"];

const statuses = ["Ready to Move", "Under Construction", "New Launch", "Sold Out"];

const bedroomsMap = {
  "Luxury Apartments": ["2 BHK", "3 BHK"],
  "Villas": ["3 BHK", "4+ BHK"],
  "Commercial": ["Studio", "Office Space"],
  "Waterfront": ["2 BHK", "3 BHK"],
  "Sky Residences": ["3 BHK", "4+ BHK"],
  "Plots": ["Plot"],
  "Retail Spaces": ["Retail"],
  "Farmhouses": ["2 BHK", "3 BHK", "4+ BHK"],
  "Smart Homes": ["1 BHK", "2 BHK"],
  "Penthouses": ["3 BHK", "4+ BHK"],
  "Affordable Luxury": ["1 BHK", "2 BHK"],
  "Upcoming Projects": ["1 BHK", "2 BHK", "3 BHK"]
};

const priceRanges = {
  "Luxury Apartments": { min: 700000, max: 5000000 },
  "Villas": { min: 2000000, max: 8000000 },
  "Commercial": { min: 500000, max: 2000000 },
  "Waterfront": { min: 1200000, max: 5500000 },
  "Sky Residences": { min: 2500000, max: 7000000 },
  "Plots": { min: 150000, max: 600000 },
  "Retail Spaces": { min: 250000, max: 1000000 },
  "Farmhouses": { min: 800000, max: 3500000 },
  "Smart Homes": { min: 300000, max: 1000000 },
  "Penthouses": { min: 4500000, max: 12000000 },
  "Affordable Luxury": { min: 120000, max: 400000 },
  "Upcoming Projects": { min: 400000, max: 1500000 }
};

const pexelsImages = [
  "11631278","37301680","18153132","31656143","11643330","14998334","9308434",
  "15951714","31330470","38172681","37224965","31640021","14846410",
  "38934658","27451770","20538974","19190343","18587809",
  "24807128","24807124","2034335","37070077",
  "257856","37993585","36349753","16764815",
  "32016062","26590643","12453932","36224349",
  "30331589","35397759","32122877","38322838",
  "11918523","19969245","38513265","31656149","16401677"
];

const titlePrefixes = [
  "Aurora", "The", "Marina", "Celeste", "Emerald", "Horizon", "One", "Azure",
  "Capital", "Lakefront", "Solaris", "Crest", "Verdant", "Meridian", "Amber",
  "Nova", "Solitaire", "Riverdale", "Serenity", "Urban", "Palm", "TechPark",
  "Skyline", "Meadow", "Market", "Countryside", "Eco", "Grandview", "Harmony",
  "NextGen", "Coastal", "Metro", "Royal", "Innovation", "Cloud", "Green",
  "Boutique", "Heritage", "Intelli", "Value", "Future", "Baywatch", "Platinum",
  "Serenity", "Corporate", "Zenith", "Hillside", "Artisan", "Rustic", "Connected",
  "Crown", "Economy", "Upcoming", "Tidal", "Grand", "Oasis", "Enterprise",
  "Apex", "Summit", "Gallery", "Farmhouse", "Smart", "Pinnacle", "Prime",
  "Fashion", "Countryside", "Tech", "Royal", "Elite", "Upcoming", "Wavefront",
  "Urban", "Tropical", "Tech", "Zen", "Crest", "Lifestyle", "Village",
  "Home", "The", "Smart", "Elite", "Urban", "Prime", "Farmhouse", "Smart",
  "Legacy", "Elite", "Upcoming", "Coral", "Luxe", "Ivory", "Corporate",
  "Nimbus", "Ridge", "Showcase", "Country", "Smart", "Skyline", "Smart",
  "Metro", "Prestige", "Sapphire", "Gateway", "Stratos", "Grove", "Arcade",
  "Ranch", "Smart", "Prestige", "Metro", "Upcoming", "Horizon", "Royal",
  "Jade", "Tech", "Zenith", "Meadow", "Plaza", "Estate", "Smart", "Skyline",
  "City", "Upcoming", "Azure", "Aurora", "Palm", "Business", "Nimbus", "Oak",
  "Market", "Vineyard", "Smart", "Crown", "Urban", "Upcoming", "Lagoon",
  "Grand", "Crystal", "Metro", "Stratos", "Sunset", "Gallery", "Cottage",
  "Smart", "Skyline", "Metro", "Upcoming", "Ocean", "Imperial", "Amber",
  "Trade", "Aurora", "Valley", "Lifestyle", "Rustic", "Smart", "Grand",
  "Smart", "Upcoming", "Tide", "Urban"
];

const titleSuffixes = {
  "Luxury Apartments": ["Residences", "Towers", "Heights", "Suites", "Living", "Apartments", "Studios"],
  "Villas": ["Villas", "Estates", "Manor", "Court", "Gardens"],
  "Commercial": ["Hub", "Center", "Plaza", "Tower", "Park", "District"],
  "Waterfront": ["Bay", "Waters", "Shores", "Harbor", "Marina", "Cove"],
  "Sky Residences": ["Sky Homes", "Sky Tower", "Sky Living", "Sky Residences", "Cloud Living"],
  "Plots": ["Plots", "Lands", "Acres", "Fields", "Gardens"],
  "Retail Spaces": ["Market", "Retail", "Mall", "Bazaar", "Arcade"],
  "Farmhouses": ["Farmhouse", "Retreat", "Ranch", "Estate", "Cottage"],
  "Smart Homes": ["Smart Homes", "Smart Living", "SmartNest", "Connected", "IntelliHome"],
  "Penthouses": ["Penthouses", "Penthouse Collection", "Top Floor", "Sky Suites"],
  "Affordable Luxury": ["Homes", "Living", "Value", "Essentials", "Select"],
  "Upcoming Projects": ["Residences", "Coming Soon", "Next", "Prime", "Elevate"]
};

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateProperties() {
  const properties = [];
  let id = 1;
  let seed = 42;
  let imgIndex = 0;

  for (const cat of categories) {
    for (let i = 0; i < cat.count; i++) {
      seed++;
      const r1 = seededRandom(seed);
      const r2 = seededRandom(seed + 100);
      const r3 = seededRandom(seed + 200);
      const r4 = seededRandom(seed + 300);
      const r5 = seededRandom(seed + 400);
      const r6 = seededRandom(seed + 500);

      const prefix = titlePrefixes[Math.floor(r1 * titlePrefixes.length)];
      const suffixes = titleSuffixes[cat.name];
      const suffix = suffixes[Math.floor(r2 * suffixes.length)];
      const title = prefix + " " + suffix;

      const location = locations[Math.floor(r3 * locations.length)];
      const bedroomOptions = bedroomsMap[cat.name];
      const bedrooms = bedroomOptions[Math.floor(r4 * bedroomOptions.length)];
      const status = statuses[Math.floor(r5 * statuses.length)];

      const priceRange = priceRanges[cat.name];
      const price = Math.round((priceRange.min + r6 * (priceRange.max - priceRange.min)) / 1000) * 1000;
      const priceHigh = Math.round(price * (1.5 + r6 * 1.0) / 1000) * 1000;

      const formatPrice = (p) => {
        if (p >= 1000000) return "$" + (p / 1000000).toFixed(1) + "M";
        return "$" + (p / 1000).toFixed(0) + "K";
      };

      const imgId = pexelsImages[imgIndex % pexelsImages.length];
      imgIndex++;

      properties.push({
        id: id++,
        title: title,
        category: cat.name,
        location: location,
        priceRange: formatPrice(price) + " – " + formatPrice(priceHigh),
        image: "https://images.pexels.com/photos/" + imgId + "/pexels-photo-" + imgId + ".jpeg?w=600&h=400&fit=crop",
        thumbnail: "https://images.pexels.com/photos/" + imgId + "/pexels-photo-" + imgId + ".jpeg?w=100&h=140&fit=crop",
        status: status,
        bedrooms: bedrooms,
        price: price
      });
    }
  }

  return properties;
}

const properties = generateProperties();
