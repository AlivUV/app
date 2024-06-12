import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Title from './Title';


const rows = [
    {
        id: 0,
        date: '16 Mar, 2019',
        name: 'Elvis Presley',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44
    },
    {
        id: 1,
        date: '16 Mar, 2019',
        name: 'Paul McCartney',
        shipTo: 'London, UK',
        paymentMethod: 'VISA ⠀•••• 2574',
        amount: 866.99
    },
    {
        id: 3,
        date: '16 Mar, 2019',
        name: 'Michael Jackson',
        shipTo: 'Gary, IN',
        paymentMethod: 'AMEX ⠀•••• 2000',
        amount: 654.39
    },
    {
        id: 4,
        date: '15 Mar, 2019',
        name: 'Bruce Springsteen',
        shipTo: 'Long Branch, NJ',
        paymentMethod: 'VISA ⠀•••• 5919',
        amount: 212.79
    },
];

export default function StudentsList() {
    return (
        <>
            <Title>Lista de estudiantes</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Ship To</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Puntaje total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{`$${row.amount}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

export { StudentsList };