import React, { useState } from 'react';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/base';
import { createUploadWidget } from '@cloudinary/react';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: 'da5lphikg',
            apiKey: '446745159169578'
        }
    });

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and confirm password do not match");
            return;
        }
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profilePicture', profilePicture);

        try {
            const uploadResult = await createUploadWidget(cloudinary, {
              folder: 'profile-pictures',
              resourceType: 'auto',
              multiple: false,
              maxFiles: 1,
            }).open();
      
            const profilePictureUrl = uploadResult.secure_url;      
            const signupResponse = await axios.post('http://localhost:4000/signup', {
                firstName,
                lastName,
                email,
                password,
                profilePictureUrl
            });
            alert(signupResponse.data.message);
        } catch (error) {
        
        alert(error.response.data.message);
    }
}

    return (
        <div className='container mx-auto py-8'>
            <h1 className='text-3xl text-center font-bold mb-4'>Signup</h1>
            <form onSubmit={handleSignup} className='max-w-md mx-auto'>
                <div className='mb-4'>
                    <label htmlFor="profilePicture" className='block text-sm font-medium text-gray-700'>Profile Picture</label>
                    <input type="file" id="profilePicture" onChange={(e) => setProfilePicture(e.target.files[0])} accept="image/*" className='mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="firstName" className='block text-sm font-medium text-gray-700'>First Name</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="lastName" className='block text-sm font-medium text-gray-700'>Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className='mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                    <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                    <input type="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                </div>
                <button type="submit" className='w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'>Sign Up</button>
            </form>
        </div>
    )    
}

export default Signup