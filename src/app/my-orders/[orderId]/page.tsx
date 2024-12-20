import { Total } from "@/components/Total";
import { OrderStatus } from "@/models";
import {
  Box,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const order = {
  id: "1",
  status: OrderStatus.PENDING,
  created_at: "2021-10-10T00:00:00.000Z",
  items: [
    {
      id: 3,
      product: {
        id: "1",
        name: "Camisa",
        description: "camisa branca",
        image_url: "https://source.unsplash.com/random?product",
        price: 100,
        category_id: "1",
      },
      quantity: 2,
      price: 100,
    },
    {
      id: 2,
      product: {
        id: "2",
        name: "Calça",
        description: "calça jeans",
        image_url: "https://source.unsplash.com/random?product",
        price: 145,
        category_id: "1",
      },
      quantity: 1,
      price: 145,
    },
  ],
  total: 1000,
};

async function MyOrderDetail({ params }: { params: { orderId: string } }) {
  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {order.status === OrderStatus.PENDING ? (
                <Typography variant="h5" sx={{ color: "warning.main" }}>
                  ⏳
                </Typography>
              ) : order.status === OrderStatus.PAID ? (
                <Typography variant="h5" sx={{ color: "success.main" }}>
                  ✔
                </Typography>
              ) : (
                <Typography variant="h5" sx={{ color: "error.main" }}>
                  ✖
                </Typography>
              )}
            </Box>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              {order.status === OrderStatus.PENDING
                ? "Pedido pendente"
                : order.status === OrderStatus.PAID
                ? "Pedido pago"
                : "Pedido cancelado"}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography>Resumo do pedido</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell>Qtd.</TableCell>
                <TableCell>Preço</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.items.map((item, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.product.price)}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={3}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Total total={order.total} />
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

export default MyOrderDetail;
