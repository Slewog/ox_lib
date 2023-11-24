import { TextUiProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugTextUI = () => {
  debugData<TextUiProps>([
    {
      action: 'textUi',
      data: {
        text: '[E] - Access locker inventory  \n [G] - Do something else',
        position: 'right-center',
        icon: 'door-open',
        iconResize:true,
        style:{
          borderRadius:12,
          borderLeft: '0.3em solid #2f83ff',
          padding:15,
          fontWeight: 'bold',
          backgroundColor: 'rgba(20, 20, 20, 0.85)'
        }
      },
    },
  ]);
};
