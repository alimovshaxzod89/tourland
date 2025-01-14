import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/Form.css';
import { useTranslation } from 'react-i18next';

function Form({ onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni boshqarish uchun holat
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    surname: '',
    telegram_link: '',
  });

  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(id, value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const token = '7665371532:AAGJL0H3bQfuxUEmiaeXdVP-H852vkoAyak';
    const chat_id = 1900350687;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `
      📝 Yangi xabar: \n
      👤 Ismi: ${formData.name} \n
      📞 Telefon: ${formData.phone_number} \n
      🧑‍💼 Familiyasi: ${formData.surname} \n
      🔗 Telegram: ${formData.telegram_link}
    `;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: message,
      });
      setIsModalOpen(true); // Modalni ochish
    } catch (err) {
      console.log('Xatolik yuz berdi: ', err);
      alert('Xabar yuborishda xatolik yuz berdi!');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Modalni yopish
    onClose(); // Formani yopish
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <div className="flex">
            <div className="icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="User Icon"
              />
            </div>
            <div>
              <span
                className="close-icon"
                onClick={onClose}
                style={{
                  cursor: 'pointer',
                  fontSize: '24px',
                  marginLeft: '10px',
                }}
              >
                &#9932;
              </span>
            </div>
          </div>
          <h2> {t('form-title')} </h2>
        </div>
        <form className="form-body" onSubmit={sendMessage}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('form-name-placeholder')}
              required
            />
            <input
              type="text"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder={t('form-phone-number-placeholder')}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder={t('form-surname-placeholder')}
              required
            />
            <input
              type="text"
              id="telegram_link"
              value={formData.telegram_link}
              onChange={handleChange}
              placeholder={t('form-telegram-placeholder')}
            />
          </div>
          <button type="submit" className="submit-btn">
            {t('form-submit-button')}
          </button>
        </form>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Xabar muvaffaqiyatli yuborildi!</h3>
              <button onClick={closeModal} className="modal-btn">
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
