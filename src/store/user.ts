import TaskCompletion, {
  TasksCompletionInterface,
} from "@/models/taskCompletion";
import Task, { TaskInterface } from "@/models/tasks";
import { create } from "zustand";

type UserStore = {
  balance: number;
  tasks: TaskInterface[] | [];
  completedTasks: TasksCompletionInterface[] | [];
  filteredTasks: (typeof Task)[];
  userId: string;
  setId: (id: string) => void;
  setBalance: (bal: number) => void;
  setTasks: (tsks: (typeof Task)[]) => void;
  setCompleteTasks: (tsks: TasksCompletionInterface[]) => void;
  setFilteredTasks: (tsk: TaskInterface[]) => void;
};

export const useUserStore = create<UserStore>((set, get) => ({
  userId: "",
  balance: 0,
  tasks: [],
  completedTasks: [],
  filteredTasks: [],
  setId: (id) => {
    set({ userId: id });
  },
  setBalance: (bal) => set({ balance: bal }),
  setTasks: (tsk) => set({ tasks: tsk }),
  setCompleteTasks: (tsks) => set({ completedTasks: tsks }),
  setFilteredTasks: (tsk) => set({ filteredTasks: tsk }),
}));
