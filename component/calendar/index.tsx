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
      // The list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key has to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={useItem}
      renderItem={renderItem}
      // Callback that gets called on day press
      onDayPress={(day) => {
        console.log("day pressed");
      }}
      // Callback that gets called when day changes while scrolling agenda list
      onDayChange={(day) => {
        console.log("day changed");
      }}
      // Initially selected day
      selected={"2023-10-20"}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
         minDate={"2023-10-01"}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      //    maxDate={"2012-05-30"}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
      // Hide knob button. Default = false
      hideKnob={false}
      // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
      showClosingKnob={true}
      // By default, agenda dates are marked if they have at least one item, but you can override this if needed
      /*markedDates={{
        "2012-05-16": { selected: true, marked: true },
        "2012-05-17": { marked: true },
        "2012-05-18": { disabled: true },
      }}*/
      // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
      disabledByDefault={false}
      // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
      onRefresh={() => console.log("refreshing...")}
      // Set this true while waiting for new data from a refresh
      refreshing={false}
      // Agenda theme
      theme={{
        agendaDayTextColor: "grey",
        agendaDayNumColor: "black",
        agendaTodayColor: "red",
        agendaKnobColor: "#00ffb0",
        selectedDayBackgroundColor: "#00ffb0", // calendar sel date
    }}
      // Agenda container style
      style={{}}
    />
  );
}
