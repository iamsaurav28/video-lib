import { useVideo } from "../Context/VideoContext";
import { useToast } from "../Context/ToastContext";

export const MenuListItem = ({
  video,
  item: {
    iconClass,
    videoAction,
    itemName,
    toggleAction,
    toastText,
    setTextAction
  }
}) => {
  const { dispatch } = useVideo();
  const { toastDispatch } = useToast();

  return (
    <div
      onClick={() => {
        dispatch({ type: videoAction, payload: video });
        toastDispatch({ type: toggleAction });
        toastDispatch({ type: setTextAction, payload: toastText });
        setTimeout(() => {
          toastDispatch({ type: toggleAction });
        }, 3000);
      }}
      className="menu-listbox-item"
    >
      <i className={iconClass}></i>
      {itemName}
    </div>
  );
};
