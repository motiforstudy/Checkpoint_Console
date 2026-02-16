import './App.css'
import GetMessages from './components/get_messages/GetMessages'
import GetStatus from './components/get_status/GetStatus'
import Login from './components/login/Login'
import PostMessage from './components/post_message/PostMessage'

function App() {

  return (
    <div>
      <Login></Login>
      <GetStatus></GetStatus>
      <GetMessages></GetMessages>
      <PostMessage></PostMessage>
    </div>
  )
}

export default App
