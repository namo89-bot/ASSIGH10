'use client'
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
    const bookItems = useAppSelector(state => state.bookSlice.bookItems);
    const dispatch = useDispatch();

    if (bookItems.length === 0) {
        return <div className="text-xl font-semibold text-gray-500">No Venue Booking</div>;
    }

    return (
        <div className="w-full max-w-4xl space-y-4">
            {bookItems.map((item) => (
                <div key={item.venue + item.bookDate} 
                     className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow">
                    <div className="text-left space-y-1">
                        <div className="font-bold text-lg">{item.nameLastname}</div>
                        <div>Tel: {item.tel}</div>
                        <div>Venue: {item.venue}</div>
                        <div>Date: {item.bookDate}</div>
                    </div>
                    <button 
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        onClick={() => dispatch(removeBooking(item))}
                    >
                        Remove Booking
                    </button>
                </div>
            ))}
        </div>
    );
}