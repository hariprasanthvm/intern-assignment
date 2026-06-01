import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SecureStorageUtility } from '../utils/Storage';

export default function AuthScreen({ navigation, route }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (route.params?.prefilledEmail) {
      setEmail(route.params.prefilledEmail);
    }
  }, [route.params]);

  const handleAuthAction = async () => {
    if (!email || !password) {
      Alert.alert("Input Error", "Please fill in all blanks.");
      return;
    }

    if (isLogin) {
      const fakeToken = "mocktoken-payload-" + email;
      await SecureStorageUtility.saveToken(fakeToken);
      navigation.replace('HomeTabs');
    } else {
      Alert.alert(
        "Registration Successful", 
        "Account built. Transferring to login.",
        [{ text: "OK", onPress: () => navigation.navigate('Auth', { prefilledEmail: email }) }]
      );
      setIsLogin(true);
    }
  };

  return (
    <View style={styles.window}>
      <Text style={styles.heading}>{isLogin ? "Sign In" : "Sign Up"}</Text>
      
      <TextInput 
        style={styles.field} 
        placeholder="Email Address" 
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.field} 
        placeholder="Password" 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleAuthAction}>
        <Text style={styles.buttonText}>{isLogin ? "Login" : "Register"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 20 }}>
        <Text style={styles.toggleText}>
          {isLogin ? "Need an account? Sign up here" : "Have an account? Log in here"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  window: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#fafafa' },
  heading: { fontSize: 26, fontWeight: 'bold', marginBottom: 25, color: '#222', textAlign: 'center' },
  field: { backgroundColor: '#fff', padding: 15, borderRadius: 6, marginBottom: 15, borderWidth: 1, borderColor: '#e0e0e0' },
  primaryButton: { backgroundColor: '#0066cc', padding: 16, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  toggleText: { color: '#0066cc', textAlign: 'center', fontWeight: '500' }
});
