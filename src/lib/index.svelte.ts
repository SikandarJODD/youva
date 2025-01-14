
class Users {
  data = $state([])
  constructor(served_users: any = []) {
    this.data = served_users
  }
}

export let og = new Users()