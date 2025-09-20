import React, { useState, useEffect, useCallback } from 'react';

function UseCallbackExample() {
    const [userName, setUserName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState({
        country: '',
        state: '',
        pinNumber: ''
    });
    const [user, setUser] = useState({ userName, mobile, address });

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        setUser(prevState => ({
            ...prevState,
            userName: userName,
            mobile: mobile,
            address: {
                ...address
            }
        }));
    }, [userName, mobile, address]);

    useEffect(() => {
        console.log(user); // Log the updated state inside useEffect
    }, [user]); // Run this effect whenever `user` changes

      // Log when onSubmitHandler changes
    useEffect(() => {
        console.log('onSubmitHandler recreated');
    }, [onSubmitHandler]);

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Enter Name'
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
                <input
                    type='text'
                    placeholder='Enter Mobile Number'
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                />
                <input
                    type='text'
                    placeholder='Enter Country Name'
                    onChange={(e) => setAddress(prev => ({ ...prev, country: e.target.value }))}
                    value={address.country}
                />
                <input
                    type='text'
                    placeholder='Enter State Name'
                    onChange={(e) => setAddress(prev => ({ ...prev, state: e.target.value }))}
                    value={address.state}
                />
                <input
                    type='text'
                    placeholder='Enter pin Name'
                    onChange={(e) => setAddress(prev => ({ ...prev, pinNumber: e.target.value }))}
                    value={address.pinNumber}
                />
                <button onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default UseCallbackExample;
