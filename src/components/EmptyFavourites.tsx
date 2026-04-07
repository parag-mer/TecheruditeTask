// src/components/EmptyFavorites.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyFavorites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>💔</Text>
      <Text style={styles.title}>No Favorites Yet</Text>
      <Text style={styles.subtitle}>
        Tap the heart icon on events to add them here.
      </Text>
    </View>
  );
};

export default EmptyFavorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
