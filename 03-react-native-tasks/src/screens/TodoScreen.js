import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { StorageUtility } from '../utils/Storage';

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [taskText, setTaskText] = useState('');
  
  const sampleBase64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

  useEffect(() => {
    loadSavedTodos();
  }, []);

  const loadSavedTodos = async () => {
    const list = await StorageUtility.get('todo_list');
    if (list) setTodos(list);
  };

  const createTodoItem = async (attachImage) => {
    if (!taskText.trim()) return;

    const item = {
      id: Date.now().toString(),
      title: taskText,
      imageUri: attachImage ? sampleBase64Image : null
    };

    const targetList = [...todos, item];
    setTodos(targetList);
    await StorageUtility.set('todo_list', targetList);
    setTaskText('');
  };

  return (
    <View style={styles.window}>
      <Text style={styles.heading}>Todo Tasks Persistence</Text>
      <TextInput 
        style={styles.field} 
        placeholder="Enter item text..." 
        value={taskText}
        onChangeText={setTaskText}
      />
      
      <View style={styles.controlRow}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => createTodoItem(false)}>
          <Text style={styles.btnLabel}>Standard Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#28a745' }]} onPress={() => createTodoItem(true)}>
          <Text style={styles.btnLabel}>+ Attach Image</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={todos}
        keyExtractor={i => i.id}
        style={{ marginTop: 15 }}
        renderItem={({ item }) => (
          <View style={styles.todoRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.todoText}>{item.title}</Text>
            </View>
            {item.imageUri && (
              <Image source={{ uri: item.imageUri }} style={styles.previewThumb} />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  window: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  field: { backgroundColor: '#fff', padding: 14, borderRadius: 6, borderWidth: 1, borderColor: '#ddd' },
  controlRow: { flexDirection: 'row', gap: 10, marginTop: 10 },
  actionBtn: { flex: 1, backgroundColor: '#0066cc', padding: 12, borderRadius: 6, alignItems: 'center' },
  btnLabel: { color: '#fff', fontWeight: 'bold' },
  todoRow: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 6, marginBottom: 10, alignItems: 'center', borderWidth: 1, borderColor: '#eee' },
  todoText: { fontSize: 16, color: '#333' },
  previewThumb: { width: 45, height: 45, borderRadius: 4, marginLeft: 10, backgroundColor: '#ccc' }
});
