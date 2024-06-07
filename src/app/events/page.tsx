"use client";

import UpcomingEvents from "@/components/Events/Upcomming";
import { isTeaser } from "@/libs/utils";

export default function Events() {
  return (
    <> { isTeaser ?
      <main className="min-h-screen w-full flex items-center justify-center text-7xl font-bold bg-blue">
        Events
      </main> :
      <main className="max-w-screen min-h-screen flex justify-center items-center graph-paper">
        <UpcomingEvents />
      </main>
    }
    </>
  );
}
