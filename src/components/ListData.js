import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import axios from "axios";
// import Config from "../config/setting";
import Menu from "../Menu";
import DeleteIcon from '@mui/icons-material/Delete';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d3d3d3",
    color: "#000000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const userListData = async () => {
  let res = await axios.get("http://49.212.200.159:8080/api/user/list");
  console.log(res);
  res = res.data;
  return res;
};



// const userDelete = async () => {
//   let res = await axios.delete('http://49.212.200.159:8080/api/user/delete', { data: { id: "" } });
//   console.log(res.data);
//   res = res.data;
//   return res;
// };

const userDelete = async (userData) => {
  let res = await axios.delete("http://49.212.200.159:8080/api/user/delete", JSON.stringify(userData), {
    headers: {
      'content-type': 'application/json',
    }
  });
  console.log(res);
  res = res.data;
  return res;
};



const CustomPaginationActionsTable = () => {
  const [page, setPage] = React.useState(0);
  const [list, setData] = React.useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [id, setId] = React.useState([]);


  const title = "ユーザ一覧";
  const headerList = ['ID', '名前', '年齢', "削除"];

  React.useEffect(() => {
    (async () => {
      const listData = await userListData();
      console.log(listData);
      setData(listData);
    })();
  }, []);


  // React.useEffect(() => {
  //   (async () => {
  //     const userData = await userDelete();
  //     console.log(userData);
  //     setId.filter((userData, id) => (userData !== 'id'))
  //   })();
  // }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const sendData = async (id) => {
    console.log(id);
    const userData = {
      data: {
        id: id
      }
    };
    const res = await userDelete(userData);
    console.log(res);
    return res.data;
  };

  // const onChangeDelet = (id) => {
  //   const listData = [...delet];
  //   listData.splice(id, 1);
  //   setDelet(listData);
  // };

  return (
    <Menu name={title}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {headerList?.map((row) => (
                <StyledTableCell key={row}>{row}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                {/* <TableCell>{row.height}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.Occupation}</TableCell> */}
                <IconButton
                  // defaultValue={delet}
                  // aria-label="delete"
                  onClick={async () => await sendData(row.id)}


                // onClick={onChangeDelet}
                >
                  <DeleteIcon />
                </IconButton>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={list?.length || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Menu>
  );
};

export default CustomPaginationActionsTable;
