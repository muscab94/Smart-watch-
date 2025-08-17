import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { addToCart, decreaseQuantity, removeFromCart } from "../redux/reducer/cart";
import { useNavigate } from "react-router-dom";

const CartProducts = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="shadow mt-5 bg-black/15 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
      {products.length > 0 ? (
        <Table className="w-full">
          <TableCaption className="font-mono font-thin text-xl">
            A list of your cart products.
          </TableCaption>

          {/* Table Header */}
          <TableHeader className="font-extrabold text-xl text-white border-b-4 border-black/30">
            <TableRow>
              <TableHead className="text-center">No</TableHead>
              <TableHead className="w-[60px] text-center">Image</TableHead>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.watchId}>
                <TableCell className="font-medium text-center border-b-2 border-black/30">
                  {index + 1}
                </TableCell>
                <TableCell className="grid place-items-center border-b-2 border-black/30">
                  <img
                    className="w-14 h-14 p-1 rounded-full border border-black/30"
                    src={product.img}
                    alt={product.title}
                  />
                </TableCell>
                <TableCell className="text-center font-thin p-1 border-b-2 border-black/30">
                  {product.title}
                </TableCell>
                <TableCell className="font-thin text-center border-b-2 border-black/30">
                  ${product.price}
                </TableCell>
                <TableCell className="font-thin text-center border-b-2 border-black/30">
                  <div className="flex items-center justify-center gap-3">
                    <button className=" bg-white/70 px-5 rounded-2xl text-lg font-bold"
                    onClick={() => dispatch(addToCart(product))}>+</button>
                    <span className="font-bold">{product.quantity}</span>
                    <button className="bg-white/70 px-5 rounded-3xl text-lg font-bold"
                    onClick={() => dispatch(decreaseQuantity(product))}>-</button>
                  </div>
                </TableCell>
                <TableCell className="font-thin text-center border-b-2 border-black/30">
                  ${product.price * (product.quantity || 1)}
                </TableCell>
                <TableCell className="font-thin text-red-600 text-center border-b-2 border-black/30">
                  <button
                    className="hover:underline"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    Remove
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          {/* Table Footer */}
          <TableFooter>
            <TableRow className="hover:bg-white/1">
              <TableCell className="font-bold text-xl text-center">Total</TableCell>
              <TableCell colSpan={4}></TableCell>
              <TableCell className="text-center font-semibold text-lg">
                ${total}
              </TableCell>
              <TableCell className="text-center">
                 <button className="ml-10 bg-blue text-white px-8 py-1 rounded-3xl
                 hover:bg-black text-xl"
                 onClick={() => navigate("/Watches")}>
                  Continue shopping 
                 </button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ) : (
        <h1 className="text-3xl font-bold text-center py-10">Cart Is Empty</h1>
      )}
    </div>
  );
};

export default CartProducts;
