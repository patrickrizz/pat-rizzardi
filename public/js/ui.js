class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="github">
          <div class="row" style="border: 1px solid grey; padding: 1rem 0; border-radius: 10px;">
            <div class="col m3">
              <img class="responsive-img" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col m9">
              <span class="badge">Public Repos: ${user.public_repos}</span>
              <span class="badge">Public Gists: ${user.public_gists}</span>
              <span class="badge">Followers: ${user.followers}</span>
              <span class="badge">Following: ${user.following}</span>
              <br><br>
              <ul style="border: 1px solid grey; padding: 1rem 0; border-radius: 10px;">
                <li style="padding: 1.2rem"><b>Company:</b> ${user.company}</li>
                <li style="padding: 1.2rem"><b>Website/Blog:</b> ${user.blog}</li>
                <li style="padding: 1.2rem"><b>Location:</b> ${user.location}</li>
                <li style="padding: 1.2rem"><b>Member Since:</b> ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3>Latest Repos</h3>
        <div id="repos" style="border: 1px solid grey; padding: 1rem 0; border-radius: 10px;"></div>
      `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col m6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col m6">
              <span class="badge">Stars: ${repo.stargazers_count}</span>
              <span class="badge">Watchers: ${repo.watchers_count}</span>
              <span class="badge">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>
        `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}