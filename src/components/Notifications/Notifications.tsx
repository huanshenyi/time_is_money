import { useNotificationStore } from '@/stores/notifications';

import { Notification } from './Notification';

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();
  return (
    <div className="z-50 grid gap-1 fixed w-full flex-col items-center">
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} onDismiss={dismissNotification} />
      ))}
    </div>
  );
};
