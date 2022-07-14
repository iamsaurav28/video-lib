import { createContext, useContext, useReducer } from "react";

const ToastContext = createContext();

const reduceFunc = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VIDEO_TOAST_VISIBILITY": {
      if (state.videoToastVisibility === "hidden")
        return { ...state, videoToastVisibility: "visible" };

      return { ...state, videoToastVisibility: "hidden" };
    }

    

    default:
      return state;
  }
};

export const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(reduceFunc, {
    videoToastVisibility: "hidden",
    videoToastText: "",
  });
  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
