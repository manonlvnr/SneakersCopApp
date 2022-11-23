import { Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { ShoeCard } from "../shoeCard";

export default function Calendar() {
    return (
        <Agenda
            // The list of items that have to be displayed in agenda. If you want to render item as empty date
            // the value of date key has to be an empty array []. If there exists no value for date key it is
            // considered that the date in question is not yet loaded
            items={{
                '2012-05-22': [],
                '2012-05-23': [],
                '2012-05-24': [],
                '2012-05-25': []
            }}
            // Callback that gets called when items for a certain month should be loaded (month became visible)
            loadItemsForMonth={month => {
                console.log('trigger items loading');
            }}
            // Callback that fires when the calendar is opened or closed
            onCalendarToggled={calendarOpened => {
                console.log(calendarOpened);
            }}
            // Callback that gets called on day press
            onDayPress={day => {
                console.log('day pressed');
            }}
            // Callback that gets called when day changes while scrolling agenda list
            onDayChange={day => {
                console.log('day changed');
            }}
            // Initially selected day
            selected={'2012-05-16'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2012-05-30'}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}

            // Hide knob button. Default = false
            hideKnob={true}
            // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
            showClosingKnob={false}
            // By default, agenda dates are marked if they have at least one item, but you can override this if needed
            markedDates={{
                '2012-05-16': {selected: true, marked: true},
                '2012-05-17': {marked: true},
                '2012-05-18': {disabled: true}
            }}
            // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
            disabledByDefault={true}
            // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
            onRefresh={() => console.log('refreshing...')}
            // Set this true while waiting for new data from a refresh
            refreshing={false}

            // Agenda theme
            theme={{
                agendaDayTextColor: 'yellow',
                agendaDayNumColor: 'green',
                agendaTodayColor: 'red',
                agendaKnobColor: 'blue'
            }}
            // Agenda container style
            style={{}}
        />    
    );
}
