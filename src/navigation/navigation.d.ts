type RootStackParamList = {
  LoginPage: undefined;
  HomePage: undefined;
  DoctorListPage: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
