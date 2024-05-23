import Image from 'next/image'

function ProfilePicture(props) {
  return (
    <Image
      width={486}
      height={534}
      src="/profile1.png"
      alt="Main Profile Picture"
    />
  );
}

export default ProfilePicture;
