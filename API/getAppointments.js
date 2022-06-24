export async function getAppointments() {
  const response = await fetch('http://localhost:4200/appointments');
  return await response.json();
}
