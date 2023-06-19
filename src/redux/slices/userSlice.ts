import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IInitialState {
  email: string;
  id: string;
  profile: {
    fullName: string;
    username: string;
    occupation: string;
    dob: string;
    phoneNumber: string;
    country: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  isLoggedIn: boolean;
}

const initialState: IInitialState = {
  profile: {
    fullName: '',
    username: '',
    occupation: '',
    dob: '',
    phoneNumber: '',
    country: '',
  },
  email: '',
  id: '',
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUserAccessToken: (state, action: PayloadAction<string>) => {
      state.tokens.accessToken = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setUserProfile: (
      state,
      action: PayloadAction<{
        fullName: string;
        username: string;
        occupation: string;
        dob: string;
        phoneNumber: string;
        country: string;
      }>,
    ) => {
      state.profile = action.payload;
    },
    setUserCountry: (state, action: PayloadAction<string>) => {
      state.profile.country = action.payload;
    },
  },
});

export const {
  updateIsUserLoggedIn,
  setUserAccessToken,
  setUserEmail,
  setUserProfile,
  setUserId,
  setUserCountry,
} = userSlice.actions;

export default userSlice.reducer;
