export interface Todo {
    title :string;
    dateFrom :Date;
    dateTo :Date;
    progress :number;
    isMileStone :boolean;
    isCompleted :boolean;
    apResponsible :string;
    apWorker :string;
    timeEstimated :number;
    priority :number;
    chargeable :boolean;
    priceIntern :number;
    priceExtern :number;
  }