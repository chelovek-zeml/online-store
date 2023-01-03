import './style.css';
import App from './pages/app';
import ButtonAddToCart from './components/button/button-addToCart';

const app = new App();
app.run();
ButtonAddToCart.countStock();
ButtonAddToCart.countPrice();