const feedback_form_state = 'feedback-form';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea')

form.addEventListener('input', e =>{
    const userEmail = form.elements.email.value;
    const userMessage = form.elements.message.value;

    const data ={
        email: userEmail,
        message: userMessage,
    };
    saveToLS(feedback_form_state, data)
});
form.addEventListener('submit', e => {
    e.preventDefault();
  
    const data = loadFromLS(feedback_form_state) || {};
    console.log(data);
  
    localStorage.removeItem(feedback_form_state);
    form.reset();
  });

function loadFromLS(key = 'empty') {
    const data = localStorage.getItem(key); 
  
    try {
      const result = JSON.parse(data);
      return result;
    } catch {
      return data;
    }
  }
  
  function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }
  function restoreData() {
    const data = loadFromLS(feedback_form_state) || {};
  
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
  }
  
  restoreData();
  