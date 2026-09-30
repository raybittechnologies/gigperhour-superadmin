import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { loginAdmin } from '../../utils/api';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await loginAdmin({ email, password });
            const data = response.data;
            
            if (data.success && data.data?.user?.is_admin) {
                // Store token in local storage
                localStorage.setItem('adminToken', data.data.token);
                // Optionally store user info
                localStorage.setItem('adminUser', JSON.stringify(data.data.user));
                navigate('/adminDashboard');
            } else {
                setError('Unauthorized: Admin access only.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#E66D3D] opacity-[0.05] blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500 opacity-[0.05] blur-[100px]"></div>

            <div className="max-w-[1000px] w-full flex bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden z-10 mx-4 relative border border-gray-100">
                {/* Left Section - Graphic/Branding */}
                <div className="hidden lg:flex w-1/2 bg-[#FAFAFA] p-12 flex-col justify-between border-r border-gray-100 relative overflow-hidden">
                    {/* Decorative abstract shapes */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-30">
                        <svg viewBox="0 0 400 400" className="absolute top-[-20%] right-[-20%] w-[150%] h-[150%] text-[#E66D3D]/10 transform rotate-12">
                            <path fill="currentColor" d="M42.3,-72.1C55.3,-66.6,66.6,-55.3,74.9,-42.1C83.2,-28.9,88.5,-14.4,87.6,-0.5C86.7,13.4,79.5,26.8,70.6,38.6C61.7,50.4,51.1,60.6,38.4,66.9C25.7,73.2,11,75.6,-3.2,81.1C-17.4,86.6,-31.1,95.1,-43.3,90.4C-55.5,85.7,-66.1,67.8,-74.6,50.7C-83.1,33.6,-89.4,16.8,-88.9,0.3C-88.4,-16.2,-81.1,-32.4,-70.7,-45.3C-60.3,-58.2,-46.8,-67.8,-32.9,-72.4C-19,-77,-4.7,-76.6,9.1,-74.9C22.9,-73.2,36.7,-70.1,42.3,-72.1Z" transform="translate(100 100) scale(1.1)" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="text-[28px] font-bold text-[#E66D3D] mb-2 tracking-tight">elevance.</div>
                        <div className="text-[14px] text-gray-500 font-medium tracking-wide">ADMINISTRATION PORTAL</div>
                    </div>

                    <div className="relative z-10 mt-20">
                        <h1 className="text-[36px] font-bold text-gray-900 leading-[1.1] mb-6">
                            Manage your <br/> workspace with <br/> <span className="text-[#E66D3D]">precision.</span>
                        </h1>
                        <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm">
                            Access comprehensive tools to oversee operations, manage users, and analyze platform performance in real-time.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-[13px] text-gray-500 font-medium">
                            Join 100+ administrators
                        </div>
                    </div>
                </div>

                {/* Right Section - Login Form */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                    <div className="lg:hidden text-[24px] font-bold text-[#E66D3D] mb-8 text-center tracking-tight">elevance.</div>

                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-[28px] font-bold text-gray-900 mb-2">Welcome Back</h2>
                        <p className="text-gray-500 text-[15px]">Sign in to your administrative account</p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col gap-5">
                        {error && (
                            <div className="bg-red-50 text-red-500 text-[13px] font-medium p-3 rounded-xl border border-red-100 flex items-center">
                                {error}
                            </div>
                        )}
                        
                        {/* Email Input */}
                        <div>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-2">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#E66D3D] transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E66D3D]/20 focus:border-[#E66D3D] transition-all"
                                    placeholder="admin@elevance.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[13px] font-semibold text-gray-700">Password</label>
                                <a href="#" className="text-[13px] font-medium text-[#E66D3D] hover:text-[#d35a2e] transition-colors">Forgot password?</a>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#E66D3D] transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E66D3D]/20 focus:border-[#E66D3D] transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 text-[#E66D3D] border-gray-300 rounded focus:ring-[#E66D3D] cursor-pointer"
                            />
                            <label htmlFor="remember" className="ml-2 block text-[13px] text-gray-600 cursor-pointer">
                                Keep me signed in
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 w-full bg-[#E66D3D] hover:bg-[#d35a2e] disabled:opacity-70 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-medium text-[15px] flex justify-center items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(230,109,61,0.39)] hover:shadow-[0_6px_20px_rgba(230,109,61,0.23)] hover:-translate-y-[1px]"
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                            {!loading && <ArrowRight size={18} />}
                        </button>
                    </form>
                    
                    <div className="mt-8 text-center">
                        <p className="text-[13px] text-gray-500">
                            Secure administrative access only.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
