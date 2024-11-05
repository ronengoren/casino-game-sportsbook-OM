import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LoginModal from './LoginModal';

const OnboardingModal = ({visible, onClose, onLogin,onRegister}) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currency, setCurrency] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiration, setCreditCardExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoginModalVisible, setLoginModalVisible] = useState(false); // State to control LoginModal visibility

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

  const handleLogin = () => {
    // onClose()

    onLogin()
  }
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          
          <Text style={styles.title}>
            {step === 1 && 'Create an account'}
            {step === 2 && 'Additional information'}
            {step === 3 && 'Payment information'}
          </Text>
          
          {step === 1 && (
            <View>
              <TouchableOpacity onPress={() => handleLogin()}>
              <Text style={styles.loginText}>Already a member? Log in here</Text>
            </TouchableOpacity>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First name"
              />
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last name"
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email address"
              />
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
              />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
              />
            </View>
          )}
          
          {step === 2 && (
            <View>
              <Picker
                selectedValue={currency}
                style={styles.picker}
                onValueChange={setCurrency}
              >
                <Picker.Item label="Select currency" value="" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="GBP" value="GBP" />
              </Picker>
              <TextInput
                style={styles.input}
                value={mobileNumber}
                onChangeText={setMobileNumber}
                placeholder="Mobile number"
              />
              <TextInput
                style={styles.input}
                value={birthday}
                onChangeText={setBirthday}
                placeholder="Birthday"
              />
              <Picker
                selectedValue={country}
                style={styles.picker}
                onValueChange={setCountry}
              >
                <Picker.Item label="Select country" value="" />
                <Picker.Item label="USA" value="USA" />
                <Picker.Item label="Canada" value="Canada" />
                <Picker.Item label="UK" value="UK" />
              </Picker>
              <TextInput
                style={styles.input}
                value={postalCode}
                onChangeText={setPostalCode}
                placeholder="Postal code"
              />
              <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="City"
              />
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
              />
            </View>
          )}
          
          {step === 3 && (
            <View>
              <Picker
                selectedValue={paymentOption}
                style={styles.picker}
                onValueChange={setPaymentOption}
              >
                <Picker.Item label="Select payment option" value="" />
                <Picker.Item label="Credit card" value="credit-card" />
                <Picker.Item label="PayPal" value="paypal" />
              </Picker>
              <TextInput
                style={styles.input}
                value={creditCardNumber}
                onChangeText={setCreditCardNumber}
                placeholder="Credit card number"
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                value={creditCardExpiration}
                onChangeText={setCreditCardExpiration}
                placeholder="Credit card expiration"
              />
              <TextInput
                style={styles.input}
                value={cvv}
                onChangeText={setCvv}
                placeholder="CVV"
                secureTextEntry
              />
            </View>
          )}

          <View style={styles.buttonContainer}>
            {step > 1 && (
              <TouchableOpacity onPress={handlePrevStep}>
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            )}
            {step < 3 && (
              <TouchableOpacity onPress={handleNextStep}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
            {step === 3 && (
              <TouchableOpacity onPress={() => onRegister()}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '50%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007aff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    height: 40,
    marginBottom: 20,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#007aff',
  },
  loginText: {
    color: '#007aff',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default OnboardingModal;
