// import React from 'react';

const UnderConstruction: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 min-h-[37.5rem] py-10 text-center items-center bg-gray-100">
            <img src="\Under Construction.png" alt="Under Construction" className="w-1/2 h-auto object-contain mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">Under Construction</h1>
            <p className="text-lg text-gray-600">
                We are currently working on this page. Please check back later!
            </p>
        </div>
    );
};

export default UnderConstruction;
