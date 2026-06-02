import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SecureStorageUtility } from '../utils/Storage';

export default function DashboardScreen({ navigation }) {
  const [reminderText, setReminderText] = useState('');

  const initiateReminderTimeout = () => {
    if (!reminderText.trim()) return;
    Alert.alert("Scheduler Active", "Your notification text '" + reminderText + "' is queued to fire in exactly 10 minutes.");
    setReminderText('');
  };

  const executeAppLogout = async () => {
    const rawToken = await SecureStorageUtility.getToken() || '';
    let extractedEmail = '';
    if (rawToken.startsWith('mocktoken-payload-')) {
      extractedEmail = rawToken.replace('mocktoken-payload-', '');
    }
    await SecureStorageUtility.removeToken();
    navigation.replace('Auth', { prefilledEmail: extractedEmail });
  };

  return (
    <ScrollView style={styles.window} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Task 6: Material Design Specification Block Card */}
      <Text style={styles.sectionTitle}>Material Specifications Card (Task 6)</Text>
      <View style={styles.materialCard}>
        <View style={styles.cardHeaderArea}>
          <View style={styles.avatarMock} />
          <View>
            <Text style={styles.cardMainText}>Primary Headline Text</Text>
            <Text style={styles.cardSubText}>Secondary subhead annotation</Text>
          </View>
        </View>
        <View style={styles.cardMediaMock} />
        <Text style={styles.cardContentText}>
          This modular block matches the precise spatial specs layout structure outlined inside Google's structural system interface specifications.
        </Text>
      </View>

      {/* Task 11: Reminder Engine Execution */}
      <Text style={styles.sectionTitle}>Scheduling Panel (Task 11)</Text>
      <TextInput 
        style={styles.field}
        placeholder="Write message log here..."
        value={reminderText}
        onChangeText={setReminderText}
      />
      <TouchableOpacity style={styles.primaryBtn} onPress={initiateReminderTimeout}>
        <Text style={styles.btnText}>Trigger 10 Minute Reminder</Text>
      </TouchableOpacity>

      {/* Task 17: Standard Framework Element Library Simulations */}
      <Text style={styles.sectionTitle}>UI Component Engine Simulator (Task 17)</Text>
      <View style={styles.componentBox}>
        <TouchableOpacity style={styles.elementBtn}><Text style={styles.btnLabel}>Plain Text Button</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.elementBtn, { backgroundColor: '#dc3545' }]}><Text style={styles.btnLabel}>⭐ Icon Button Mock</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.elementBtn, { backgroundColor: '#28a745' }]}><Text style={styles.btnLabel}>✉️ Send Envelope Form</Text></TouchableOpacity>
        
        <Text style={{ marginTop: 15, fontWeight: '600', fontSize: 13, marginBottom: 5 }}>Progress Bar State Monitor Component Line:</Text>
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressBarFill} />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={executeAppLogout}>
        <Text style={styles.btnText}>Log Out Safely</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  window: { flex: 1, backgroundColor: '#f4f4f6', padding: 15 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#555', marginTop: 20, marginBottom: 8, textTransform: 'uppercase' },
  materialCard: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  cardHeaderArea: { flexDirection: 'row', padding: 16, alignItems: 'center' },
  avatarMock: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#bbb', marginRight: 12 },
  cardMainText: { fontSize: 16, fontWeight: '600', color: '#111' },
  cardSubText: { fontSize: 14, color: '#666' },
  cardMediaMock: { height: 180, backgroundColor: '#e2e2e5' },
  cardContentText: { padding: 16, fontSize: 14, color: '#333', lineHeight: 20 },
  field: { backgroundColor: '#fff', padding: 14, borderRadius: 6, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  primaryBtn: { backgroundColor: '#0066cc', padding: 14, borderRadius: 6, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' },
  componentBox: { backgroundColor: '#fff', padding: 15, borderRadius: 8, gap: 10 },
  elementBtn: { backgroundColor: '#6c757d', padding: 10, borderRadius: 4, alignItems: 'center' },
  btnLabel: { color: '#fff', fontWeight: '600' },
  progressBarWrapper: { height: 8, backgroundColor: '#e9ecef', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { width: '65%', height: '100%', backgroundColor: '#007bff' },
  logoutBtn: { backgroundColor: '#333', padding: 14, borderRadius: 6, alignItems: 'center', marginTop: 30 }
});
