'use client'
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

// 1. เพิ่มการนิยาม Interface สำหรับ Props
interface DateReserveProps {
    onDateChange: (value: Dayjs | null) => void;
}

// 2. รับ Props เข้ามาใน Component
export default function DateReserve({ onDateChange }: DateReserveProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
                label="Select Date"
                className="w-full"
                // 3. เมื่อวันที่เปลี่ยน ให้เรียกฟังก์ชันที่ส่งมาจากตัวแม่ (BookingPage)
                onChange={(newValue) => onDateChange(newValue)}
            />
        </LocalizationProvider>
    );
}