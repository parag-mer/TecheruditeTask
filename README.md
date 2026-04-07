# TecheruditeTask

A React Native (v0.84.1) mobile app with authentication, event listing, favourites, and profile screens.

## Tech Stack

- **React Native** 0.84.1 / **React** 19.2.3
- **TypeScript**
- **Redux Toolkit** — state management (`auth`, `events` slices)
- **React Navigation** — Stack + Bottom Tabs
- **Axios** — API calls to `https://techeruditestaging.com/projects/plie-api/public/api`
- **AsyncStorage** — token persistence
- **Vector Icons** — Feather & Octicons

## Project Structure

```
src/
├── api/            # Axios client + API calls (login, events-listing)
├── components/     # CustomTextInput, EventCard, EmptyFavourites
├── navigation/     # RootNav (Stack), BottomTabNav (Tabs)
├── redux/
│   ├── slices/     # authSlice, eventSlice
│   └── store.ts
├── screens/
│   ├── LoginScreen.tsx
│   └── BottomTabScreens/
│       ├── EventsScreen.tsx
│       ├── SearchScreen.tsx
│       ├── FavouritesScreen.tsx
│       └── ProfileScreen.tsx
└── utils/          # types, storage helpers
```

## Screens

| Screen | Description |
|---|---|
| Login | Email/password login via API |
| Events | Lists events fetched from API |
| Search | Search through events |
| Favourites | Locally toggled favourite events |
| Profile | User profile |

## Getting Started

**Prerequisites:** Node >= 22.11.0, Xcode (iOS), Android Studio (Android)

```sh
npm install
```

### iOS

```sh
bundle install          # first time only
bundle exec pod install
npm run ios
```

### Android

```sh
npm run android
```

### Start Metro only

```sh
npm start
```

## State Management

- `auth` slice — handles login, stores `user` and `token`, exposes `logout` action
- `events` slice — fetches event list, manages `favorites` via `toggleFavorite` action

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Start Metro bundler |
| `npm run ios` | Run on iOS simulator |
| `npm run android` | Run on Android emulator |
| `npm test` | Run Jest tests |
| `npm run lint` | Run ESLint |
