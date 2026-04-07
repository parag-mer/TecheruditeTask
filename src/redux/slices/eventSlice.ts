// src/redux/slices/eventSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEventsApi } from '../../api';
import { Event, EventsResponse } from '../../utils/types';
import { RootState } from '../store';
import { getAuthData } from '../../utils/storage';

interface EventState {
  events: Event[];
  favorites: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  events: [],
  favorites: [],
  loading: false,
  error: null,
};

// async thunk
export const fetchEvents = createAsyncThunk<
  EventsResponse,
  void,
  { rejectValue: string }
>('events/fetchEvents', async (_, { rejectWithValue }) => {
  try {
    const { token } = await getAuthData();

    if (!token) {
      return rejectWithValue('Token not found');
    }
    const data = await getEventsApi(token);

    if (!data?.data?.events) {
      return rejectWithValue('Invalid events response');
    }

    return data;
  } catch (error: any) {
    return rejectWithValue('Failed to fetch events');
  }
});

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const event = action.payload;

      const exists = state.favorites.find(
        e => e.event_date_id === event.event_date_id,
      );

      if (exists) {
        state.favorites = state.favorites.filter(
          e => e.event_date_id !== event.event_date_id,
        );
      } else {
        state.favorites.push(event);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.data.events;
      })
      .addCase(fetchEvents.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = eventSlice.actions;
export default eventSlice.reducer;
