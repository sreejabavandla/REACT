import Card from './Card.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Button from './Button.jsx';
import ProfilePicture from './ProfilePicture.jsx';
function App() {
  return(
    <>

      <UserGreeting isLoggedin = {false} username="sreejabavandla" />

      <Card />

      <List />

      <Student name="Sreeja" age={18} isStudent={true} />
      <Student />
      <Student name="Sana" isStudent={true} />
      <Student />

      <Button/>

      <ProfilePicture/>



    </>
  );
}

export default App
