import React from 'react';

export const AboutUs: React.FC = () => {
    return (
        <div className="relative bg-[#495E57] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="max-w-lg mb-8 lg:mb-0">
                        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
                            About Us
                        </h1>
                        <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                            At Little Lemon, we pride ourselves on being a family-owned Mediterranean restaurant that serves traditional recipes with a modern twist. Our goal is to offer an authentic dining experience with a cozy atmosphere, where each dish brings a taste of the Mediterranean to your table.
                        </p>
                        <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                            Our chefs, Mario and Adrian, are dedicated to using only the freshest ingredients and time-honored techniques to create meals that are both delicious and unforgettable. Whether you're dining in or taking out, Little Lemon is your destination for a culinary journey that delights the senses.
                        </p>
                    </div>
                    <div className="hidden lg:block relative">
                        <img
                            src="/chefs-mario-and-adrian_a.jpg"
                            alt="Our Chefs"
                            className="rounded-lg shadow-xl w-[500px] h-[400px] object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6">
                            <img
                                src="/restaurant-food.jpg"
                                alt="Signature Dish"
                                className="rounded-lg shadow-xl w-[300px] h-[200px] object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
        </div>
    );
};
