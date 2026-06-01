import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageUtility {
  static async set(key, value) {
    try {
      const dataString = typeof value === 'object' ? JSON.stringify(value) : value;
      await AsyncStorage.setItem(key, dataString);
    } catch (err) {
      console.log("Storage write error", err);
    }
  }

  static async get(key) {
    try {
      const data = await AsyncStorage.getItem(key);
      if (!data) return null;
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    } catch (err) {
      console.log("Storage read error", err);
      return null;
    }
  }

  static async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log("Storage clear error", err);
    }
  }
}

export class SecureStorageUtility {
  static async saveToken(token) {
    await StorageUtility.set('secure_access_token', token);
  }

  static async getToken() {
    return await StorageUtility.get('secure_access_token');
  }

  static async removeToken() {
    try {
      await AsyncStorage.removeItem('secure_access_token');
    } catch (err) {
      console.log("Token removal error", err);
    }
  }
}
