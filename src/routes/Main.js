import { Switch, Route } from "react-router-dom";
import {
  Account,
  Calendar,
  Chat,
  Home,
  Questions,
  Courses,
  Auth,
  CourseInfo,
  Verify,
} from "../view";
// import Topics from "./Auth";

export default function NestingExample() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/questions" component={Questions} />
      <Route path="/auth" component={Auth} />
      <Route path="/graduates" component={CourseInfo} />
      <Route exact path="/verifyemail" component={Verify} />
    </Switch>
  );
}
