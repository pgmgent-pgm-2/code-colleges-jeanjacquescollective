export default {
  async fetchData(url) {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    return data;
  },
  async postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};