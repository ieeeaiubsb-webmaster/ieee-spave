import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchForm = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-md mx-auto p-0.5 bg-gradient-to-r from-[#a602c6] to-[#3b0766] rounded-2xl">
      <div className="bg-white rounded-2xl">
        <div className="flex items-center h-14 p-1">
          <Input
            type="text"
            placeholder="Search ambassadors..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 border-none rounded-l-2xl focus:ring-0 focus-visible:ring-0 h-10"
          />
          <Button className="bg-gradient-to-r from-[#a602c6] to-[#3b0766] hover:from-[#a602c6]/80 hover:to-[#3b0766]/80 text-white rounded-r-2xl rounded-l-none h-14 px-12 py-3 -mr-2">
            <Search size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;