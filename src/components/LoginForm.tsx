// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// interface LoginFormProps {
//     onLogin: (email: string, password: string) => void;
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

//     const validate = () => {
//         const newErrors: { email?: string; password?: string } = {};
//         if (!email) newErrors.email = "Email is required.";
//         else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
//         if (!password) newErrors.password = "Password is required.";
//         else if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
//         return newErrors;
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length === 0) {
//             onLogin(email, password);
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-[#FFFAFA] shadow-md rounded-lg"> {/* Milky white background */}
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//                     required
//                 />
//                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="password" className="block text-gray-700">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//                     required
//                 />
//                 {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">Login</button>
//             <p className="mt-4 text-sm text-gray-600">
//                 Don't have an account? <Link to="/signup" className="text-green-500 hover:underline">Sign up</Link>
//             </p>
//         </form>
//     );
// };

// export default LoginForm;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
        if (!password) newErrors.password = "Password is required.";
        else if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onLogin(email, password);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-[#FFFAFA] shadow-md rounded-lg mt-8"> {/* Added top margin */}
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">Login</button>
            <p className="mt-4 text-sm text-gray-600">
                Don't have an account? <Link to="/signup" className="text-green-500 hover:underline">Sign up</Link>
            </p>
        </form>
    );
};

export default LoginForm;
