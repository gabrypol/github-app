class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    // Display profile
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-2">Public Repositories: ${user.public_repos}</span>
                        <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
                        <span class="badge badge-info mb-2">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest 5 Repos:</h3>
            <div id="repos"></div>
        `;
    }

    // Show repositories
    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success mb-2">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `
        });

        // Display repositories
        document.querySelector('#repos').innerHTML = output;
    }

    // Show alert message (it is called when a user does not exist)
    showAlert(message, bootstrapClass) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create element
        const div = document.createElement('div');
        // Add Bootstrap classes
        div.className = bootstrapClass;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // get search box 
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Delete 'clear alert' after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message after one is already showing
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile (it is called when the input field is empty)
    clearProfile() {
        this.profile.innerHTML = '';
    }
}