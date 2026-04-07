import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchEvents, toggleFavorite } from '../../redux/slices/eventSlice';
import { EventCard } from '../../components/EventCard';

export const EventsScreen = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { events, loading, error, favorites } = useSelector(
    (state: RootState) => state.events,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <>
      <SafeAreaView style={[styles.container, styles.header]}>
        <Text style={styles.headerTitle}>Hello {user?.usr_fname}!</Text>
        <Text style={styles.headerSubtitle}> Are you ready to dance?</Text>
      </SafeAreaView>
      <FlatList
        data={events}
        renderItem={({ item }) => {
          const isFav = favorites.some(
            fav => fav.event_date_id === item.event_date_id,
          );
          return (
            <EventCard
              event={item}
              onPressFav={() => dispatch(toggleFavorite(item))}
              isFav={isFav}
            />
          );
        }}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 10 }}
        keyExtractor={item => item.event_date_id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 36,
    // paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 32,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#828282s',
  },
});
