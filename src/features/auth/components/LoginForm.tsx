import { Button } from '@/components/Elements';
import { useNotificationStore } from '@/stores/notifications';

export const LoginForm = () => {
  const addNotification = () => {
    useNotificationStore.getState().addNotification({
      type: 'info',
      title: 'infotitle',
    });
  };
  return (
    <div>
      <Button onClick={addNotification}>通知追加</Button>
    </div>
  );
};
