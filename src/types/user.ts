export type SignUpInputType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type UpdateUserInputType = {
  username?: string;
  fullName?: string;
  phoneNumber?: string;
  occupation?: string;
  dob?: string;
  country?: string;
};
