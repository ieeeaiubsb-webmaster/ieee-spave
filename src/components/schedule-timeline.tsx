import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  status?: {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline";
  };
  speakers?: { name: string }[];
  description?: string;
}
interface BasicTimelineProps {
  events: TimelineEvent[];
}

export function BasicTimeline({ events }: BasicTimelineProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-purple-900">SPAVe 8.0</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="bg-border absolute top-0 bottom-0 left-3 w-px" />

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="relative flex items-start gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex h-6 w-6 items-center justify-center">
                <div className="bg-purple-800 h-3 w-3 rounded-full" />
              </div>

              {/* Event content */}
              <div className="min-w-0 flex-1 pb-8 space-y-2">
                <div className="text-muted-foreground text-sm">
                  {event.title} - {event.time}
                </div>
                {event.status && (
                  <Badge
                    variant={event.status.variant}
                    className="ml-1 bg-purple-200 text-black"
                  >
                    <div
                      className={
                        event.status.label === "Completed"
                          ? "mr-1 h-2 w-2 rounded-full bg-green-500"
                          : "mr-1 h-2 w-2 rounded-full bg-purple-500"
                      }
                    />
                    {event.status.label}
                  </Badge>
                )}
                {event.description && (
                  <div className="text-foreground mt-1 text-sm">
                    {event.description}
                  </div>
                )}
                {event.speakers && (
                  <div className="mt-2 flex flex-wrap gap-2 text-sm">
                    {event.speakers.map((speaker, index) => (
                      <p key={index} className="text-purple-800">
                        {speaker.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Schedule_Timeline() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toBeAnnouncedEvents: TimelineEvent[] = [
    {
      id: "1",
      title: "Check-in ",
      time: "8:00 AM",
      status: {
        label: "To be announced",
        variant: "outline",
      },
      description: "Details will be shared soon.",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const basicEvents: TimelineEvent[] = [
    {
      id: "1",
      title: "Breakfast",
      time: "09:00",
      status: {
        label: "Completed",
        variant: "default",
      },
      description: "Please collect it from the booth with your QR ticket",
    },
    {
      id: "2",
      title: "Keynote Speech",
      time: "10:00",
      status: {
        label: "In progress",
        variant: "default",
      },
      speakers: [{ name: "Dr. John Doe" }],
      description: "Topic: Machine Learning in Modern Applications.",
    },
    {
      id: "3",
      title: "Lunch",
      // status: {
      //   label: "In progess",
      //   variant: "default",
      // },
      description: "Please collect it from the canteen with your QR ticket",
      time: "12:30",
    },
    {
      id: "4",
      title: "Dinner",

      time: "7:00",
    },
  ];

  return (
    <div className="flex min-h-full flex-col bg-white pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
        <div className="mt-12">
          <div className="mx-auto max-w-4xl space-y-12 p-6">
            {/* <BasicTimeline events={basicEvents} /> */}
            <BasicTimeline events={toBeAnnouncedEvents} />
          </div>
        </div>
      </main>
    </div>
  );
}
