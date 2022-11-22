import { Text, View } from "react-native";
import Favorites from "./favorites";

export default function Account() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
        <Favorites />
    </View>
    );
}
