export class Todo {
    id :number;
    title :string;
    dateFrom :Date;
    dateTo :Date;
    progress :number;
    timeTaken :number;  //time already taken for Todo in minutes
    isMileStone :boolean;
    isCompleted :boolean;
    apResponsible :string;
    apWorker :string;       //Mitarbeiter neben dem Verantwortlichen
    timeEstimated :number;  //in Minuten
    priority :number;
    chargeable :boolean;
    priceIntern :number;
    priceExtern :number;
    
  }