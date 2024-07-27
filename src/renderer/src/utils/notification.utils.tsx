import {
  IconCircleCheck,
  IconExclamationCircle,
  IconAlertTriangle,
} from '@tabler/icons-react'
import { toast } from 'sonner'

interface INotificationProps {
  title: string
  description?: string
}

class Notification {
  Error({ title, description }: INotificationProps) {
    toast(title, {
      icon: <IconExclamationCircle />,
      position: 'top-right',
      description,
      classNames: {
        icon: 'mr-2 text-red-500',
      },
    })
  }

  Success({ title, description }: INotificationProps) {
    toast(title, {
      icon: <IconCircleCheck />,
      position: 'top-right',
      description,
      classNames: {
        icon: 'mr-2 text-green-500',
      },
    })
  }

  Warn({ title, description }: INotificationProps) {
    toast(title, {
      icon: <IconAlertTriangle />,
      position: 'top-right',
      description,
      classNames: {
        icon: 'mr-2 text-yellow-500',
      },
    })
  }
}

export const showNotification = new Notification()
