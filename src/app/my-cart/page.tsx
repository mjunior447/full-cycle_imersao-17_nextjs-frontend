import { Total } from "@/components/Total";
import { Delete, ShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

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

async function MyCartPage() {
  return (
    <Box>
      <Typography variant="h3">
        <ShoppingCart /> Meu carrinho
      </Typography>
      <Grid2 container>
        <Grid2 size={{ xs: 10, sm: 7, md: 4 }}>
          <List>
            {cart.items.map((item, key) => {
              const product = products.find(
                (product) => product.id == item.product_id // usar ===
              );

              return (
                <React.Fragment key={key}>
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mt: 3,
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src={product?.image_url} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="button">
                            {product?.name} - Qtd. {item.quantity}
                          </Typography>
                          <Typography sx={{ color: "primary.main" }}>
                            {new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(item.total)}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>

                  <ListItem
                    sx={{ display: "flex", justifyContent: "end", p: 0 }}
                  >
                    <form>
                      <input type="hidden" name="index" value={key} />
                      <Button
                        color="error"
                        startIcon={<Delete />}
                        type="submit"
                      >
                        Excluir
                      </Button>
                    </form>
                  </ListItem>
                  <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                </React.Fragment>
              );
            })}
            {!cart.items.length && (
              <ListItem>
                <ListItemText>Nenhum item no carrinho</ListItemText>
              </ListItem>
            )}
          </List>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Total total={cart.total} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
            {cart.items.length ? (
              <Button LinkComponent={Link} href="/checkout">
                Finalizar compra
              </Button>
            ) : (
              <Button LinkComponent={Link} href="/products">
                Continuar comprando
              </Button>
            )}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default MyCartPage;
