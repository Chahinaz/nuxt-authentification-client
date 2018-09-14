// Restrict login and register pages to only users that are not logged in
// We create then a "guest" session, called in 'register' and 'login' pages

export default function({store, redirect}) {
  if(!store.state.auth)
    return redirect('/')
}
