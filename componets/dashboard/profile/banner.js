export default function ProfileBanner() {
  return (
    <div className="flex w-full relative">
      <div className="flex w-full relative">
        <img
          src={"/images/hero-bg.jpg"}
          alt="hero"
          className="h-60 w-full object-cover"
        />
        {/* {pathname === "/settings" && (
                <div
                  className="absolute dark-rounded-button  right-3 bottom-2"
                  onClick={() => {
                    backgroundPicture.current.click();
                  }}
                >
                  <input
                    type="file"
                    name="background picture"
                    ref={backgroundPicture}
                    id="backgroundImage"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      handlePictureUpload({
                        image: e.target.files[0],
                        url: "http://localhost:3000/auth/upload/background",
                        placeholder: "backgroundPic",
                      });
                    }}
                  />
                  <Camera />
                </div>
              )} */}
      </div>
      <div className="absolute -bottom-10 left-1/2 sm:-bottom-20 sm:left-10 flex transform -translate-x-1/2 sm:translate-0">
        <div className="relative">
          <img
            src={"/images/blank-profile-picture-973460_960_720.webp"}
            alt={`Profile Picture`}
            className="h-25 w-25 sm:w-35 sm:h-35 object-cover rounded-full bg-transparent"
          />
          {/* {pathname === "/settings" && (
                  <div
                    className="absolute dark-rounded-button p-1! right-0 top-18 sm:top-25 sm:right-1.5"
                    onClick={() => {
                      profilePicture.current.click();
                    }}
                  >
                    <input
                      type="file"
                      name="profilePicture"
                      id="profilePicture"
                      ref={profilePicture}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        handlePictureUpload({
                          image: e.target.files[0],
                          url: "http://localhost:3000/auth/upload/profile ",
                          placeholder: "profilePic",
                        });
                      }}
                    />
                    <Camera className="w-4 h-4" />
                  </div>
                )} */}
        </div>
      </div>
    </div>
  );
}
