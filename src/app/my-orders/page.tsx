import { OrderStatus } from "@/models";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

const orders = [
  {
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
  },
];

async function MyOrdersListPage() {
  return (
    <Box>
      <Typography variant="h4">Meus pedidos</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => {
            return (
              <TableRow>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  {new Date(order.created_at).toLocaleDateString("pt-BR")}
                </TableCell>
                <TableCell>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(order.total)}
                </TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    LinkComponent={Link}
                    href={`/my-orders/${order.id}`}
                  >
                    Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
}

export default MyOrdersListPage;
