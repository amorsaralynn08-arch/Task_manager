export const initialState =[
    {id:1 ,text:"finish prpoperty Dashboard" complete{false}}
    {id:1 ,text:"finish prpoperty Dashboard" complete{false}}
]
export const TaskReducer= (state,action) =>{
    switch (action.type) {
        case "ADD TASK"
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case "TOGGLE_TASK"
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      case "DELETE_TASK"
      return state.filter((task) => task.id !== action.payload)
      Default:
      return:state
    }
}