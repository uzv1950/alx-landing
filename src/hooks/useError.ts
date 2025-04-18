import { getValidationError } from '@/const/index';
import { useSnackbar, VariantType } from 'notistack';
import { useTranslation } from 'next-i18next';

/**
 * Hook to display a snackbar message when an error occurs.
 */
const useError = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation('error');

  const showAlert = {
    toast(msg: string, variant: VariantType) {
      enqueueSnackbar(msg, { variant });
    },
    success(msg: string) {
      this.toast(msg, 'success');
    },
    error(msg: string) {
      this.toast(msg, 'error');
    },
    info(msg: string) {
      this.toast(msg, 'info');
    },
    warning(msg: string) {
      this.toast(msg, 'warning');
    }
  };

  const logError = (error: any, message?: string): void => {
    if (error.message) {
      const customMessage = message || error.message.split(':').pop().trim();
      const key = getValidationError(customMessage);

      if (key) {
        const msg = t(`${key}`) || key;
        showAlert.error(msg);
      } else {
        showAlert.error(customMessage);
      }
    }
  };

  return {
    logError,
    showAlert
  };
};

export default useError;
