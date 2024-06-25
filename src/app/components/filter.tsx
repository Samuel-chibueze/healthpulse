// Filter.tsx
import React, { useState } from 'react';

interface FilterProps {
    onFilterChange: (selectedFilters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleFilterChange = (filter: string) => {
        const newFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter(f => f !== filter)
            : [...selectedFilters, filter];
        setSelectedFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="relative w-10">
            <div

                onClick={() => handleFilterChange('option1')}
                className="p-2 border-2 border-gray-300 text-black hover:bg-gray-200"
            >
                Option 1
            </div>
            <div

                onClick={() => handleFilterChange('option2')}
                className="p-2 border-2 border-gray-300 text-black hover:bg-gray-200"
            >
                Option 2
            </div>
            <div

                onClick={() => handleFilterChange('option3')}
                className="p-2 border-2 border-gray-300 text-black hover:bg-gray-200"
            >
                Option 3
            </div>
        </div>
    );
};

export default Filter;
