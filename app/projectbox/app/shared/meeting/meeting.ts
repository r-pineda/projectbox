export class Meeting {
    protocol :string;
    project :string;
    name :string;
    location :string;
    id :string;
    duration :Number;
    date :Date;
    attendees? :Attendee[];
    project_color? :string;
    agenda? :AgendaPoint[] = new Array<AgendaPoint>();
  }

  export class AgendaPoint {
    topic :string;
    responsible :string;
    duration :number;
    agenda :string;
    dateFormatted: string;
  }

  export class Attendee {
    full_name :string;
    eMail :string;
    abbreviation :string
  }