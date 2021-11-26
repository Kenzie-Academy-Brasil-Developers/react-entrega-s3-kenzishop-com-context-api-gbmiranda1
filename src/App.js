import Routes from "./Routes"
import {CartProvider} from "./Providers/Cart"
import {UserProvider} from "./Providers/user"
import {ProductProvider} from "./Providers/Products"

function App() {
  return (
    <div>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Routes></Routes>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
      
    </div>
  );
}

export default App;
