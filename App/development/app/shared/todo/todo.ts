export class Todo {
  id: string;
  user_id: string;
  tasklist_id?: any;
  responsible_id: string;
  order: number;
  name: string;
  description?: any;
  duration?: any;
  priority: number;
  progress: number;
  due_date: string;
  planned: boolean;
  planned_at: string;
  completed: boolean;
  completed_at: string;
  created_at: string;
  updated_at: string;
  start_date: string;
  estimate: string;
  milestone: boolean;
  milestone_description: string;
  number: string;
  project_id: string;
  phase_id: string;
  deliverables?: any;
  team_text?: any;
  planned_costs: string;
  actual_costs: string;
  future_costs: string;
  cost_type?: any;
  type_id: number;
  predecessor_id?: any;
  rate: number;
  rate_internal: number;
  billable: boolean;
  userstory_id?: any;
  inserted_at?: any;
  state: string;
  has_predecessor: boolean;
  user: string;
  project: string;
  trackings?: string[];
  trackingsFull?: Tracking[];
  comments?: Comment[];
}

export class Tracking {
  id: string;
  user_id: string;
  task_id: string;
  started_at: string;
  finished: boolean;
  finished_at: string;
  created_at: string;
  updated_at: string;
  description: string;
  task: string;
  user: string;
}

export class Comment {
  id: string;
  project_id?: any;
  task_id: string;
  user_id: string;
  message: string;
  date: string;
  created_at: string;
  updated_at: string;
  user: string;
  project?: any;
  task: string;
}