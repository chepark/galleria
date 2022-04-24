import "./_modal.styles.scss";
import { createPortal } from "react-dom";
import { useWindowSize } from "../../hooks/useWindowSize.hook";

const Modal = ({ children }) => {
  const [innerHeight, innerWidth] = useWindowSize();

  return createPortal(
    <div
      className="modal-overlay"
      style={{ width: innerWidth, height: innerHeight }}
    >
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
