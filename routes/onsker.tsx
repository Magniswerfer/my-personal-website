import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";

const WishCard = ({ imageUrl, productUrl, name, description }) => {
  return (
    <div className="group rounded-lg border border-gray-200 bg-neutral-50 overflow-hidden transition-all hover:shadow-lg flex flex-col h-full">
      <div className="relative aspect-square bg-white overflow-hidden">
        <img
          src={imageUrl || "/api/placeholder/400/400"}
          alt={name}
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      {productUrl && (
        <div className="px-4 pb-4 mt-auto">
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-accent-600 hover:text-accent-800 transition-colors"
          >
            Link til tingen
            <svg
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

const WishlistPage = () => {
  const wishes = [
    {
      name: "Version2 Abonnement",
      description:
        "Danmarks førende nyhedsmedie til digitalteknologi. Det er bare alt for dyrt hæhæ.",
      imageUrl:
        "https://www.version2.dk/themes/mi/mu/images/subsite-logos/version2.svg?itok=BlkSSmVf",
      productUrl: "https://version2.dk",
    },
    {
      name: "Darn Tough Socks",
      description: "Fås I Friluftsland. Ikke en bestemt model. Størrelse ~43",
      imageUrl:
        "https://www.fotoagent.dk/images/w/Cx02y4XSi3tXT9RjpkflPA/s/12535/138/402180041.jpg?v=113213480",
      productUrl: "https://www.friluftsland.dk/brand/darn-tough",
      // No productUrl for this one - it will hide the link
    },
    {
      name: "Langærmet T-shirt i Uld",
      description: "Størrelse XL. Kunne fx være en rullekrave",
      imageUrl:
        "https://images.pwtapi.com/279436.jpg?mediaformatid=50108&destinationid=10016&timestamp=2024-10-16T21:03:37.943+00:00&function=resize&mimeType=image%2Fjpeg&aspectType=1&height=3&quality=80&width=1920",
      productUrl:
        "https://www.toejeksperten.dk/p/lindbergh-rullekravetroeje/30-842118/30-842118dk-sand-mel",
    },
    {
      name: "Spigen Ultra Hybrid Cover til Pixel 8",
      description: "Bare et nyt cover til min telefon (Google Pixel 8)",
      imageUrl:
        "https://www.mobilcovers.dk/cdn/shop/files/6_max_35_d70b8d64-2455-4fc3-83d6-96e4ed95fe49.jpg?crop=center&height=1000&v=1731679338&width=1000",
      productUrl:
        "https://www.mobilcovers.dk/products/google-pixel-8-spigen-ultra-hybrid-cover-gennemsigtig",
    },
    {
      name: "Playdate",
      description:
        "En mega sej lille spillekonsol! Skal så vidt jeg ved bestilles hjem fra USA, så måske er det lidt et projekt. Men den er mega sej!",
      imageUrl:
        "https://static-cdn.play.date/static/images/Playdate-in-hand1.70225f47634a.png",
      productUrl: "https://play.date/",
    },
    {
      name: "Steam-gavekort",
      description: "Så jeg kan købe nye, spændende spil :)",
      imageUrl:
        "https://store.cloudflare.steamstatic.com/public/images/gift/steamcards_physical.png",
      productUrl: "https://store.steampowered.com/digitalgiftcards/?l=danish",
    },
  ];

  return (
    <Layout
      title="My Christmas Wishlist | Magnus H. Kaspersen"
      description="Check out my Christmas wishlist for this year!"
    >
      <Navbar />
      <PageHeader
        title="Gaveønsker 🎁"
        subtitle="Her er ting jeg ønsker mig!"
      />
      <div className="p-4 ">
        {/* Added container with padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => <WishCard key={index} {...wish} />)}
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
