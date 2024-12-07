"use client";

import { Category } from "@/models";
import { FormControl, MenuItem, Select } from "@mui/material";
import { grey } from "@mui/material/colors";

export function SelectCategory({ categories }: { categories: Category[] }) {
  return (
    <FormControl size="small" sx={{ width: 200 }}>
      <Select
        name="select-category"
        sx={{ backgroundColor: grey[400] }}
        onChange={() => {
          //   const search = searchParams.get("search");
          //   const category_id = event.target.value;
          //   searchProducts(router, search, category_id);
        }}
      >
        <MenuItem value="0">Todas as categorias</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
