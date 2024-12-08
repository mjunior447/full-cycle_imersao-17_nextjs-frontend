import { Product } from "@/models";
import { ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const products: Product[] = [
  {
    id: "1",
    name: "produto 1",
    description: "description product 1",
    price: 129.9,
    image_url: "https://source.unsplash.com/random?product",
    category_id: "1",
  },
  {
    id: "2",
    name: "produto 1",
    description: "description product 1",
    price: 129.9,
    image_url: "https://source.unsplash.com/random?product",
    category_id: "1",
  },
  {
    id: "3",
    name: "produto 1",
    description: "description product 1",
    price: 129.9,
    image_url: "https://source.unsplash.com/random?product",
    category_id: "1",
  },
];

function ListProductsPage() {
  return (
    <Grid2 container spacing={2}>
      {products.length === 0 && (
        <Grid2
          size={{ xs: 12 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography>Nenhum produto encontrado</Typography>
        </Grid2>
      )}

      {products.map((product, key) => (
        <Grid2
          size={{ xs: 12, sm: 6, md: 4 }}
          key={key}
          className={"product-item"}
        >
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56,25%",
              }}
            >
              <Image
                src={product.image_url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography sx={{ color: "primary.main" }}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "end",
                mt: 2,
              }}
            >
              <Link
                href={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button size="small" startIcon={<ShoppingCart />}>
                  Comprar
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ListProductsPage;
