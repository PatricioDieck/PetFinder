# Pet Finder App

A React Native mobile application built with Expo that helps users find and save their favorite animals using the Purina Petfinder API.

<div style="display: flex; flex-direction: row; gap: 10px;">
    <img src="assets/images/Screenshot 2025-03-07 at 1.44.29 PM.png" alt="Screenshot 1" style="width: 200px;">
    <img src="assets/images/Screenshot 2025-03-07 at 1.44.43 PM.png" alt="Screenshot 2" style="width: 200px;">
    <img src="assets/images/Screenshot 2025-03-07 at 1.45.11 PM.png" alt="Screenshot 3" style="width: 200px;">
</div>

## Tech Stack

- **Framework**: React Native with Expo
- **State Management**: Zustand for global state
- **Data Fetching**: TanStack Query (React Query) with pagination
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Storage**: AsyncStorage for persisting favorites
- **Navigation**: Expo Router

## Features

- ✅ Browse adoptable animals with infinite scrolling
- ✅ View detailed information about each animal
- ✅ Save favorite animals to revisit later
- ✅ Clean, responsive UI built with NativeWind

## Getting Started

### Prerequisites

- Node.js (v14.0 or newer)
- npm or yarn
- Expo Go app on your iOS/Android device or simulators/emulators

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
# or
yarn install

# Start the development server
npx expo start
```

Scan the QR code with Expo Go or press 'i' for iOS simulator or 'a' for Android emulator.

## Implementation Details

### API Integration

The app integrates with the Petfinder API using OAuth 2.0 for authorization. Access tokens are securely stored and managed for API requests.

### Data Management

- **React Query** handles API requests with caching and pagination
- **Zustand** provides a simple, persistent store for favorites
- Infinite scrolling optimizes data loading with prefetching

### Architecture

The app follows a component-based architecture with:
- Separate tabs for browsing animals and viewing favorites
- Modal-based details view for selected animals
- Shared components for consistent UI

## Trade-offs and Future Improvements

- Could add filtering by animal type and other attributes
- Search functionality would enhance user experience
- Offline support could be improved

## Requirements Addressed

1. ✅ OAuth bearer token authorization implemented for Petfinder API
2. ✅ App lists all available animals in an infinite scroll list
3. ✅ Loading states and prefetching for smooth UX
4. ✅ Detailed view for each animal with adoption link
5. ✅ Global state management with Zustand for favorites
6. ✅ NativeWind for styling the entire application