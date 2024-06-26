import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../features/menu/menuSlice';
// import commentsSlice from '../features/comments/commentsSlice'
// import followersSlice from '../features/followers/followersSlice'
// import placesSlice from '../features/places/placesSlice'
// import alertsSlice from '../features/replies/alertsSlice'
// import userSlice from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    menu: menuSlice,
    // user: userSlice,
    // places: placesSlice,
    // comments: commentsSlice,
    // alerts: alertsSlice,
    // followers: followersSlice,
  },
});

export default store;
