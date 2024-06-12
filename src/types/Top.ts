import { ModalAddData } from "./Modal.type";

export type TopProps = {
  onAdd: (data: ModalAddData) => void;
};

export type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onAdd: (data: ModalAddData) => void;
  // children: React.ReactNode;
};
