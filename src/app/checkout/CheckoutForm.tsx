import { Paid } from "@mui/icons-material";
import { Box, Button, Grid2, TextField } from "@mui/material";

export function CheckoutForm() {
  return (
    <Box component={"form"}>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TextField
            name="cc-name"
            required
            label="Nome no cartão"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue={"João da Silva"}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TextField
            name="cc-number"
            required
            label="Número do cartão"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={"4111111111111111"}
          />
        </Grid2>
        <Grid2 size={{ xs: 16, md: 6 }}>
          <TextField
            name="cc-exp"
            required
            label="Data de expiração MM/YYYY"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={"12/2022"}
          />
        </Grid2>
        <Grid2 size={{ xs: 16, md: 6 }}>
          <TextField
            name="cc-csc"
            required
            label="CVV"
            helperText="Código de segurança"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={"12/2022"}
          />
        </Grid2>
      </Grid2>
      <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
        <Button type="submit" sx={{ mt: 3 }} startIcon={<Paid />}>
          Pagar
        </Button>
      </Box>
    </Box>
  );
}
