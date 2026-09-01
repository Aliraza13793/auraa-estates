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

const unsplashImages = [
  "1545324418-cc1a3fa10c00", "1613490493576-7fde63acd811",
  "1512917774080-9991f1c4c750", "1486406146926-c627a92ad1ab",
  "1600596542815-ffad4c1539a9", "1600607687939-ce8a6c25118c",
  "1600585154340-be6161a56a0c", "1600566753190-17f0baa2a6c3",
  "1600047509807-ba8f99d2cdde", "1600047509358-9dc75509da38",
  "1600573472592-401b489a3cdc", "1600607687644-c7171b42498f",
  "1497366216548-37526070297c", "1600210492486-724fe5c67fb0",
  "1500382017468-9049fed747ef", "1441986300917-64674bd600d8",
  "1564013799919-ab600027ffc6", "1600566753086-00f18fb6b3ea",
  "1600585154526-990dced4db0d", "1600566752355-35792bedcfea",
  "1580587771525-78b9dba3b914", "1560448204-e02f11c3d0e2",
  "1600585152220-90363fe7e115", "1600607687920-4e2a09cf159d",
  "1600566753151-384129cf4e4e", "1600573472550-8125a1b4d1e4",
  "1583608205776-bfd35f0d9f83", "1574362848149-11496d93a7c7",
  "1560185893-a55cbc8c57e8", "1560448075-bb7f0563c1e4",
  "1600585152915-d208bec867a1", "1600566753376-12c8ab7c5c3e"
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

      const imgId = unsplashImages[imgIndex % unsplashImages.length];
      imgIndex++;

      properties.push({
        id: id++,
        title: title,
        category: cat.name,
        location: location,
        priceRange: formatPrice(price) + " – " + formatPrice(priceHigh),
        image: "https://images.unsplash.com/photo-" + imgId + "?w=600&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-" + imgId + "?w=100&h=140&fit=crop",
        status: status,
        bedrooms: bedrooms,
        price: price
      });
    }
  }

  return properties;
}

const properties = generateProperties();
