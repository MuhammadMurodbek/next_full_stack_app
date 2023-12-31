export default function Avatar({ url }: { url: string }) {
  return (
    <>
      <img
        data-testid="image_avatar"
        className="w-10 h-10 rounded-full object-cover"
        src={url || "/docs/images/people/profile-picture-5.jpg"}
        alt="Rounded avatar"
      ></img>
    </>
  );
}
