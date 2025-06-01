
import { useState, useEffect } from "react"
import AddToCartButton from "../Cart/AddToCartButton"
import ProductDetailModal from "../Products/ProductDetailModal"
import Img from "../../assets/item/cup.jpg"
import Img2 from "../../assets/item/cup1.jpg"
import Img3 from "../../assets/item/img.jpg"
import Img4 from "../../assets/item/img1.jpg"
import Img5 from "../../assets/item/img2.jpg"
import Img6 from "../../assets/item/img3.jpg"
import Img7 from "../../assets/item/img11.jpg"
import Img8 from "../../assets/item/img12.jpg"
import Img9 from "../../assets/item/img13.jpg"
import Img10 from "../../assets/item/img14.jpg"
import Img11 from "../../assets/item/img15.jpg"
import Img12 from "../../assets/item/img16.jpg"
import Img13 from "../../assets/item/img17.jpg"
import Img14 from "../../assets/item/img18.jpg"
import Img15 from "../../assets/item/img19.jpg"
import Img16 from "../../assets/item/img20.jpg"

const ShopProductsData = [
  {
    id: 1,
    img: Img,
    title: "Mirror with pink bows",
    rating: 4.5,
    price: 2500,
    color: "Pink",
    description:
      "A charming personalized gift box featuring a handmirror decorated with pink bow tiles and elegant design.",
  },
  {
    id: 2,
    img: Img2,
    title: "Mirror with red hearts",
    price: 2500,
    rating: 4.5,
    color: "Red",
    description: "A beautiful handmirror decorated with red heart tiles and personalized with elegant white script.",
  },
  {
    id: 3,
    img: Img3,
    title: "Large pink cup",
    price: 5000,
    rating: 4.7,
    color: "Pink",
    description:
      "A matching glass cup with a wooden lid and straw, customized with personalized design and heart accents.",
  },
  {
    id: 4,
    img: Img4,
    title: "Large white cup",
    price: 5000,
    rating: 4.4,
    color: "White",
    description: "Elegant white cup with wooden lid, perfect for personalized gifts and daily use.",
  },
  {
    id: 5,
    img: Img5,
    title: "Engagement frame",
    price: 3500,
    rating: 4.5,
    color: "Pink",
    description:
      "Beautiful engagement frame with personalized design, perfect for special occasions and memorable moments.",
  },
  // Add more products for the shop
  {
    id: 6,
    img: Img,
    title: "Custom Mirror Set",
    price: 4000,
    rating: 4.6,
    color: "Pink",
    description: "Complete mirror set with custom designs and elegant packaging.",
  },
  {
    id: 7,
    img: Img2,
    title: "Heart Collection Mirror",
    price: 2800,
    rating: 4.3,
    color: "Red",
    description: "Beautiful heart-themed mirror perfect for romantic gifts.",
  },
  {
    id: 8,
    img: Img3,
    title: "Designer Cup Large",
    price: 5500,
    rating: 4.8,
    color: "Pink",
    description: "Premium designer cup with custom engravings and wooden accessories.",
  },
  {
    id: 9,
    img: Img4,
    title: "Elegant White Cup",
    price: 5200,
    rating: 4.5,
    color: "White",
    description: "Sophisticated white cup with personalized designs, ideal for gifts.",
  },
  {
    id: 10,
    img: Img5,
    title: "Birthday Frame",
    price: 3600,
    rating: 4.7,
    color: "Pink",
    description: "Customizable engagement frame with elegant design, perfect for special moments.",
  },
  {
    id: 11,
    img: Img6,
    title: "Birthday Ceramic Frame",
    price: 3000,
    rating: 4.2,
    color: "White",
    description: "Set of ceramic frame design, perfect for gifting.",
  },
  {
    id: 12,
    img: Img7,
    title: "Vintage Box",
    price: 4500,
    rating: 4.4,
    color: "Red",
    description: "Vintage-style Box with intricate designs, ideal for collectors.",
  },
  {
    id: 13,
    img: Img8,
    title: "Floral Pattern Frame",
    price: 3200,
    rating: 4.1,
    color: "Red and Yellow",
    description: "Cup with beautiful floral patterns, perfect for nature lovers.",
  },
  {
    id: 14,
    img: Img9,
    title: "Customizable page saver",
    price: 3700,
    rating: 4.6,
    color: "Pink",
    description: "Perfect gift for Book lovers.",
  },
  {
    id: 15,
    img: Img10,
    title: "Artistic Glass Cup",
    price: 4800,
    rating: 4.9,
    color: "Pink",
    description: "Handcrafted glass cup with artistic designs, perfect for special occasions.",
  },
  {
    id: 16,
    img: Img11,
    title: "Elegant Wooden Frame",
    price: 5000,
    rating: 4.8,
    color: "Brown",
    description: "Elegant wooden Frame with personalized engravings, ideal for gifts.",
  },
  {
    id: 17,
    img: Img12,
    title: "Luxury Name Frame",
    price: 1200,
    rating: 4.9,
    color: "White",
    description: "Luxury Name frame with custom designs, perfect for lovers.",
  },
  {
    id: 18,
    img: Img13,
    title: "Birthday Frame",
    price: 3500,
    rating: 4.5,
    color: "Black",
    description: "Customizable Birthday Frame with your birthday and name.",
  },
  {
    id: 19,
    img: Img14,
    title: "Ceramic Graduation Frame",
    price: 4000,
    rating: 4.3,
    color: "Red",
    description: "if uou have a graduated friend or a member of your familly you find the suitble gift.",
  },
  {
    id: 20,
    img: Img15,
    title: "Custom Box",
    price: 3800,
    rating: 4.6,
    color: "Blue",
    description: "perfect cute Box xuth things you choose to customize.",
  },
  {
    id: 21,
    img: Img16,
    title: "Artisan Mirror and Cup box",
    price: 6000,
    rating: 4.7,
    color: "Red",
    description: "Handcrafted artisan cup with unique designs, perfect for collectors.",
  },
]

const ShopProducts = () => {
  const [products, setProducts] = useState(ShopProductsData)
  const [filteredProducts, setFilteredProducts] = useState(ShopProductsData)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: "all",
    color: "all",
    rating: "all",
  })
  const [sortBy, setSortBy] = useState("name")

  useEffect(() => {
    let filtered = [...products]

    // Apply filters
    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number)
      filtered = filtered.filter((product) => product.price >= min && product.price <= max)
    }

    if (filters.color !== "all") {
      filtered = filtered.filter((product) => product.color.toLowerCase() === filters.color.toLowerCase())
    }

    if (filters.rating !== "all") {
      const minRating = Number.parseFloat(filters.rating)
      filtered = filtered.filter((product) => product.rating >= minRating)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.title.localeCompare(b.title)
      }
    })

    setFilteredProducts(filtered)
  }, [filters, sortBy, products])

  const handleViewProduct = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold" style={{ color: "#C05263" }}>
              Our Shop
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of handcrafted gifts and personalized items. Find the perfect gift for
              your loved ones or treat yourself to something special.
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    style={{ borderColor: "#C05263", focusBorderColor: "#C05263" }}
                  >
                    <option value="all">All Prices</option>
                    <option value="0-3000">0 - 3,000da</option>
                    <option value="3000-5000">3,000 - 5,000da</option>
                    <option value="5000-10000">5,000da+</option>
                  </select>
                </div>

                {/* Color Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                  <select
                    value={filters.color}
                    onChange={(e) => handleFilterChange("color", e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    style={{ borderColor: "#C05263", focusBorderColor: "#C05263" }}
                  >
                    <option value="all">All Colors</option>
                    <option value="pink">Pink</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <select
                    value={filters.rating}
                    onChange={(e) => handleFilterChange("rating", e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    style={{ borderColor: "#C05263", focusBorderColor: "#C05263" }}
                  >
                    <option value="all">All Ratings</option>
                    <option value="4.5">4.5★ & up</option>
                    <option value="4.0">4.0★ & up</option>
                    <option value="3.5">3.5★ & up</option>
                  </select>
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                  style={{ borderColor: "#C05263", focusBorderColor: "#C05263" }}
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.img || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                    {product.color}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-2xl font-bold mb-2" style={{ color: "#C05263" }}>
                    {product.price.toLocaleString()}da
                  </p>

                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-600 text-sm">{product.rating}</span>
                  </div>

                  <div className="space-y-2">
                    <AddToCartButton
                      product={product}
                      variant="primary"
                      size="medium"
                      className="w-full"
                      style={{
                        backgroundColor: "#C05263",
                        borderColor: "#C05263",
                        color: "white",
                      }}
                    />
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="w-full px-4 py-2 text-sm border rounded hover:bg-opacity-10 transition-colors"
                      style={{
                        borderColor: "#C05263",
                        color: "#C05263",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#C0526310"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent"
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">No products found</div>
              <p className="text-gray-400">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default ShopProducts
