
async function loadHireIndiaJobs() {

  const response = await fetch('./data/jobs.json');
  let jobs = await response.json();

  const today = new Date();

  jobs = jobs.filter(job => new Date(job.deadline) >= today);

  jobs.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));

  const container = document.getElementById('dynamic-jobs');

  function getDaysLeft(deadline){
    return Math.ceil(
      (new Date(deadline) - today)/(1000*60*60*24)
    );
  }

  jobs.forEach(job => {

    const daysLeft = getDaysLeft(job.deadline);

    container.innerHTML += `

    <div class="featured-card">

      <img src="${job.image}" class="featured-img">

      <div class="featured-content">

        <div class="featured-top">
          <span class="featured-category">
            ${job.category}
          </span>

          <span class="urgent-badge">
            ${job.badge}
          </span>
        </div>

        <h2 class="featured-title">
          ${job.title}
        </h2>

        <div class="quick-facts">

          <div class="fact">
            <div class="fact-label">Posts</div>
            <div class="fact-value">${job.posts}</div>
          </div>

          <div class="fact">
            <div class="fact-label">Salary</div>
            <div class="fact-value green">${job.salary}</div>
          </div>

          <div class="fact">
            <div class="fact-label">Deadline</div>
            <div class="fact-value red">
              ${daysLeft} Days Left
            </div>
          </div>

        </div>

        <div class="card-actions">
          <a href="${job.page}" class="btn-primary">
            View Full Details →
          </a>
        </div>

      </div>

    </div>

    `;
  });

}

loadHireIndiaJobs();
