import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

type WeekEndingCell = {
  label: string;
  timestamp: number;
};

type SalesCell = {
  label: string;
  value: number;
};

type Item = {
  weekEnding: WeekEndingCell;
  retailSales: SalesCell;
  wholesaleSales: SalesCell;
  unitsSold: SalesCell;
  retailerMargin: SalesCell;
};

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "weekEnding",
    compare: (a, b) => {
      return a.weekEnding.timestamp - b.weekEnding.timestamp;
    },
    renderHeaderCell: () => {
      return "Week Ending";
    },
    renderCell: item => {
      return item.weekEnding.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "retailSales",
    compare: (a, b) => {
      return a.retailSales.value - b.retailSales.value;
    },
    renderHeaderCell: () => {
      return "Retail Sales";
    },
    renderCell: item => {
      return item.retailSales.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "wholesaleSales",
    compare: (a, b) => {
      return a.wholesaleSales.value - b.wholesaleSales.value;
    },
    renderHeaderCell: () => {
      return "Wholesale Sales";
    },
    renderCell: item => {
      return item.wholesaleSales.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "unitsSold",
    compare: (a, b) => {
      return a.unitsSold.value - b.unitsSold.value;
    },
    renderHeaderCell: () => {
      return "Units Sold";
    },
    renderCell: item => {
      return item.unitsSold.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "retailerMargin",
    compare: (a, b) => {
      return a.retailerMargin.value - b.retailerMargin.value;
    },
    renderHeaderCell: () => {
      return "Retailer Margin";
    },
    renderCell: item => {
      return item.retailerMargin.label;
    },
  }),
];

const ProductTable = () => {
  const product = useSelector((state: RootState) => state.product.productData);
  const items: Item[] = product.length
    ? product[0].sales.map(sale => ({
        weekEnding: {
          label: sale.weekEnding,
          timestamp: new Date(sale.weekEnding).getTime(),
        },
        retailSales: {
          label: `$${sale.retailSales}`,
          value: sale.retailSales,
        },
        wholesaleSales: {
          label: `$${sale.wholesaleSales}`,
          value: sale.wholesaleSales,
        },
        unitsSold: {
          label: `$${sale.unitsSold}`,
          value: sale.unitsSold,
        },
        retailerMargin: {
          label: `$${sale.retailerMargin}`,
          value: sale.retailerMargin,
        },
      }))
    : [];

  return (
    <DataGrid items={items} columns={columns} sortable focusMode="composite">
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody>
        {({ item, rowId }) => (
          <DataGridRow key={rowId}>
            {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};

export default ProductTable;
