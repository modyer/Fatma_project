const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const addPatientBtn = document.getElementById('add-patient-btn');
const patientsList = document.getElementById('patients-list');

let patients = [];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'admin' && password === 'password') {
    dashboard.style.display = 'block';
    loginForm.style.display = 'none';
  } else {
    alert('خطأ في اسم المستخدم أو كلمة المرور');
  }
});

addPatientBtn.addEventListener('click', () => {
  const patientName = prompt('أدخل اسم المريض');
  const patientAge = prompt('أدخل عمر المريض');
  patients.push({ name: patientName, age: patientAge });
  renderPatientsList();
});

function renderPatientsList() {
  patientsList.innerHTML = '';
  patients.forEach((patient) => {
    const li = document.createElement('li');
    li.textContent = `${patient.name} - ${patient.age} سنة`;
    patientsList.appendChild(li);
  });
}
