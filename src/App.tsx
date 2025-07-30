import type { ReactElement } from "react";

export interface Column<T> {
  key: T;
  title: string | ReactElement;
}

export interface Data {
  id: number;
  name: string;
  age: string;
}

export interface TableProps<T extends Object> extends React.PropsWithChildren {
  columns: Column<keyof T>[];
  data: T[];
}

// const Table = ({ columns, data }: TableProps) => (
//   <table>
//     <thead>
//       <tr>
//         {columns.map((col) => (
//           <th key={String(col.key)}>{col.title}</th>
//         ))}
//       </tr>
//     </thead>
//     <tbody>
//       {data.map((row, idx) => (
//         <tr key={idx}>
//           {columns.map((col) => (
//             <td key={String(col.key)}>{String(row[col.key])}</td>
//           ))}
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

export const Table = ({ children }: React.PropsWithChildren) => {
  return <table>{children}</table>;
};

export const TableHeader = ({ children }: React.PropsWithChildren) => {
  return <thead>{children}</thead>;
};

export const TableBody = ({ children }: React.PropsWithChildren) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }: React.PropsWithChildren) => {
  return <tr>{children}</tr>;
};

interface TableRowHeaderProps {
  title: string;
}

export const TableRowHeader = ({ title }: TableRowHeaderProps) => {
  return <th>{title}</th>;
};

export const TableData = ({ children }: React.PropsWithChildren) => {
  return <td>{children}</td>;
};

export default Table;

// app

interface MyTableData {
  id: number;
  name: string;
  age: string;
}

export function App() {
  const columns: Column<keyof MyTableData>[] = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "age", title: "Age" },
  ];

  const data: MyTableData[] = [
    { id: 1, name: "John Doe", age: "28" },
    { id: 2, name: "Jane Smith", age: "34" },
    { id: 3, name: "Alice Johnson", age: "45" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableRowHeader key={String(col.key)} title={String(col.title)} />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, idx) => (
          <TableRow key={idx}>
            {columns.map((col) => (
              <TableData key={String(col.key)}>
                {String(row[col.key])}
              </TableData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
