import { createContext, useState } from "react";
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
    const [events, setEvents] = useState<Event[]>([]);

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

    return <Context.Provider value={{ events, addEvent, removeEvent, updateEvent, deleteEvent }}>{children}</Context.Provider>;
}
