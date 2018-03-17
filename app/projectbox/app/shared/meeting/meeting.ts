export class Meeting {
    protocol :string;
    project :string;
    name :string;
    location :string;
    id :string;
    duration :Number;
    date :Date;
    attendees? :any;
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
    id :string;
    name :string;
    email :string;
    abbreviation :string;
  }