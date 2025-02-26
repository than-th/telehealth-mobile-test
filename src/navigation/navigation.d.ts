type RootStackParamList = {
  LoginPage: undefined;
  HomePage: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
