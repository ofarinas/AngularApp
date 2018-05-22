export class Router {

  constructor() {
  }

  static navigate(url: string) {
    console.log('navigating');
    window.location.href = url
  }
}
