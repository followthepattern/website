import classNames from "classnames";
import profile from "../../../img/profile.jpg"
import Image from "next/image";

interface ProfileProperites {
    className?: string
}

const Profile = (props: ProfileProperites) => {
    return (
        <Image
            alt="Picture of Csaba Zsolt Huszka"
            className={classNames("rounded-3xl h-32 w-32 lg:h-36 lg:w-36 xl:h-44 xl:w-44 object-cover", props.className)}
            src={profile}
        ></Image>
    )
}

export default Profile;