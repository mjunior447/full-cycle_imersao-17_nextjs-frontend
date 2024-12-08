import { Paid } from "@mui/icons-material";
import { Chip } from "@mui/material";

export function Total(props: { total: number }) {
  return (
    <Chip
      label={`Total - ${new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL",
      }).format(props.total)}`}
      sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
      color="primary"
      icon={<Paid />}
    />
  );
}
