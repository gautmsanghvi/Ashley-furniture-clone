import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import {
  livingRoomProducts,
  bedroomProducts,
  diningProducts,
  mattressProducts,
  outdoorProducts,
  kidsProducts,
  homeOfficeProducts,
  decorProducts,
  rugProducts,
  storageProducts,
  dealsProducts,
} from './data/categoryData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/living-room"
            element={
              <CategoryPage
                title="Living Room Furniture"
                description="Transform your living space with our premium sofas, chairs, tables, and entertainment centers"
                products={livingRoomProducts}
              />
            }
          />
          <Route
            path="/bedroom"
            element={
              <CategoryPage
                title="Bedroom Furniture"
                description="Create your dream bedroom with our beds, dressers, nightstands, and more"
                products={bedroomProducts}
              />
            }
          />
          <Route
            path="/dining"
            element={
              <CategoryPage
                title="Dining Room Furniture"
                description="Gather in style with our dining tables, chairs, and kitchen furniture"
                products={diningProducts}
              />
            }
          />
          <Route
            path="/mattresses"
            element={
              <CategoryPage
                title="Mattresses"
                description="Experience better sleep with our premium mattress collection"
                products={mattressProducts}
              />
            }
          />
          <Route
            path="/outdoor"
            element={
              <CategoryPage
                title="Outdoor Furniture"
                description="Elevate your outdoor living with patio furniture and decor"
                products={outdoorProducts}
              />
            }
          />
          <Route
            path="/kids"
            element={
              <CategoryPage
                title="Baby & Kids Furniture"
                description="Quality furniture designed for your little ones"
                products={kidsProducts}
              />
            }
          />
          <Route
            path="/home-office"
            element={
              <CategoryPage
                title="Home Office Furniture"
                description="Work from home in comfort and style"
                products={homeOfficeProducts}
              />
            }
          />
          <Route
            path="/decor"
            element={
              <CategoryPage
                title="Home Decor"
                description="Add the finishing touches to every room"
                products={decorProducts}
              />
            }
          />
          <Route
            path="/rugs"
            element={
              <CategoryPage
                title="Rugs"
                description="Complete your space with our beautiful rug collection"
                products={rugProducts}
              />
            }
          />
          <Route
            path="/storage"
            element={
              <CategoryPage
                title="Storage & Organization"
                description="Keep your home organized with smart storage solutions"
                products={storageProducts}
              />
            }
          />
          <Route
            path="/deals"
            element={
              <CategoryPage
                title="Deals & Offers"
                description="Save big on quality furniture and home decor"
                products={dealsProducts}
              />
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
