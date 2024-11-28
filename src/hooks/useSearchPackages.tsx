import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { fetchSearch } from '../api/images-api';

export const useSearchPackages = () => {
    return useMutation({
        mutationFn: fetchSearch,
        onSuccess: (data) => {
            if (data?.message) {
                toast.success(data.message);
            }
        },
        onError: (error: any) => {
            console.error('Search failed:', error);
            toast.error('An error occurred while searching. Please try again.');
        },
    });
};