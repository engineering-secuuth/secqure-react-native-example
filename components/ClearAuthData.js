import * as SecureStore from 'expo-secure-store';

// const Secqure_Webview = () => {
const ClearStorage = ({ navigation, route }) => {
  console.log("Clearning webview storage")
  const { callback } = route.params;

  clearStorage();
  async function clearStorage() {
    console.log("Clearning webview storage")
    // await SecureStore.setItemAsync("Secqure_payload", JSON.stringify(payload));
    await SecureStore.deleteItemAsync("Secqure_tokens.refreshToken");
    await SecureStore.deleteItemAsync("Secqure_user.pubKey");
    await SecureStore.deleteItemAsync("Secqure_user.userId");
    navigation.goBack();
    callback();
  }
  return null;
};

export default ClearStorage;
