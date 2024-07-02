// React imports
import { useEffect, useState } from 'react';

// MUI components
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';

// MUI icons
import { EditOutlined } from '@mui/icons-material';

// Custom components
import { Title, UserModification } from 'components/Dashboard';
import { TablePaginationActions } from 'components/Dashboard/users/StudentsTable/TablePaginationActions'

// Services
import { getAllApplicants } from 'services/ApplicantService';


function StudentsTable() {
  const [page, setPage] = useState(0);
  const [applicantData, setApplicantData] = useState();
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(false);
  const handleOpenModal = event => {
    setApplicantData(rows[event.currentTarget.id.slice(4)]);
    setModalOpen(true);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const updateRows = () => {
    getAllApplicants()
      .then(applicants => {
        setRows(applicants || []);
        setApplicantData(applicants[0])
      });
  }

  useEffect(() => {
    if (rows.length !== 0 && applicantData)
      return;

    updateRows();
  }, [rows, applicantData]);

  return (
    <>
      <Title>Estudiantes registrados</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Modificar usuario</TableCell>
              <TableCell align="center">Número de identificación</TableCell>
              <TableCell align="center">Nombres</TableCell>
              <TableCell align="center">Apellidos</TableCell>
              <TableCell align="center">Correo electrónico</TableCell>
              <TableCell align="center">Tipo de registro</TableCell>
              <TableCell align="center">Periodo</TableCell>
              <TableCell align="center">Programa</TableCell>
              <TableCell align="center">Dirección</TableCell>
              <TableCell align="center">Teléfono</TableCell>
              <TableCell align="center">Colegio</TableCell>
              <TableCell align="center">Puntaje global</TableCell>
              <TableCell align="center">Lectura crítica</TableCell>
              <TableCell align="center">Matemáticas</TableCell>
              <TableCell align="center">Sociales y ciudadanas</TableCell>
              <TableCell align="center">Ciencias naturales</TableCell>
              <TableCell align="center">Inglés</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ width: 160 }} align="center">
                  <IconButton id={`row-${index}`} aria-label="edit" onClick={handleOpenModal}>
                    <EditOutlined />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.first_name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.last_name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.email}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.registrationType}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.period}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.program}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.address}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.phone}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.highSchool}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.globalScore}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.readingScore}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.mathScore}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.socialScore}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.scienceScore}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.englishScore}
                </TableCell>
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
              <TableCell colSpan={7}>
                <Box display="flex" justifyContent="flex-end">
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    slotProps={{
                      select: {
                        inputProps: {
                          'aria-label': 'rows per page',
                        },
                        native: true,
                      },
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <UserModification open={modalOpen} applicantState={[applicantData, setApplicantData]} onClose={handleCloseModal} />
    </>
  );
}

export { StudentsTable };
export default StudentsTable;