import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Agenda } from "react-native-calendars";
import { RandomSneakersJSON } from "../../types";
import { ShoeCard } from "../shoeCard";


export default function Calendar() {
    const [useItem, setItems] = useState<{[key: string]: RandomSneakersJSON[]}>({})
    useEffect(() => {
        const data = require("../../random-data.json") as RandomSneakersJSON[];
        const dataReduced = data.reduce((acc, currentItem) => {
          const {releaseDate, ...item} = currentItem
          acc[releaseDate] = [item]
          return acc
        },{});
        setItems(dataReduced)
      },[]);

    const renderItem = (item) => {
        return(
            <ShoeCard {...item}/>
        )
    }
  return (
    <Agenda
      
      items={useItem}
      renderItem={renderItem}
      onDayPress={(day) => {
        console.log("day pressed");
      }}
      onDayChange={(day) => {
        console.log("day changed");
      }}
      selected={"2023-10-20"}
      minDate={"2023-10-01"}
      pastScrollRange={50}
      futureScrollRange={50}
      hideKnob={false}
      showClosingKnob={true}
      disabledByDefault={false}
      onRefresh={() => console.log("refreshing...")}
      refreshing={false}
      theme={{
        agendaDayTextColor: "grey",
        agendaDayNumColor: "black",
        agendaTodayColor: "red",
        agendaKnobColor: "#00ffb0",
        selectedDayBackgroundColor: "#00ffb0",
    }}
      style={{}}
    />
  );
}
