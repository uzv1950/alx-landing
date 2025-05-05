import { Box, Grid, MenuItem, Stack } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import BpTextFieldWithLabel from '@/components/shared/input/BpTextFieldWithLabel';
import ButtonSecondary from '@/components/common/button/ButtonSecondary';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Only numbers are allowed')
    .min(10, 'Phone number must have at least 10 digits')
    .required('Phone number is required'),
  service: Yup.string().required('Please select a service'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
});

const SectionContact = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      service: '',
      email: '',
      message: ''
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      // Here you can handle the form submission
    }
  });

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: '3rem',
        pb: '8rem',
        px: '1.5rem'
      }}
    >
      <Box
        sx={{
          maxWidth: '758px',
          width: '100%',
          mx: 'auto',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            background: 'radial-gradient(circle, rgb(210 200 246 / 22%) 0%, rgb(139 111 246 / 9%) 100%)',
            position: 'absolute',
            top: '10%',
            left: '-90%',
            width: '490px',
            height: '450px',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }}
        />
        <Box
          sx={{
            background:
              'linear-gradient(246.75deg, rgba(139, 208, 221, 0.7) 37.02%, rgba(1, 109, 168, 0.7) 51.04%, rgba(1, 55, 169, 0.7) 67.73%)',
            position: 'absolute',
            top: '40%',
            right: '-35%',
            width: '260px',
            height: '150px',
            borderRadius: '50%',
            filter: 'blur(100px)',
            transform: 'rotate(315deg)'
          }}
        />
        <BpTypography textAlign="center" color="grey.50" component="h2" variant="h1">
          Contáctanos
        </BpTypography>
        <BpTypography
          mt={2}
          textAlign="center"
          color="grey.50"
          component="p"
          variant="bodyS"
          sx={{
            fontSize: {
              xs: '1rem',
              md: '0.875rem'
            }
          }}
        >
          Contáctanos y descubre cómo Altabix puede ayudarte a optimizar, automatizar y potenciar tu negocio.
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
                label="Servicio / Asunto"
                name="service"
                placeholder="Selecciona un Servicio/Asunto"
                fullWidth
                color="primary"
                value={formik.values.service}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.service && Boolean(formik.errors.service)}
                helperText={formik.touched.service && formik.errors.service}
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
            <Grid item xs={12}>
              <BpTextFieldWithLabel
                label="Mensaje"
                name="message"
                placeholder="Escribe aquí"
                fullWidth
                color="primary"
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
          </Grid>
          <Stack mt={3} direction="row" spacing={2} justifyContent="center">
            <ButtonSecondary type="submit" size="large" sx={{ width: '100px', height: '58px' }} fullWidth={false}>
              Enviar
            </ButtonSecondary>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default SectionContact;
