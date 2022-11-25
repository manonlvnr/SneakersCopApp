import { ScrollView, View } from "react-native";
import FavoritesList from "./favorites";
import HeaderFav from "./headerFav";

export default function Account() {
    return (
    <ScrollView>
        <View>
            <HeaderFav/>
        </View>
        <View>
            <FavoritesList/>
        </View>
    </ScrollView>
    );
}
