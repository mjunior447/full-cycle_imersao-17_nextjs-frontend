import { Product } from "@/models";
import { Description, LocalOffer } from "@mui/icons-material";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { ProductQuantityForm } from "./ProductQuantityForm";

const product: Product = {
  id: "1",
  name: "Camisa",
  description: "Camisa branca",
  price: 65.9,
  image_url: "https://picsum.photos/200/300",
  category_id: "1",
};

async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <Grid2 container spacing={2}>
      <Grid2
        size={{ xs: 12, md: 7 }}
        position={"relative"}
        sx={{ height: { xs: "360px", md: "unset" } }}
      >
        <Image
          src={product.image_url}
          layout="fill"
          objectFit="cover"
          priority
          alt="product.name"
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 5 }}>
        <Typography variant="h4">{product.name}</Typography>
        <Box
          mt={2}
          sx={{
            colr: "primary.main",
            display: "flex",
          }}
        >
          <Description />
          <Typography variant="button">Descrição</Typography>
        </Box>
        <Typography
          sx={{
            mt: 2,
            ml: 3,
          }}
        >
          {product.description}
        </Typography>
        <Box
          mt={2}
          sx={{
            color: "primary.main",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocalOffer />
          <Typography variant="button">Preço</Typography>
        </Box>
        <Typography sx={{ mt: 2, ml: 3 }}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </Typography>
        <Card sx={{ mt: 1 }} raised>
          <CardContent>
            <ProductQuantityForm product={product} />
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default ProductDetailPage;
