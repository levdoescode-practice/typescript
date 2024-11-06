import { createContext, useEffect, useState } from "react";
import { UnionOmit } from "../utils/types";
import { EVENT_COLORS } from "./useEvents";

export type Event = {
    id: string;
    name: string;
    // color: "red" | "blue" | "green";
    color: (typeof EVENT_COLORS)[number];
    date: Date;
} & ({ allDay: false; startTime: string; endTime: string } | { allDay: true; startTime?: never; endTime?: never });

type EventsContext = {
    events: Event[];
    addEvent: (event: UnionOmit<Event, "id">) => void;
    removeEvent: (eventId: string) => void;
    updateEvent: (id: string, event: UnionOmit<Event, "id">) => void;
    deleteEvent: (id: string) => void;
};

export const Context = createContext<EventsContext | null>(null);

type EventsProviderProps = {
    children: React.ReactNode;
};

export function EventsProvider({ children }: EventsProviderProps) {
    const [events, setEvents] = useLocalStorage("EVENTS", []);

    function addEvent(eventDetails: UnionOmit<Event, "id">) {
        setEvents((e) => [...e, { ...eventDetails, id: crypto.randomUUID() }]);
    }

    function updateEvent(id: string, eventDetails: UnionOmit<Event, "id">) {
        setEvents((e) => {
            return e.map((event) => (event.id === id ? { id, ...eventDetails } : event));
        });
    }

    function removeEvent(eventId: string) {
        setEvents((e) => e.filter((event) => event.id !== eventId));
    }

    function deleteEvent(id: string) {
        setEvents((e) => e.filter((event) => event.id !== id));
    }

    return (
        <Context.Provider value={{ events, addEvent, removeEvent, updateEvent, deleteEvent }}>
            {children}
        </Context.Provider>
    );
}

//function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>];

function useLocalStorage(key: string, initialValue: Event[]) {
    const [eventArray, setEventArray] = useState<Event[]>(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue === null) {
            return initialValue;
        }
        const parsed = JSON.parse(storedValue) as Event[];
        console.log(parsed);
        return parsed.map((event) => {
            if (event.date instanceof Date) {
                return event;
            }
            return { ...event, date: new Date(event.date) };
        });
        // (JSON.parse(storedValue) as Event[]).map((event) => {
        //     if (event.date instanceof Date) {
        //         return event;
        //     }
        //     return { ...event, date: new Date(event.date) };
        // });
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(eventArray));
    }, [key, eventArray]);

    return [eventArray, setEventArray] as const;
}
