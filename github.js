class Github {
  constructor() {
    this.client_id = "11bbd6c7c6fb9396cb78";
    this.client_secret = "2e3f4c6ae486cb5431bef865561293ab132902a5";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
