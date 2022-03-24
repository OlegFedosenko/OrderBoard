import 'react-native-gesture-handler/jestSetup';
jest.useFakeTimers();
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
export const mockFormDataAppend = jest.fn();
export const mockFormData = jest.fn().mockImplementation(() => ({ append: mockFormDataAppend }));
jest.mock('@react-native-google-signin/google-signin', () => {
  return { GoogleSigninButton: () => null, GoogleSignin: { configure: () => null } };
});
