import { Text, View } from "react-native";
import { BestOfTheWeek } from "../bestOfTheWeek";

export default function Home() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BestOfTheWeek />
    </View>
    );
}
