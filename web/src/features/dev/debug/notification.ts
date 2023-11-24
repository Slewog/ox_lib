import { NotificationProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugCustomNotification = () => {
  debugData<NotificationProps>([
    {
      action: 'notify',
      data: {
        title: 'Success',
        description: 'Notification description',
        icon: 'info-circle',
        iconColor: '#2f83ff',
        iconResize:true,
        style: {
          borderRadius:12,
          borderLeft: '0.3em solid #2f83ff',
          padding:15,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'rgba(20, 20, 20, 0.85)',
          '.description': {
            color: 'white',
            fontSize: 14,
          },
        },
      },
    },
  ]);
  debugData<NotificationProps>([
    {
      action: 'notify',
      data: {
        description: 'Notification description',
        icon: 'info-circle',
        iconColor: '#2f83ff',
        style: {
          borderRadius:12,
          borderLeft: '0.3em solid #2f83ff',
          padding:15,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'rgba(20, 20, 20, 0.85)',
          '.description': {
            color: 'white',
            fontSize: 14,
          },
        },
      },
    },
  ]);
  
  debugData<NotificationProps>([
    {
      action: 'notify',
      data: {
        title: 'Error',
        description: 'Notification description',
        type: 'error',
      },
    },
  ]);
  debugData<NotificationProps>([
    {
      action: 'notify',
      data: {
        title: 'Custom icon success',
        description: 'Notification description',
        type: 'success',
        icon: 'microchip',
      },
    },
  ]);
};
