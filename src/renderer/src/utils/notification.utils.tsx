import {
  IconCircleCheck,
  IconExclamationCircle,
  IconAlertTriangle,
} from '@tabler/icons-react'
import { toast } from 'sonner'

interface INotification {
  title: string
  description: string
}

class Notification {
  Error({ title, description }: INotification) {
    toast(title, {
      icon: <IconExclamationCircle />,
      position: 'top-right',
      description,
      classNames: {
        icon: 'mr-2 text-red-500',
      },
    })
  }

  Success({ title, description }: INotification) {
    toast(title, {
      icon: <IconCircleCheck />,
      position: 'top-right',
      description,
      classNames: {
        icon: 'mr-2 text-green-500',
      },
    })
  }

  Warn({ title, description }: INotification) {
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
