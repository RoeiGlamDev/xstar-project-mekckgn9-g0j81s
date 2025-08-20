import { useEffect, useState } from 'react';

// Function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Formats number to currency
};

// Custom hook to fetch data
export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error }; // Returns fetched data, loading state, and error
};

// Function to validate email
export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // Checks if email matches regex
};

// Default export
export default { formatCurrency, useFetch, validateEmail };