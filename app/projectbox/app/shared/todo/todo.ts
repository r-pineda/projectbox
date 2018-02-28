export class Todo {
  id: string;
  user_id: string;
  tasklist_id?: any;
  list: any = null;
  responsible_id: string;
  responsible: any = null;
  order: number = 999;
  name: string;
  description?: any;
  duration?: any = 0;
  priority: number = 2;
  progress: number = 0;
  due_date: Date = new Date;
  due_date_string: string;
  planned: boolean = false;
  planned_at: Date = new Date();
  completed: boolean = false;
  completed_at: Date = new Date();
  created_at: Date;
  updated_at: Date;
  start_date: Date = new Date();
  estimate: number = 0;
  milestone: boolean = false;
  milestone_description?: string;
  number: string;
  project_id: string;
  phase_id: string;
  phase: string = null;
  deliverables?: any;
  team_text?: any;
  planned_costs: number = 0;
  actual_costs: number = 0;
  future_costs: number = 0;
  cost_type?: any = null;
  type_id: number;
  predecessor_id?: any;
  predecessor: any = null;
  rate: number = null;
  rate_internal: number = null;
  billable: boolean = false;
  userstory_id?: any;
  userstory: any = null; 
  inserted_at?: any;
  state: string = null;
  has_predecessor: boolean = false;
  user: string = null;
  project: string;
  trackings?: string[];
  trackingsFull?: Tracking[];
  comments?: Comment[];
  customer: any = null;
  parent: any = null;
  color: string;
}

export class Tracking {
  id: string;
  user_id: string;
  task_id: string;
  started_at: Date;
  finished: boolean;
  finished_at: Date;
  created_at: Date;
  updated_at: Date;
  description: string;
  task: string;
  user: string;
  trackedSeconds :number = 0;
  timerString :string;
}

export class Comment {
  id: string;
  project_id?: any;
  task_id: string;
  user_id: string;
  message: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
  user: string;
  project?: any;
  task: string;
  userImage? :string;
}