import { Total } from "@/components/Total";
import {
  Box,
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { redirect } from "next/navigation";
import { CheckoutForm } from "./CheckoutForm";

const products = [
  {
    id: "1",
    name: "Camisa",
    description: "camisa branca",
    price: 100,
    image_url: "https://source.unsplash.com/random?product",
    category_id: "1",
  },
  {
    id: "2",
    name: "Calça",
    description: "cança jeans",
    price: 130,
    image_url: "https://source.unsplash.com/random?product",
    category_id: "1",
  },
];

const cart = {
  items: [
    {
      product_id: "1",
      quantity: 2,
      total: 200,
    },
    {
      product_id: "2",
      quantity: 1,
      total: 100,
    },
  ],
  total: 1000,
};

async function CheckoutPage() {
  if (cart.items.length === 0) {
    return redirect("/my-cart");
  }

  return (
    <Box>
      <Typography variant="h3">Checkout</Typography>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <CheckoutForm />
        </Grid2>
        <Grid2 size={{ xs: 0, md: 1 }}>
          <Divider orientation="vertical" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Typography variant="h5">Resumo do pedido</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell>Qtd.</TableCell>
                <TableCell>Preço</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.items.map((item, key) => {
                const product = products.find(
                  (product) => product.id == item.product_id
                );

                return (
                  <TableRow key={key}>
                    <TableCell>{product?.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.total)}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={3}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Total total={cart.total} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default CheckoutPage;
