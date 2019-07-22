class Properties {
  public endPoint = process.env.AAT_URL ? process.env.AAT_URL : 'http://jsonplaceholder.typicode.com';
}

export let apiProps = new Properties();
