export default function SectionHeading({
  image,
  alt,
  className = "",
  imageClassName = "",
}) {
  return (
    <div className={`text-center ${className}`}>
      <img
        src={image}
        alt={alt}
        className={`
          mx-auto
          w-full
          h-auto
          object-contain
          ${imageClassName}
        `}
      />
    </div>
  );
}