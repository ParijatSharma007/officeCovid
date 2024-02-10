import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CommonTable({
  data,
  fields,
  asId,
  path = "",
  haveTonNavigate = false,
}: any) {
  const router = useRouter();

  const toSinglePage = (id: string) => {
    if (haveTonNavigate) {
      router.push(`${path}/${id}`);
    }
  };

  return (
    <TableContainer component={Paper} sx={{
        height : "700px"
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {fields.map((field: any, idx: number) => (
              <TableCell align="center" key={idx}>
                {field.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item: any, idx: number) => (
            <TableRow
              key={`${item[asId]} ${idx}`}
              onClick={() => toSinglePage(item[asId])}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {fields.map((field: any, idx: number) =>
                !field.includes("Url") ? (
                  <TableCell
                    key={idx.toString() + item[asId] + idx.toString()}
                    align="center"
                  >
                    {item[field]}
                  </TableCell>
                ) : (
                  <TableCell align="center" key={idx.toString() + item.id}>
                    <Link href={item[field]} style={{ color: "white" }}>
                      {item[field]}{" "}
                    </Link>
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
