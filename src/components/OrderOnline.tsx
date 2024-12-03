import React, { useState } from 'react';
import { Button } from './ui/Button';

interface OrderItem {
    name: string;
    price: number;
}

const menuItems: OrderItem[] = [
    { name: 'Falafel Wrap', price: 8 },
    { name: 'Hummus Plate', price: 7 },
    { name: 'Greek Salad', price: 6 },
    // Add more items as needed
];

export function OrderOnline() {
    const [selectedItems, setSelectedItems] = useState<{ item: OrderItem; quantity: number }[]>([]);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; address?: string; items?: string }>({});

    const handleItemChange = (item: OrderItem, quantity: number) => {
        if (quantity <= 0) {
            setSelectedItems(prevItems => prevItems.filter(i => i.item !== item));
        } else {
            setSelectedItems(prevItems => {
                const itemExists = prevItems.find(i => i.item === item);
                if (itemExists) {
                    return prevItems.map(i => (i.item === item ? { ...i, quantity } : i));
                }
                return [...prevItems, { item, quantity }];
            });
        }
    };

    const validate = () => {
        const newErrors: { name?: string; email?: string; phone?: string; address?: string; items?: string } = {};
        if (!customerName) newErrors.name = "Name is required.";
        if (!customerEmail) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(customerEmail)) newErrors.email = "Email is invalid.";
        if (!phoneNumber) newErrors.phone = "Phone number is required.";
        else if (!/^\d{10}$/.test(phoneNumber)) newErrors.phone = "Phone number is invalid.";
        if (!address) newErrors.address = "Address is required.";
        if (selectedItems.length === 0) newErrors.items = "At least one item must be selected.";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const orderData = {
                customerName,
                customerEmail,
                phoneNumber,
                address,
                selectedItems
            };

            fetch('http://localhost:3000/send-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log('Order sent to Telegram');
                    } else {
                        console.error('Error sending order to Telegram', data.error);
                    }
                })
                .catch(error => {
                    console.error('Error sending order to Telegram', error);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    const calculateTotalPrice = () => {
        return selectedItems.reduce((total, item) => total + item.item.price * item.quantity, 0);
    };

    return (
        <div className="max-w-2xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Order Online</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        required
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        required
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Menu Items</h2>
                    {menuItems.map(item => (
                        <div key={item.name} className="mb-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="number"
                                    min="0"
                                    value={selectedItems.find(i => i.item === item)?.quantity || 0}
                                    onChange={(e) => handleItemChange(item, parseInt(e.target.value))}
                                    className="form-input rounded text-yellow-500 w-16"
                                />
                                <span className="ml-2 text-gray-700">
                                    {item.name} - ${item.price}
                                </span>
                            </label>
                        </div>
                    ))}
                    {errors.items && <p className="text-red-500 text-xs mt-1">{errors.items}</p>}
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Total Price: ${calculateTotalPrice()}</h2>
                </div>
                <Button type="submit" className="w-full py-4 text-lg">
                    Place Order
                </Button>
            </form>
        </div>
    );
}
