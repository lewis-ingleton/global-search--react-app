import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useMediaQuery, useTheme } from '@mui/material';

// CSS
import './Responsive.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveLayout() {
    const theme = useTheme();
    const mediaSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {
                mediaSM ? (
                    <Box sx={{ width: 0.9 }} className="smallWrapper">
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                            <Box gridColumn="span 12">
                                <Item>Search bar.</Item>
                            </Box>
                            <Box gridColumn="span 12">
                                <Item>Country name</Item>
                            </Box>
                            <Box gridColumn="span 12">
                                <Item>Country flag</Item>
                            </Box>
                            <Box gridColumn="span 12">
                                <Item>Map</Item>
                            </Box>
                            <Box gridColumn="span 12">
                                <Item>Local news</Item>
                            </Box>
                        </Box>
                    </Box>


                ) : (

                    <Box sx={{ width: 0.9 }} className="largeWrapper">
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                            <Box gridColumn="span 12">
                                <Item>Search bar</Item>
                            </Box>
                            <Box gridColumn="span 12">
                                <Item>Country name</Item>
                            </Box>
                            <Box gridColumn="span 6">
                                <Item>Country flag</Item>
                            </Box>
                            <Box gridColumn="span 6">
                                <Item>Map</Item>
                            </Box>
                            <Box gridColumn="span 12">
                                <Item className='item'>Local news</Item>
                            </Box>
                        </Box>
                    </Box>


                )

            }
        </>
    );
}