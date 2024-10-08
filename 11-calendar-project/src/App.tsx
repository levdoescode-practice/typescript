import { Calendar } from "./components/Calendar";
import { EventsProvider } from "./context/Events";
import "./styles.css";

export default function App() {
    return (
        <div>
            <EventsProvider>
                <Calendar />
            </EventsProvider>
        </div>
    );
}
