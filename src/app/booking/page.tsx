'use client'
import { useState } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import DateReserve from '@/components/DateReserve';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addBooking } from '@/redux/features/bookSlice';
import BookingList from '@/components/BookingList';

export default function BookingPage() {
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [venue, setVenue] = useState('');
    const [date, setDate] = useState<Dayjs | null>(null);

    const makeBooking = () => {
        if (name && tel && venue && date) {
            const item = {
                nameLastname: name,
                tel: tel,
                venue: venue,
                bookDate: dayjs(date).format("YYYY/MM/DD")
            };
            dispatch(addBooking(item));
        }
    };

    return (
        <main className="w-full flex flex-col items-center p-10 space-y-10">
            <h1 className="text-2xl font-bold">Venue Booking</h1>
            
            <div className="w-full max-w-[400px] space-y-6 bg-white p-8 rounded-lg shadow-md">
                <TextField variant="standard" label="Name-Lastname" fullWidth 
                    onChange={(e) => setName(e.target.value)} />
                
                <TextField variant="standard" label="Contact-Number" fullWidth 
                    onChange={(e) => setTel(e.target.value)} />

                <FormControl variant="standard" fullWidth>
                    <InputLabel id="venue-label">Select Venue</InputLabel>
                    <Select id="venue" value={venue} onChange={(e) => setVenue(e.target.value)}>
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </FormControl>

                <DateReserve onDateChange={(value: Dayjs|null) => setDate(value)} />

                <Button variant="contained" name="Book Venue" fullWidth onClick={makeBooking}>
                    Book Venue
                </Button>
            </div>

            <BookingList />
        </main>
    );
}