import { store } from 'react-notifications-component';

export function dispatchSuccess(message) {
    store.addNotification({
        title: 'Success',
        message: message,
        type: 'success',
        insert: "top",
        container: "top-center",
        dismiss: {
            duration: 2000,
            onScreen: true
          }
    })
}

export function dispatchError(message) {
    store.addNotification({
        title: 'Error',
        message: message,
        type: 'danger',
        insert: "top",
        container: "top-center",
        dismiss: {
            duration: 2000,
            onScreen: true
          }
    })
}


