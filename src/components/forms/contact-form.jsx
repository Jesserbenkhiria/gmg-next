import { useFormik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'next-i18next'; // Import the translation hook
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const ContactForm = () => {
  const { t } = useTranslation('common'); // Use the 'common' namespace for translations
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', phone: '', service: '', msg: '' },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true); // Start loading

      emailjs
        .send(
          'service_z5scaqd', // Replace with your EmailJS Service ID
          'template_ftn15it', // Replace with your EmailJS Template ID
          {
            user_name: values.name,
            user_email: values.email,
            user_phone: values.phone,
            selected_service: values.service,
            message: values.msg,
          },
          'e2PTlVAkDdFtNd26a' // Replace with your EmailJS Public Key
        )
        .then(
          (result) => {
            setIsLoading(false); // Stop loading
            toast.success(`${values.name}, ${t('form.success_message')}`, {
              position: 'top-left',
            });
            resetForm();
          },
          (error) => {
            setIsLoading(false); // Stop loading
            toast.error(t('form.error_message'), {
              position: 'top-left',
            });
            console.error('EmailJS error:', error);
          }
        );
    },
  });

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="mb-30">
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          name="name"
          type="text"
          placeholder={t('form.name_placeholder')}
        />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className="mb-30">
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="email"
          placeholder={t('form.email_placeholder')}
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="mb-30">
        <input
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          name="phone"
          type="tel"
          placeholder={t('form.phone_placeholder')}
        />
        {touched.phone && <ErrorMsg error={errors.phone} />}
      </div>
      <div className="mb-30">
        <select
          value={values.service}
          onChange={handleChange}
          onBlur={handleBlur}
          name="service"
          className="form-control styled-select"
        >
          <option value="" disabled>
            {t('form.service_placeholder')}
          </option>
          <option value="Recrutement de Personnel Médical">
            {t('form.service_medical')}
          </option>
          <option value="Placement des Étudiants">
            {t('form.service_students')}
          </option>
          <option value="Formations Professionnelles">
            {t('form.service_training')}
          </option>
          <option value="École de Langues">
            {t('form.service_languages')}
          </option>
        </select>
        {touched.service && <ErrorMsg error={errors.service} />}
      </div>
      <div className="mb-30">
        <textarea
          value={values.msg}
          onChange={handleChange}
          onBlur={handleBlur}
          name="msg"
          placeholder={t('form.message_placeholder')}
        ></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <button type="submit" className="tp-btn-yellow" disabled={isLoading}>
        {isLoading ? t('form.sending') : t('form.submit')}
      </button>
    </form>
  );
};

export default ContactForm;
