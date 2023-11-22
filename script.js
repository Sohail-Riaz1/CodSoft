const jobForm = document.getElementById('jobForm');
const jobListings = document.getElementById('jobListings');
const postJobButton = document.getElementById('postJobButton');
const postJobForm = document.getElementById('postJobForm');

let jobs = [];

// Sample initial job listings
jobs = [
  {
    title: 'Full Stack Web Developer',
    description: 'We are looking for a skilled Web Developer...',
    location: 'Dera Ghazi Khan,Pakistan',
  },
];
function displayJobListings() {
  jobListings.innerHTML = '';
  jobs.forEach(job => {
    const jobItem = document.createElement('div');
    jobItem.classList.add('job-item');
    jobItem.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.description}</p>
      <p><strong>Location:</strong> ${job.location}</p>
    `;
    jobListings.appendChild(jobItem);
  });
}
jobForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('jobTitle').value;
  const description = document.getElementById('jobDescription').value;
  const location = document.getElementById('jobLocation').value;

  if (title && description && location) {
    const newJob = {
      title,
      description,
      location,
    };
    jobs.push(newJob);
    displayJobListings();
    jobForm.reset();
    togglePostJobForm(); 
  } else {
    alert('Please fill in all fields.');
  }
});
function togglePostJobForm() {
  postJobForm.classList.toggle('hidden');
}
postJobButton.addEventListener('click', togglePostJobForm);

displayJobListings();
