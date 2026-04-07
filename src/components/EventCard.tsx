import { Image, StyleSheet, Text, View } from 'react-native';
import { Event } from '../utils/types';
import Feather from '@react-native-vector-icons/feather';
import Octicons from '@react-native-vector-icons/octicons';

export const EventCard = ({
  event,
  onPressFav,
  isFav,
}: {
  event: Event;
  isFav: boolean;
  onPressFav: () => void;
}) => {
  return (
    <View style={styles.container}>
      {/* Added static image here as image from BE was returning 404 */}
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/unrecognizable-person-photographing-with-smart-phone-stage-performers-music-festival_637285-575.jpg?semt=ais_hybrid&w=740&q=80',
        }}
        style={styles.image}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.title}>{event?.event_name}</Text>
        <Text style={styles.date}>
          {event?.readable_from_date} - {event?.readable_to_date}
        </Text>
        <Text style={styles.price}>
          ${event?.event_price_from} - ${event?.event_price_to}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 5,
            gap: 10,
          }}
        >
          {event.keywords.map(k => (
            <View style={styles.keywordContainer} key={k}>
              <Text style={styles.keyword}>{k}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Feather name="arrow-right" size={24} />
        <Text style={styles.locationText}>
          {event?.city}, {event?.country}
        </Text>
        <View style={styles.iconContainer}>
          <Feather name="upload" size={24} color={'#1a1a1a'} />
          <Octicons
            name={isFav ? 'heart-fill' : 'heart'}
            color={isFav ? '#21d393' : '#1a1a1a'}
            size={24}
            onPress={onPressFav}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16 * 1.2,
  },
  date: {
    fontWeight: 500,
    fontSize: 12,
    color: '#34a853',
    marginTop: 5,
  },
  price: {
    fontWeight: 500,
    fontSize: 11,
    color: '#828282',
    marginTop: 5,
  },
  keywordContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#f5f7fc',
    borderRadius: 24,
  },
  keyword: {
    fontWeight: '500',
    fontSize: 12,
    color: '#181a1f',
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: 70,
  },
  middleContainer: {
    flex: 1,
    // marginRight: 10,
  },
  locationText: {
    fontSize: 11,
    fontWeight: '400',
    color: '#828282',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
});
