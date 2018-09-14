<<<<<<< HEAD
// Restrict login and register pages to only users that are not logged in
// We create then a "guest" session, called in 'register' and 'login' pages

=======
>>>>>>> caf94e09b7afa25eb224df92f2447710b58bfb90
export default function({store, redirect}) {
  if(store.state.auth.loggedIn)
    return redirect('/')
}
