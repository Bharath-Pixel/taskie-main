import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        // Send the form data to your server or backend database
        console.log('name: ', name);
        console.log('email: ', email);
        console.log('password: ', password);
        console.log('age: ', age);
    }

    return (
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
            />
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TextInput
                value={age}
                onChangeText={setAge}
                placeholder="Age"
            />
            <Button onPress={handleSubmit} title="Submit" />
        </View>
    );
}

export default RegisterPage;
