class GitHub {
    constructor() {
        this.client_id = 'ad156314689952d37613';
        this.client_secret = '9bbe3fb44a0b23741ca84cfa618b5acc26229e00';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repositoriesResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repositoriesResponse.json();

        return {
            // 'profile: profile' does the same thing as 'profile'
            profile, 
            repos
        }
    }
}