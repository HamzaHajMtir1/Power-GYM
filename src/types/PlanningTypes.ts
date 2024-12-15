export interface Session {
    className: string;
    time: string;
    instructor: string;
    capacity: number;
    categoryColor: string;
  }
  
  export interface DaySchedule {
    [key: string]: Session[];
  }
  
  export interface Schedule {
    Monday: Session[];
    Tuesday: Session[];
    Wednesday: Session[];
    Thursday: Session[];
    Friday: Session[];
    Saturday: Session[];
    Sunday: Session[];
  }
  
  export interface Category {
    name: string;
    description: string;
    color: string;
  }
  
  export interface Instructor {
    name: string;
    specialization: string;
    image: string;
  }