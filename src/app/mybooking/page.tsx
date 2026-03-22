'use client'
import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
    return (
        <main className="w-full flex flex-col items-center p-10 mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Venue Bookings</h1>
            <div className="w-full flex flex-col items-center">
                <BookingList />
            </div>
        </main>
    );
}