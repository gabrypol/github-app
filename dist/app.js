// Make a new instance of the 'GitHub' class
const github = new GitHub;

// Make a new instance of the 'UI' class
const ui = new UI;

const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', function(e) {
    const textInputByUser = e.target.value;

    if (textInputByUser !== '') {
        // Make http call
        github.getUser(textInputByUser)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('The user does not exist', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});