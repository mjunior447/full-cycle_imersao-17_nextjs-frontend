"use client";

import {
  AccountCircle,
  ListAlt,
  Logout,
  ShoppingCart,
} from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type UserMenuProps = {
  user: undefined | null;
};

export function UserMenu(props: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const redirectToCart = () => {
    handleClose();
    router.push("/my-cart");
  };

  const redirectToMyOrders = () => {
    handleClose();
    router.push("/my-orders");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();
  };

  return props.user ? (
    <div>
      <IconButton size="large" onClick={handleMenu}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={redirectToCart}>
          <ShoppingCart />
          <Typography>Meu carrinho</Typography>
        </MenuItem>
        <MenuItem onClick={redirectToMyOrders}>
          <ListAlt />
          <Typography>Meus pedidos</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Logout />
          <Typography>Sair</Typography>
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <Link href={"/login"} style={{ textDecoration: "none" }}>
      <Typography
        color="text.primary"
        sx={{
          ml: 3,
          fontWeight: 500,
        }}
      >
        Entrar
      </Typography>
    </Link>
  );
}
