export interface ModalProps {
    fecharOModal: () => void;
    EditarVideo: (_id: string, title: string,desc: string, url: string) => void;
    onCreateVideo: (title: string,desc: string, url: string) => void;
}