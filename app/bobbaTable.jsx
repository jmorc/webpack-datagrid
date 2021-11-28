import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function bobbaTable() {
  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: 'caffeine',
      headerName: 'Caffeine',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 120,
    },
    { field: 'desc', headerName: 'Description', width: 500 },
  ];

  const rows = [
    {
      id: 1,
      name: 'Coffee Milk Tea',
      caffeine: 'High',
      price: 4.5,
      desc:
        'Straus organic milk, home brewed heirloom organic tea and cold brewed with Boba Guys house blend coffee.',
    },
    {
      id: 2,
      name: 'Matcha Latte',
      caffeine: 'High',
      price: 4.5,
      desc:
        'Premium grade Japanese green tea with straus whole milk or choose almond or soy milk. Prepared with homemade syrup and your choice of jelly made from scratch or grade a boba.',
    },
    {
      id: 3,
      name: 'Decaf Black Milk Tea',
      caffeine: 'Low',
      price: 4,
      desc:
        'Straus organic milk and home brewed organic decaf black tea. Prepared with homemade syrup and your choice of jelly made from scratch or grade a boba.',
    },
    {
      id: 4,
      name: 'Thai Milk Tea',
      caffeine: 'Medium',
      price: 4,
      desc:
        'Brewed from a strong Ceylon tea combined with straus milk and organic condensed milk. Sweetness cannot be adjusted.',
    },
    {
      id: 5,
      name: 'Hong Kong Style Milk Tea',
      caffeine: 'Medium',
      price: 6,
      desc:
        'A blend of home brewed heirloom organic black teas straus milk and organic condensed milk. Prepared with homemade syrup and your choice of jelly made from scratch or grade a boba.',
    },
    {
      id: 6,
      name: 'Jasmine Milk Tea',
      caffeine: 'Medium',
      price: 4,
      desc:
        'Green tea with strong floral notes from jasmine blossoms that play like LeBron and sing like Mariah. Prepared with homemade syrup and your choice of jelly made from scratch or grade a boba.',
    },
    {
      id: 7,
      name: 'Classic Black Milk Tea',
      caffeine: 'Medium',
      price: 4,
      desc:
        'Malty and silky with a strong burst of that tea taste. Prepared with homemade syrup and your choice of jelly made from scratch or grade a boba.',
    },
    {
      id: 8,
      name: 'Horchata',
      caffeine: 'Low',
      price: 4,
      desc:
        "Rice milk and cinnamon and it's caffeine free. Contains dairy milk. Sweetness and milk cannot be adjusted.",
    },
  ];
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid columns={columns} rows={rows} />;
      </div>
    </div>
  );
}
