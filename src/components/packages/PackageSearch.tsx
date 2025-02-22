import { useEffect, useRef, useState } from 'react'
import { MapPin, Search, Users, Minus, Plus, CalendarArrowUp, CalendarArrowDown, Loader } from 'lucide-react'
import PromotionalBanners from './PromotionalBanners'
import { DateRange } from 'react-date-range';
import Modal from '../models/model';
import { fetchLocations } from '../../api/images-api';
import { QUERY_KEYS } from '../../utils/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useSearchPackages } from '../../hooks/useSearchPackages';
import SearchCard from './SearchCard';
import { Link } from 'react-router-dom';

export default function PackageSearch() {
    const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
    const [isGuestOpen, setIsGuestOpen] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [openModal, setOpenModal] = useState(false);

    const { data: searchResults, mutate, isPending, } = useSearchPackages();


    const guestDropdownRef = useRef<HTMLDivElement>(null)
    const dateRangeRef = useRef<HTMLDivElement>(null);

    const toggleGuestDropdown = () => setIsGuestOpen(!isGuestOpen)

    const incrementCount = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        setter(prev => prev + 1)
    }

    const decrementCount = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        setter(prev => (prev > 0 ? prev - 1 : 0))
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target as Node)) {
                setIsGuestOpen(false)
            }
            if (dateRangeRef.current && !dateRangeRef.current.contains(event.target as Node)) {
                setIsDateRangeOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])


    const handleSearchClick = async () => {
        const username = localStorage.getItem('username');
        const phoneNumber = localStorage.getItem('phone_number');
        const email = localStorage.getItem('email')

        if (!username || !phoneNumber || !email) {
            setOpenModal(true);
            return;
        }

        const locationSelect = document.querySelector<HTMLSelectElement>('select');
        const location = locationSelect?.value;

        if (!location) {
            toast.error('Please select a location');
            return;
        }

        const payload = {
            location,
            check_in: state[0].startDate.toISOString().split('T')[0],
            check_out: state[0].endDate.toISOString().split('T')[0],
            username,
            phone_number: phoneNumber,
            adults,
            children,
            rooms,
            email,
        };
        mutate(payload)
    };



    const { data, isLoading, isError } = useQuery({
        queryKey: QUERY_KEYS.LOCATIONS,
        queryFn: fetchLocations,
    });

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;
    if (isError) return <div className="text-center mt-10 text-red-500">Please Refresh The Page</div>;

    return (
        <section className="relative w-full overflow-hidden -mt-[7rem] z-10">
            <div className="relative mx-auto max-w-6xl px-4 pb-20">
                <nav className="mt-8 flex justify-center space-x-6 text-sm md:text-lg text-white/90">
                    {['Packages', 'Tickets', 'Rental', 'Accommodation'].map((item) => (
                        <Link
                            to={`/${item.toLowerCase()}`}
                            key={item}
                            className="hover:text-white"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="my-8">
                    <div className="mx-auto max-w-4xl rounded-none md:rounded-full bg-white p-2 shadow-lg">
                        <div className="flex flex-col items-center gap-2 sm:flex-row">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 px-4">
                                    <MapPin className="h-4 w-4 text-gray-400" />
                                    <select
                                        className="w-full bg-transparent cursor-pointer py-2 outline-none placeholder:text-gray-400 text-sm sm:text-base"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Where are you going?
                                        </option>
                                        {data && data.length > 0 ? (
                                            data.map((location: { id: number; name: string }) => (
                                                <option key={location.id} value={location.name}>
                                                    {location.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No locations available</option>
                                        )}

                                    </select>
                                </div>
                            </div>
                            <div className='relative' ref={dateRangeRef}>
                                <button
                                    onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
                                    className='w-full flex items-center gap-2 py-2 pl-4 pr-2 bg-transparent outline-none'
                                >
                                    <CalendarArrowUp className='h-4 w-4' />
                                    <span>{state[0]?.startDate?.toLocaleDateString() || 'Start Date'}</span> -
                                    <CalendarArrowDown className='h-4 w-4' />
                                    <span>{state[0]?.endDate?.toLocaleDateString() || 'End Date'}</span>
                                </button>
                                {isDateRangeOpen && (
                                    <div className='absolute left-0 mt-2 z-10'>
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item: any) => setState([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={state}
                                            minDate={new Date()}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-1 items-center gap-2">
                                <div className="relative w-full" ref={guestDropdownRef}>
                                    <button
                                        onClick={toggleGuestDropdown}
                                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-gray-400"
                                    >
                                        <Users className="h-4 w-4" />
                                        <span>{adults + children} guest{adults + children !== 1 ? 's' : ''}, {rooms} room{rooms !== 1 ? 's' : ''}</span>
                                    </button>
                                    {isGuestOpen && (
                                        <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white p-4 shadow-lg z-10">
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span>Adults</span>
                                                    <div className="flex items-center gap-2">
                                                        <button onClick={() => decrementCount(setAdults)} className="rounded-full bg-gray-200 p-1">
                                                            <Minus className="h-4 w-4" />
                                                        </button>
                                                        <span>{adults}</span>
                                                        <button onClick={() => incrementCount(setAdults)} className="rounded-full bg-gray-200 p-1">
                                                            <Plus className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span>Children</span>
                                                    <div className="flex items-center gap-2">
                                                        <button onClick={() => decrementCount(setChildren)} className="rounded-full bg-gray-200 p-1">
                                                            <Minus className="h-4 w-4" />
                                                        </button>
                                                        <span>{children}</span>
                                                        <button onClick={() => incrementCount(setChildren)} className="rounded-full bg-gray-200 p-1">
                                                            <Plus className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span>Rooms</span>
                                                    <div className="flex items-center gap-2">
                                                        <button onClick={() => decrementCount(setRooms)} className="rounded-full bg-gray-200 p-1">
                                                            <Minus className="h-4 w-4" />
                                                        </button>
                                                        <span>{rooms}</span>
                                                        <button onClick={() => incrementCount(setRooms)} className="rounded-full bg-gray-200 p-1">
                                                            <Plus className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={handleSearchClick}
                                className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-white hover:bg-blue-700">

                                {isPending ? <Loader /> : <> <Search className="mr-2 h-4 w-4" /> Search </>}
                            </button>
                        </div>
                    </div>
                </div>
                <Modal open={openModal} setOpen={setOpenModal} />
                <PromotionalBanners />
                {
                    searchResults && (
                        <div>
                            <h2 className='text-center py-10 font-medium text-2xl'>Search Results</h2>
                            <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {searchResults?.data?.map((item: any, index: number) => (
                                    <SearchCard key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    )
}
