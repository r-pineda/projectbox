export interface Meeting {
    protocol :string;
    project :string;
    name :string;
    location :string;
    id :string;
    duration :Number;
    date :Date;
    attendees: string;
    agenda :AgendaPoint[];
  }

  export class AgendaPoint {
    topic;
    responsible :string;
    duration :number;
  }