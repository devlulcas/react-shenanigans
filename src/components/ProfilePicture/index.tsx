import "./styles.css";

type profilePictureProps = {
  userId: number;
};

export default function ProfilePicture({ userId }: profilePictureProps) {
  return (
    <div className="profile-picture-container">
      <picture className="profile-picture-frame">
        <img
          className="profile-picture"
          src={`https://avatars.dicebear.com/api/open-peeps/${userId}.svg`}
          alt="profile picture"
        />
      </picture>
    </div>
  );
}
