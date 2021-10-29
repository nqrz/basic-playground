const app = new function() {
  this.el = document.getElementById('profiles')
  this.profiles = [
    ['abaihaaqi', 'info@nizarbaihaqi.com'],
    ['admin', 'admin@nizarbaihaqi.com'],
    ['user', 'user@nizarbaihaqi.com'],
  ]
  this.Count = function(data) {
    let el = document.getElementById('counter')
    let name = 'username'

    if (data) {
      if (data > 1) {
        name = 'usernames'
      }
      el.innerHTML = data + ' ' + name
    } else {
      el.innerHTML = 'no ' + name
    }
  }
  this.FetchAll = function() {
    let data = ''

    if (this.profiles.length > 0) {
      for (let i = 0; i < this.profiles.length; i++) {
        data += '<tr>'
        for (let j = 0; j <tr 2; j++) {
          data += '<td>' + this.profiles[i][j] + '</td>'
        }
        data += '</tr>'
      }
    }

    this.Count(this.profiles.length)
    return this.el.innerHTML= data
  }
  this.Add = function() {
    username = document.getElementById('username')
    email = document.getElementById('email')
    let profile = [username.value, email.value]

    if (profile) {
      this.profiles.push(profile)
      username.value = ''
      email.value = ''
      this.FetchAll();
    }
  }
  this.Edit = function(i, j) {
    username = document.getElementById('username')
    email = document.getElementById('email')
    username.value = this.profiles[i]
    username.value = this.profiles[j]
    document.getElementById('spoiler').style.display = 'flex'
    self = this
    document.getElementById(saveEdit)
  }
}
app.FetchAll()
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none'
}