import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import BpTypography from '@/components/shared/typography/BpTypography';
import { Box, Grid, Stack } from '@mui/material';
import ButtonSecondary from '@/components/common/button/ButtonSecondary';
import BpTextFieldWithLabel from '@/components/shared/input/BpTextFieldWithLabel';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  open: boolean;
  onClose: () => void;
};

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  email: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Only numbers are allowed')
    .min(10, 'Phone number must have at least 10 digits')
    .required('Phone number is required'),
  company: Yup.string().required('Please select a company'),
  email: Yup.string().email('Invalid email address').required('Email is required')
});

const ModalContanctSponsor = ({ open, onClose }: Props) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      company: '',
      email: ''
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      // Here you can handle the form submission
      onClose();
    }
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      PaperProps={{
        sx: {
          maxWidth: '758px',
          width: '100%',
          borderRadius: '1rem',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)',
          padding: '2px'
        }
      }}
    >
      <Box
        sx={{
          bgcolor: '#080B0D',
          borderRadius: '1rem'
        }}
      >
        <DialogContent>
          <BpTypography textAlign="center" color="grey.50" component="h2" variant="h1">
            Contáctanos
          </BpTypography>
          <BpTypography mt={2} color="grey.50" component="p" variant="bodyS">
            Da el primer paso hacia la transformación digital de tu hotel. Contáctanos hoy mismo y descubre cómo StackUp
            puede impulsar tu éxito.
          </BpTypography>

          <form onSubmit={formik.handleSubmit}>
            <Grid mt={3} container spacing={2}>
              <Grid item xs={12} md={6}>
                <BpTextFieldWithLabel
                  label="Nombre"
                  name="firstName"
                  placeholder="Ingresa tu nombre"
                  fullWidth
                  color="primary"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BpTextFieldWithLabel
                  label="Apellido"
                  name="lastName"
                  placeholder="Ingresa tu apellido"
                  fullWidth
                  color="primary"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BpTextFieldWithLabel
                  label="Teléfono"
                  name="phone"
                  placeholder="Ingresa tu número"
                  fullWidth
                  color="primary"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BpTextFieldWithLabel
                  label="Empresa"
                  name="company"
                  placeholder="Selecciona una empresa"
                  fullWidth
                  color="primary"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.company && Boolean(formik.errors.company)}
                  helperText={formik.touched.company && formik.errors.company}
                />
              </Grid>
              <Grid item xs={12}>
                <BpTextFieldWithLabel
                  label="Correo electrónico"
                  name="email"
                  placeholder="P.ej. correo.electronico@gmail.com"
                  fullWidth
                  color="primary"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
            </Grid>
            <Stack mt={3} direction="row" spacing={2} justifyContent="center">
              <ButtonSecondary type="submit" size="large" sx={{ width: '100px', height: '58px' }} fullWidth={false}>
                Enviar
              </ButtonSecondary>
            </Stack>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ModalContanctSponsor;
