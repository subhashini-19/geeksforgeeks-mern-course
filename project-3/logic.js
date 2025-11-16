document.getElementById("toggleSidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("show");
});

//chart

const ctx = document.getElementById("utilChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["May", "June", "July", "Aug", "Sept", "Oct"],
    datasets: [
      {
        label: "Overall Utilization",
        data: [34, 56, 77, 96, 788, 998],
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(13,110,253,0.07)",
        borderColor: "rgba(13,110,253,0.8)",
        pointRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: { y: { beginAtZero: false, min: 40, max: 100 } },
  },
});

// Reports Charts
const barCtx = document.getElementById("reportBar");
new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Payments", "Analytics", "Infra", "AI", "CRM"],
    datasets: [
      {
        label: "Project Efficiency (%)",
        data: [82, 76, 88, 91, 73],
        backgroundColor: "rgba(13,110,253,0.6)",
        borderRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  },
});

const pieCtx = document.getElementById("reportPie");
new Chart(pieCtx, {
  type: "doughnut",
  data: {
    labels: ["Frontend", "Backend", "Data Science", "QA", "DevOps"],
    datasets: [
      {
        data: [25, 30, 20, 15, 10],
        backgroundColor: [
          "rgba(13,110,253,0.8)",
          "rgba(25,135,84,0.8)",
          "rgba(255,193,7,0.8)",
          "rgba(220,53,69,0.8)",
          "rgba(102,16,242,0.8)",
        ],
      },
    ],
  },
  options: {
    plugins: { legend: { position: "bottom" } },
  },
});

document
  .getElementById("saveProjectBtn")
  .addEventListener("click", function () {
    const name = document.getElementById("projectName").value.trim();
    const team = document.getElementById("projectTeam").value.trim();
    const progress = document.getElementById("projectProgress").value;
    const due = document.getElementById("projectDue").value;
    const desc = document.getElementById("projectDescription").value.trim();

    // show inline bootstrap alert inside the modal (uses #formAlert placeholder)
    function showInlineError(message) {
      const alertEl = document.getElementById("formAlert");
      if (!alertEl) return;
      // set markup for dismissible bootstrap alert
      alertEl.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      // apply bootstrap classes and make visible
      alertEl.className = "alert alert-danger alert-dismissible fade show";
    }

    // show inline success alert inside the modal
    function showInlineSuccess(message) {
      const alertEl = document.getElementById("formAlert");
      if (!alertEl) return;
      alertEl.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      alertEl.className = "alert alert-success alert-dismissible fade show";
    }

    // clear inline alert
    function clearInlineError() {
      const alertEl = document.getElementById("formAlert");
      if (!alertEl) return;
      alertEl.className = "alert d-none";
      alertEl.innerHTML = "";
    }

    if (!name || !team || !progress || !due) {
      showInlineError("Please fill all required fields!");
      // focus first missing field
      if (!name) document.getElementById("projectName").focus();
      else if (!team) document.getElementById("projectTeam").focus();
      else if (!progress) document.getElementById("projectProgress").focus();
      else if (!due) document.getElementById("projectDue").focus();
      return;
    }

    // on successful validation, clear any existing inline error
    clearInlineError();

    const projectHTML = `
            <div class="col-md-6 col-lg-4">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body">
                  <h6 class="fw-bold">${name}</h6>
                  <p class="text-muted mb-2">
                    Team: <strong>${team}</strong>
                  </p>
                  <div class="progress mb-2" style="height: 10px">
                    <div class="progress-bar bg-primary" style="width: ${progress}%"></div>
                  </div>
                  <small class="text-muted">${progress}% complete</small>
                  <p class="mt-2 small text-muted">${desc}</p>
                </div>
                <div class="card-footer bg-white border-0 d-flex justify-content-between">
                  <span><i class="fa-regular fa-calendar"></i> Due: ${due}</span>
                  <a href="#" class="btn btn-sm btn-outline-primary">View</a>
                </div>
              </div>
            </div>
          `;

    document
      .querySelector("#projects .row.g-4")
      .insertAdjacentHTML("beforeend", projectHTML);

    // show inline success message, then close modal after short delay
    showInlineSuccess("Project saved successfully.");

    // ensure we get modal instance (works when modal is open)
    const modalEl = document.getElementById("addProjectModal");
    const modalInstance =
      bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);

    // hide modal after a short delay so user sees inline success
    setTimeout(() => {
      modalInstance.hide();
      document.getElementById("addProjectForm").reset();
      clearInlineError();
    }, 900);
  });


  // on clicking profile link in sidebar, use JS to navigate 
document.addEventListener("DOMContentLoaded", function () {
  const profileBtn = document.getElementById("profileBtn");
  if (profileBtn) {
    profileBtn.addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || e.button === 1) return;
      e.preventDefault();
      // use assign so browser history is preserved
      window.location.assign("profile.html");
    });
  }
});
