import { withAuth } from "../../src/components/commons-components/hoc/withAuth";
import ProfileContainer from "../../src/components/units/profile/profilepage/profilepage.container";

export const ProfilePage = () => {
  return <ProfileContainer />;
};

export default withAuth(ProfilePage);
