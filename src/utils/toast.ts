interface MessageProps {
    message: string;
}

export async function toast(message: MessageProps) {
    const toast = document.createElement("ion-toast");
    toast.message = message.message;
    toast.duration = 800;

    document.body.appendChild(toast);
    return toast.present();
}
