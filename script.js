function calculateTimeBar() {
  const awareDate = document.getElementById('awareDate').value;
  const notifyDate = document.getElementById('notifyDate').value;
  const limitWeeks = parseFloat(document.getElementById('limitWeeks').value) || 0;

  const resultDiv = document.getElementById('result');

  if (!awareDate || !notifyDate || limitWeeks <= 0) {
    resultDiv.textContent = 'Please complete all fields.';
    return;
  }

  const aware = new Date(awareDate);
  const notify = new Date(notifyDate);
  const diffMs = notify - aware;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const limitDays = limitWeeks * 7;
  const barred = diffDays > limitDays;

  resultDiv.textContent = `Notification was made ${diffDays} days after awareness. ` +
                          `Time bar is ${limitDays} days. ` +
                          (barred ? 'The event is time-barred.' : 'The event is not time-barred.');
}

document.getElementById('calculateBtn').addEventListener('click', calculateTimeBar);
