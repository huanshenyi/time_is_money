import clsx from 'clsx';
import { Button } from '@/components/Elements/Button';

const icons = {
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-current flex-shrink-0 w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current flex-shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current flex-shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current flex-shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const variants = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
};

export type NotificationProps = {
  notification: {
    id: string;
    type: keyof typeof icons;
    title?: string;
    message?: string;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({ notification: { id, type, title, message }, onDismiss }: NotificationProps) => {
  return (
    <div className={clsx('alert shadow-lg max-w-lg mx-auto', variants[type])}>
      <div>
        {icons[type]}
        <div>
          {title && <h4 className="font-bold">{title}</h4>}
          <div>{message}</div>
        </div>
      </div>
      <div className="flex-none">
        <Button
          variant={type}
          onClick={() => {
            onDismiss(id);
          }}
          size="xs"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
