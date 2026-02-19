import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
// this os the main app component that sets up the routing for the application. It uses React Router to define the routes for the landing page, blog page, and individual blog post pages. Each route is associated with a specific component that will be rendered when the route is accessed.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;